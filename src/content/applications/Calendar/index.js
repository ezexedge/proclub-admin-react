import { useState, useRef, useEffect } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Container,
  Grid,
  Drawer,
  useTheme,
  Box,
  Card,
  Divider,
  useMediaQuery
} from '@material-ui/core';

import { useDispatch, useSelector } from 'src/store';
import {
  getEvents,
  updateEvent,
  selectEvent,
  selectRange,
  openDrawerPanel,
  closeDrawerPanel
} from 'src/slices/calendar';

import Actions from './Actions';
import EventDrawer from './EventDrawer';
import { experimentalStyled } from '@material-ui/core/styles';

const FullCalendarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};

    .fc {

      .fc-col-header-cell {
        padding: ${theme.spacing(1)};
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-scrollgrid {
        border: 2px solid ${theme.colors.alpha.black[10]};
        border-right-width: 1px;
        border-bottom-width: 1px;
      }

      .fc-cell-shaded,
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-theme-standard td, .fc-theme-standard th,
      .fc-col-header-cell,
      td {
        border: 1px solid ${theme.colors.alpha.black[10]};
      }

      .fc-event {
        padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
      }

      .fc-list-day-side-text {
        font-weight: normal;
        color: ${theme.colors.alpha.black[70]};
      }

      .fc-list-event:hover td,
      td.fc-daygrid-day.fc-day-today {
        background-color: ${theme.colors.primary.lighter};
      }

      td.fc-daygrid-day:hover,
      .fc-highlight {
        background: ${theme.colors.alpha.black[10]};
      }

      .fc-daygrid-dot-event:hover, 
      .fc-daygrid-dot-event.fc-event-mirror {
        background: ${theme.colors.primary.lighter};
      }

      .fc-daygrid-day-number {
        padding: ${theme.spacing(2)};
        font-weight: bold;
      }

      .fc-list-sticky .fc-list-day > * {
        background: ${theme.colors.alpha.black[5]} !important;
      }

      .fc-cell-shaded, 
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[10]} !important;
        color: ${theme.colors.alpha.black[70]} !important;
      }

      &.fc-theme-standard td, 
      &.fc-theme-standard th,
      &.fc-theme-standard .fc-list {
        border-color: ${theme.colors.alpha.black[30]};
      }
    }
`
);

const selectedEventSelector = (state) => {
  const { events, selectedEventId } = state.calendar;

  if (selectedEventId) {
    return events.find((_event) => _event.id === selectedEventId);
  } else {
    return null;
  }
};

function ApplicationsCalendar() {
  const theme = useTheme();

  const calendarRef = useRef(null);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { events, isDrawerOpen, selectedRange } = useSelector(
    (state) => state.calendar
  );
  const selectedEvent = useSelector(selectedEventSelector);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(mobile ? 'listWeek' : 'dayGridMonth');

  const handleDateToday = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.today();
      setDate(calApi.getDate());
    }
  };

  const changeView = (changedView) => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.changeView(changedView);
      setView(changedView);
    }
  };

  const handleDatePrev = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.prev();
      setDate(calApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.next();
      setDate(calApi.getDate());
    }
  };

  const handleAddClick = () => {
    dispatch(openDrawerPanel());
  };

  const handleRangeSelect = (arg) => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.unselect();
    }

    dispatch(selectRange(arg.start, arg.end));
  };

  const handleEventSelect = (arg) => {
    dispatch(selectEvent(arg.event.id));
  };

  const handleEventResize = async ({ event }) => {
    try {
      await dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventDrop = async ({ event }) => {
    try {
      dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const closeDrawer = () => {
    dispatch(closeDrawerPanel());
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();
      const changedView = mobile ? 'listWeek' : 'dayGridMonth';

      calApi.changeView(changedView);
      setView(changedView);
    }
  }, [mobile]);

  return (
    <>
      <ContentWrapper title="Calendar - Applications">
        <PageTitleWrapper>
          <PageHeader handleCreateEvent={handleAddClick} />
        </PageTitleWrapper>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <Box p={3}>
                  <Actions
                    date={date}
                    onNext={handleDateNext}
                    onPrevious={handleDatePrev}
                    onToday={handleDateToday}
                    changeView={changeView}
                    view={view}
                  />
                </Box>
                <Divider />
                <FullCalendarWrapper>
                  <FullCalendar
                    allDayMaintainDuration
                    initialDate={date}
                    initialView={view}
                    droppable
                    editable
                    eventClick={handleEventSelect}
                    eventDrop={handleEventDrop}
                    dayMaxEventRows
                    eventResizableFromStart
                    eventResize={handleEventResize}
                    events={events}
                    headerToolbar={false}
                    height={800}
                    ref={calendarRef}
                    rerenderDelay={10}
                    select={handleRangeSelect}
                    selectable
                    weekends
                    plugins={[
                      dayGridPlugin,
                      timeGridPlugin,
                      interactionPlugin,
                      listPlugin
                    ]}
                  />
                </FullCalendarWrapper>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ContentWrapper>
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        onClose={closeDrawer}
        open={isDrawerOpen}
        elevation={9}
      >
        {isDrawerOpen && (
          <EventDrawer
            event={selectedEvent}
            range={selectedRange}
            onAddComplete={closeDrawer}
            onCancel={closeDrawer}
            onDeleteComplete={closeDrawer}
            onEditComplete={closeDrawer}
          />
        )}
      </Drawer>
    </>
  );
}

export default ApplicationsCalendar;

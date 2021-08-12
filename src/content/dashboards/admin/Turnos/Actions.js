import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  Grid,
  Hidden,
  IconButton,
  Tooltip,
  Typography
} from '@material-ui/core';

import ViewAgendaTwoToneIcon from '@material-ui/icons/ViewAgendaTwoTone';

import ViewDayTwoToneIcon from '@material-ui/icons/ViewDayTwoTone';
import CalendarViewMonthTwoToneIcon from '@material-ui/icons/CalendarViewMonthTwoTone';
import ViewWeekTwoToneIcon from '@material-ui/icons/ViewWeekTwoTone';
import { useTranslation } from 'react-i18next';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';

const viewOptions = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: CalendarViewMonthTwoToneIcon
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: ViewWeekTwoToneIcon
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: ViewDayTwoToneIcon
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaTwoToneIcon
  }
];

const Actions = ({ date, onNext, onPrevious, onToday, changeView, view }) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Tooltip arrow placement="top" title={t('Previous Day')}>
          <IconButton color="primary" onClick={onPrevious}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Today')}>
          <IconButton color="primary" sx={{ mx: 1 }} onClick={onToday}>
            <TodayTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Next Day')}>
          <IconButton color="primary" onClick={onNext}>
            <ArrowForwardTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Hidden smDown>
        <Grid item>
          <Typography variant="h3" color="text.primary">
            {format(date, 'MMMM yyyy')}
          </Typography>
        </Grid>
        <Grid item>
          {viewOptions.map((viewOption) => {
            const Icon = viewOption.icon;

            return (
              <Tooltip
                key={viewOption.value}
                arrow
                placement="top"
                title={t(viewOption.label)}
              >
                <IconButton
                  color={viewOption.value === view ? 'primary' : 'secondary'}
                  onClick={() => changeView(viewOption.value)}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            );
          })}
        </Grid>
      </Hidden>
    </Grid>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onToday: PropTypes.func,
  handleCreateEvent: PropTypes.func,
  changeView: PropTypes.func,
  view: PropTypes.oneOf([
    'dayGridMonth',
    'timeGridWeek',
    'timeGridDay',
    'listWeek'
  ])
};

Actions.defaultProps = {
  onNext: () => {},
  onPrevious: () => {},
  onToday: () => {},
  handleCreateEvent: () => {},
  changeView: () => {}
};

export default Actions;

import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardHeader,
  Menu,
  MenuItem,
  Typography,
  CardContent
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import TasksAnalyticsChart from './TasksAnalyticsChart';

const TasksAnalyticsChartWrapper = experimentalStyled(TasksAnalyticsChart)(
  ({ theme }) => `
        height: 200px;
`
);

const DotPrimaryLight = experimentalStyled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = experimentalStyled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function TasksAnalytics() {
  const { t } = useTranslation();

  const transactions = {
    income: [28, 47, 41, 34, 69, 91, 49, 82, 52, 72, 32, 99],
    expenses: [38, 85, 64, 40, 97, 82, 58, 42, 55, 46, 57, 70]
  };

  const generic = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState(periods[3].text);

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title={t('Tasks Analytics')}
      />
      <CardContent sx={{ pt: 0 }}>
        <Box display="flex" alignItems="center" pl={1} pb={3}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', mr: 2 }}
          >
            <DotPrimary />
            {t('tasks created')}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <DotPrimaryLight />
            {t('tasks completed')}
          </Typography>
        </Box>
        <Box height={200}>
          <TasksAnalyticsChartWrapper
            data={transactions}
            labels={generic.month.labels}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TasksAnalytics;

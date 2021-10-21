import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Box
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';

import Label from 'src/components/Label';
import TimeSpentChart from './TimeSpentChart';

import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';

const TimeSpentChartWrapper = experimentalStyled(TimeSpentChart)(
  () => `
        height: 350px;
`
);

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

function TimeSpent() {
  const { t } = useTranslation();

  const time = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
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

  return (
    <Card>
      <CardHeader
        sx={{ pb: 0 }}
        avatar={
          <AvatarSuccess>
            <CalendarTodayTwoToneIcon fontSize="small" />
          </AvatarSuccess>
        }
        action={
          <Box display="flex" alignItems="flex-start" sx={{ p: 1 }}>
            <Label color="error">
              <ArrowDownwardTwoToneIcon fontSize="small" />
              <b>12.31%</b>
            </Label>
            <Box sx={{ pl: 1.5 }}>
              <Typography align="center" variant="h4">
                23h 40min
              </Typography>
              <Typography
                align="center"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('total spent')}
              </Typography>
            </Box>
          </Box>
        }
        title={t('Time Spent')}
        titleTypographyProps={{ variant: 'h4' }}
      />
      <CardContent>
        <Box sx={{ px: { lg: 10 }, height: 350 }}>
          <TimeSpentChartWrapper data={time} labels={generic.month.labels} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TimeSpent;

import { Card, CardContent, Typography, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import GaugeChart from 'react-gauge-chart';

function MonthlyGoalsTarget() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card sx={{ px: 3, pt: 3, pb: 2, height: '100%' }}>
      <Typography align="center" variant="h3">
        {t('Monthly Goals Target')}
      </Typography>
      <CardContent>
        <GaugeChart
          nrOfLevels={28}
          textColor={theme.colors.alpha.black[70]}
          needleColor={theme.colors.alpha.black[100]}
          needleBaseColor={theme.colors.alpha.black[100]}
          colors={[
            theme.colors.error.main,
            theme.colors.warning.main,
            theme.colors.success.main
          ]}
          arcWidth={0.3}
          percent={0.68}
        />
        <Typography align="center" variant="h4">
          {t('You have reached')} 68% {t('of your monthly target!')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MonthlyGoalsTarget;

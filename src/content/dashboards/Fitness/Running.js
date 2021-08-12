import { Card, CardHeader, Typography, Avatar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import DirectionsRunTwoToneIcon from '@material-ui/icons/DirectionsRunTwoTone';
import ParametersChart from './ParametersChart';

function Running() {
  const { t } = useTranslation();

  const AvatarError = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
  );

  const ParametersChartWrapper = experimentalStyled(ParametersChart)(
    ({ theme }) => `
        height: 80px;
`
  );

  const parameter = {
    weeks: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    data: [14, 18, 16, 1, 3, 17, 6]
  };

  return (
    <Card sx={{ p: 1 }}>
      <CardHeader
        avatar={
          <AvatarError>
            <DirectionsRunTwoToneIcon />
          </AvatarError>
        }
        title={t('Running')}
        titleTypographyProps={{ variant: 'h5' }}
        action={
          <>
            <Typography align="right" variant="h3">
              15
            </Typography>
            <Typography
              align="right"
              variant="subtitle1"
              color="text.secondary"
            >
              {t('km/h')}
            </Typography>
          </>
        }
      />
      <ParametersChartWrapper data={parameter.data} labels={parameter.weeks} />
    </Card>
  );
}

export default Running;

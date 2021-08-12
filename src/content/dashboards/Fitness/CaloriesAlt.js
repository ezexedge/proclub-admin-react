import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
  Avatar
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import KitchenTwoToneIcon from '@material-ui/icons/KitchenTwoTone';

function CaloriesAlt() {
  const { t } = useTranslation();

  const AvatarPrimary = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      margin-top: -${theme.spacing(1)};
`
  );

  return (
    <Card sx={{ p: 1 }}>
      <CardHeader
        avatar={
          <AvatarPrimary>
            <KitchenTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Typography align="right" variant="h3">
              2400
            </Typography>
            <Typography
              align="right"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('kCal')}
            </Typography>
          </>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h2" sx={{ pb: 3 }}>
          {t('Calories')}
        </Typography>
        <LinearProgress value={34} color="primary" variant="determinate" />
      </CardContent>
    </Card>
  );
}

export default CaloriesAlt;

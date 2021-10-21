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
import FastfoodTwoToneIcon from '@material-ui/icons/FastfoodTwoTone';

function ProteinAlt() {
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
            <FastfoodTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Typography align="right" variant="h3">
              3566
            </Typography>
            <Typography
              align="right"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('grams')}
            </Typography>
          </>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h2" sx={{ pb: 3 }}>
          {t('Protein')}
        </Typography>
        <LinearProgress value={49} color="primary" variant="determinate" />
      </CardContent>
    </Card>
  );
}

export default ProteinAlt;

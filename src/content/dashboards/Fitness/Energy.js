import {
  Card,
  Box,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import BatteryCharging20TwoToneIcon from '@material-ui/icons/BatteryCharging20TwoTone';

const AvatarWrapperInfo = experimentalStyled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.info.lighter};
      color:  ${theme.colors.info.main};
      margin-bottom: ${theme.spacing(3)};
`
);

function Energy() {
  const { t } = useTranslation();

  return (
    <Card sx={{ p: 3 }}>
      <AvatarWrapperInfo>
        <BatteryCharging20TwoToneIcon />
      </AvatarWrapperInfo>
      <Typography variant="h3" sx={{ pb: 1 }}>
        {t('Energy')}
      </Typography>
      <Typography
        color="text.primary"
        variant="h2"
        sx={{ pr: 0.5, display: 'inline-flex' }}
      >
        12%
      </Typography>
      <Box pt={3}>
        <LinearProgress value={12} color="primary" variant="determinate" />
      </Box>
    </Card>
  );
}

export default Energy;

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  IconButton,
  alpha,
  Hidden
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { experimentalStyled } from '@material-ui/core/styles';

const IconButtonWrapper = experimentalStyled(IconButton)(
  ({ theme }) => `
      background-color: ${theme.colors.secondary.lighter};
      color:  ${theme.colors.primary.main};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: 100px;
      
      &:hover {
          background-color: ${alpha(theme.colors.secondary.light, 0.3)};
      }
`
);

function UpgradeAccount() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3
      }}
    >
      <Box>
        <CardHeader
          title={t('Upgrade Your Account to PRO')}
          titleTypographyProps={{
            variant: 'h2',
            gutterBottom: true,
            noWrap: true,
            color: 'textPrimary'
          }}
          subheader={t(
            'You get a lot more features when upgrading to a PRO plan.'
          )}
          subheaderTypographyProps={{
            variant: 'subtitle2',
            gutterBottom: true,
            sx: { pt: 1 },
            noWrap: true
          }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Typography
            variant="h4"
            fontWeight="normal"
            sx={{ pb: 3 }}
            color="text.primary"
            component="p"
          >
            {t('Manage your finances in style!')}
          </Typography>
          <Button variant="outlined" color="primary">
            {t('Get started today')}
          </Button>
        </CardContent>
      </Box>
      <Hidden mdDown>
        <img src="/static/images/placeholders/illustrations/4.svg" alt="..." />
      </Hidden>
      <Hidden smDown>
        <IconButtonWrapper>
          <ChevronRightIcon fontSize="large" />
        </IconButtonWrapper>
      </Hidden>
    </Card>
  );
}

export default UpgradeAccount;

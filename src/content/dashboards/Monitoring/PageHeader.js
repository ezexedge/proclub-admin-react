import { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import LoadingButton from '@material-ui/lab/LoadingButton';

function PageHeader() {
  const { t } = useTranslation();

  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h2" component="h2" sx={{ pb: 1 }}>
          {t('Monitoring')}
        </Typography>
        <Typography variant="h4" color="text.secondary" fontWeight="normal">
          {t(
            'This dashboard shows a live status for all your servers and database clusters!'
          )}
        </Typography>
      </Grid>
      <Grid item>
        <LoadingButton
          sx={{ mt: { xs: 2, md: 0 } }}
          onClick={handleClick}
          pending={pending}
          variant="contained"
          color="primary"
        >
          {t('Refresh view')}
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

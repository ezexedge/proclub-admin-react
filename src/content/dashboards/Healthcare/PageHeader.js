import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function PageHeader() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h2" component="h3" sx={{ pb: 1 }}>
        {t('Welcome')}, Dr. Williams!
      </Typography>
      <Typography variant="h4" color="text.secondary" fontWeight="normal">
        {t('Since your last login there were')} <b>3</b>{' '}
        {t('new patients appointments and ')} <b>10</b>{' '}
        {t('new prescription requests.')}
      </Typography>
    </>
  );
}

export default PageHeader;

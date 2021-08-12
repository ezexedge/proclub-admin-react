import { Typography, Box, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import { Link as RouterLink } from 'react-router-dom';

function PageHeader() {
  const { t } = useTranslation();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Hospital Administration')}
        </Typography>
        <Typography variant="subtitle2">
          {t('This is your hospital’s overview status page.')}
        </Typography>
      </Box>
      <Box>
        <Button
          component={RouterLink}
          to="/preview/dashboards/healthcare/doctor"
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('Switch to Doctor Overview')}
        </Button>
      </Box>
    </Box>
  );
}

export default PageHeader;

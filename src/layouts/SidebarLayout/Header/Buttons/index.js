import { Box } from '@material-ui/core';
import HeaderSettings from './Settings';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import InfoUser from './InfoUser';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }} style={{display: 'flex'}}>
      <HeaderNotifications />
    </Box>
  );
}

export default HeaderButtons;

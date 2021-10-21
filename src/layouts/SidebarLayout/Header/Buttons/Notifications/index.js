import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Popover,
  Tooltip,
  Typography
} from '@material-ui/core';
import { useRef, useState } from 'react';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import Link from '@material-ui/core/Link';
import { experimentalStyled } from '@material-ui/core/styles';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import { useTranslation } from 'react-i18next';
import { formatDistance, subHours, subSeconds, subDays } from 'date-fns';

const AnimatedBadge = experimentalStyled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        box-shadow: 0 0 0 2px ${theme.palette.background.paper};
        background-color: #44b700;
        color: #44b700;
        
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: ripple 1.2s infinite ease-in-out;
            border: 1px solid currentColor;
            content: "";
        }
    }
`
);

const NotificationsBadge = experimentalStyled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${alpha(theme.palette.error.main, 0.1)};
        color: ${theme.palette.error.main};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`
);

function HeaderNotifications() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <IconButton color="primary" ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            badgeContent={1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </NotificationsBadge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box sx={{ p: 2 }} display="flex" justifyContent="space-between">
          <Typography variant="h5">{t('Notifications')}</Typography>
        </Box>
        <Divider />
        <List sx={{ p: 2 }}>
          <ListItem
            sx={{ display: { xs: 'block', sm: 'flex' } }}
            button
            selected
          >
            <Box flex="1">
              <Box
                display={{ xs: 'block', sm: 'flex' }}
                justifyContent="space-between"
              >
                <Typography sx={{ fontWeight: 'bold' }}>Notificación de prueba título</Typography>
                
              </Box>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Notificación de prueba título
              </Typography>
            </Box>
          </ListItem>
          <Divider variant="inset" sx={{ my: 1 }} component="li" />
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="secondary" fullWidth to="/dashboard/notificacion">
            {t('Ver todas las notificaciones')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderNotifications;

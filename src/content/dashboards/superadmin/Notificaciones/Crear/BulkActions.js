import { useState, useRef } from 'react';

import {
  Box,
  Menu,
  Tooltip,
  IconButton,
  Button,
  ListItemText,
  ListItem,
  List,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';

import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';

const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

function BulkActions({onchangeConfirm}) {
  const [onMenuOpen, menuOpen] = useState(false);
  const moreRef = useRef(null);
  const { t } = useTranslation();

  const openMenu = () => {
    menuOpen(true);
  };

  const closeMenu = () => {
    menuOpen(false);
  };

    const eliminadosId = () => {
    onchangeConfirm(true)
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Typography variant="h5" color="text.secondary">
            {t('Bulk actions')}:
          </Typography>
          <Tooltip arrow placement="top" title={t('Resend verification email')}>
            <IconButton color="primary" sx={{ ml: 1, p: 1 }}>
              <VerifiedUserTwoToneIcon />
            </IconButton>
          </Tooltip>
          <ButtonError
                      onClick={eliminadosId}

            sx={{ ml: 1 }}
            startIcon={<DeleteTwoToneIcon />}
            variant="contained"
          >
            {t('Delete')}
          </ButtonError>
        </Box>
        <IconButton
          color="primary"
          onClick={openMenu}
          ref={moreRef}
          sx={{ ml: 2, p: 1 }}
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>

      <Menu
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        getContentAnchorEl={null}
      >
        <List sx={{ p: 1 }} component="nav">
          <ListItem button>
            <ListItemText primary={t('Bulk edit accounts')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Close selected accounts')} />
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

export default BulkActions;

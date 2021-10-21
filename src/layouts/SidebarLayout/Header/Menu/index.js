import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

const ListWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem component={NavLink} to="/overview">
          {t('Features tour')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/introduction">
          {t('Getting started guide')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/contact-support">
          {t('Contact support')}
        </MenuItem>
        <Divider sx={{ my: 1.5 }} />
        <Button
          variant="contained"
          fullWidth
          href="https://material-ui.com/store/items/tokyo-react-admin-dashboard"
          target="_blank"
          rel="noopener"
        >
          {t('Buy now')}
        </Button>
      </Menu>
    </>
  );
}

export default HeaderMenu;

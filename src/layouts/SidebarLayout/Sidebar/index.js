import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { useTranslation } from 'react-i18next';
import moment from 'moment'
import 'moment/locale/es' 
import { Box, Button, Divider, Drawer, Hidden } from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
        }
`
);

const TopSection = experimentalStyled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(3, 4)};
`
);

const SidebarDivider = experimentalStyled(Divider)(
  ({ theme }) => `
        background: ${theme.sidebar.dividerBg};
`
);

function Sidebar() {
  const { t } = useTranslation();
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const fechas = moment().locale('es')
  const fechasSpanish = fechas.format('LLLL')
  console.log(fechasSpanish)
  const fechasSpanishSplit = fechasSpanish.split(' ')
  console.log(fechasSpanishSplit)
const dia = fechasSpanishSplit[0].split(',')

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                component="a"
              //  href="https://material-ui.com/store/items/tokyo-react-admin-dashboard"
                target="_blank"
                rel="noopener"
              >
                {t(`${dia[0]} ${fechasSpanishSplit[1]} ${fechasSpanishSplit[3].substr(0,3)}. ${fechasSpanishSplit[5]}`)}
              </Button>
            </TopSection>
            <SidebarDivider sx={{ my: 2, mx: 2 }} />
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Button variant="contained" fullWidth color="primary">
                  {t('Buy template')}
                </Button>
              </TopSection>
              <SidebarDivider sx={{ my: 2, mx: 2 }} />
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;

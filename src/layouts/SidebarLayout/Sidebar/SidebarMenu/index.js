import {useContext} from 'react'
import { ListSubheader, List } from '@material-ui/core';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems from './items';
import AuthContext from 'src/contexts/JWTAuthContext';

import menuItemSuper from './items_backup'
import { experimentalStyled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const MenuWrapper = experimentalStyled(List)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(1)};

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(13)};
      color: ${theme.sidebar.menuItemHeadingColor};
      padding: ${theme.spacing(0.8, 2)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = experimentalStyled(List)(
  ({ theme }) => `
    &.MuiList-root {

      .MuiListItem-root {
        padding: 2px;
        padding-left: ${theme.spacing(2)};
        padding-right: ${theme.spacing(2)};

        .MuiButton-label {
          display: flex;
          position: relative;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(2)};

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(12)};
              color: ${theme.palette.primary.contrastText};
            }
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.sidebar.menuItemColor};
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          justify-content: flex-start;
          font-size: ${theme.typography.pxToRem(14)};
          padding-top: ${theme.spacing(0.8)};
          padding-bottom: ${theme.spacing(0.8)};
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: ${theme.spacing(1.5)};
            color: ${theme.sidebar.menuItemIconColor};
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px;
            padding-left: ${theme.spacing(0)};
            padding-right: ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              padding: ${theme.spacing(0.5, 2, 0.5, 6.5)};

              &.Mui-active,
              &:hover {
                background-color: ${theme.sidebar.menuItemBg};
              }
            }
          }
        }
      }
    }
`
);



function renderSidebarMenuItems({ items, path }) {




  return (
    <SubMenuWrapper>
      {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
    </SubMenuWrapper>
  );
}

function reduceChildRoutes({ ev, path, item }) {
  const key = item.name;

  if (item.items) {
    const open = matchPath(path, {
      path: item.link,
      exact: false
    });

    ev.push(
      <SidebarMenuItem
        key={key}
        open={Boolean(open)}
        name={item.name}
        icon={item.icon}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
}

function SidebarMenu() {
  const location = useLocation();
  const { t } = useTranslation();

const { user } = useContext(AuthContext)


console.log('holaaa desde sidebar',user)

const menuMostrar =  user.rol === 'admin' ? menuItemSuper : menuItems 

  return (
    <>
      {menuMostrar.map((section) => (
        <MenuWrapper
          key={section.heading}
          subheader={
            <ListSubheader disableSticky>{t(section.heading)}</ListSubheader>
          }
        >
          {renderSidebarMenuItems({
            items: section.items,
            path: location.pathname
          })}
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;

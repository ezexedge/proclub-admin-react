import { useRef, useState, useContext, useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getUsuario } from 'src/api/usuarios'
import { getClubID } from 'src/api/club'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import InboxTwoToneIcon from '@material-ui/icons/InboxTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import AuthContext from 'src/contexts/JWTAuthContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  colorText: {
    color: 'black!important'
  }
}));


const UserBoxButton = experimentalStyled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = experimentalStyled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = experimentalStyled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = experimentalStyled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = experimentalStyled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);



function HeaderUserbox() {

  const [infoUser, setInfoUser] = useState(null)
  const [club, setClub] = useState(null)

  const token = window.localStorage.getItem('accessToken');


  const { user } = useContext(AuthContext);

  const classes = useStyles();

  const { t } = useTranslation();

  const history = useHistory();

  const { logout } = useAuth();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);


  const llamadaUsuario = async () => {
    const result = await getUsuario(user.userId,token)
    console.log('aaaaaa', result)

    setInfoUser(result)
  }

  const llamadaClub = async () => {
    const result = await getClubID(user.clubId,token)
    console.log('result club', result)
    setClub(result)
  }
  useEffect(() => {
    console.log('userr header', user)



    llamadaUsuario()
    llamadaClub()
  }, [])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await logout();
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  //admin/dashboard/profile

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        {

          user && user.rol === 'superadmin' ?
            (<Avatar variant="rounded" alt={user.name} src={user && user.avatar} />)
            :
            (
              <Avatar variant="rounded" alt={user.name} src={club && club.logo} />
            )

        }

        <Hidden mdDown>
          <UserBoxText>
            {user && user.rol === 'superadmin' ?
              (
                <UserBoxLabel variant="body1" className={classes.colorText}>{infoUser && `${infoUser.persona.nombre} ${infoUser.persona.apellido}`}</UserBoxLabel>


              ) :
              (
                <UserBoxLabel variant="body1" className={classes.colorText}>{club && club.nombre}</UserBoxLabel>


              )

            }
            <UserBoxDescription variant="body2">
              {user && user.rol}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
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
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            {user && user.rol === 'superadmin' ?
              (
                <UserBoxLabel variant="body1" className={classes.colorText}>{infoUser && `${infoUser.persona.nombre} ${infoUser.persona.apellido}`}</UserBoxLabel>
              ) :
              (
                <UserBoxLabel variant="body1" className={classes.colorText}>{club && club.nombre}</UserBoxLabel>
              )

            }
            <UserBoxDescription variant="body2">
              {user && user.rol}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
      
        <Divider sx={{ mb: 0 }} />
        {user && user.rol === 'admin' && (

    
        <List sx={{ p: 1 }} component="nav">

          <ListItem button to={`/admin/dashboard/profile`} component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Mi perfil')} />
            </ListItem>


        
        
        </List>
          ) }
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={handleLogout}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            {t('Sign out')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;

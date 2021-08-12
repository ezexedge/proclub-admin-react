import React , { useState,useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import wait from 'src/utils/wait';
import { Link as RouterLink } from 'react-router-dom';

import useAuth from 'src/hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinkIcon from '@material-ui/icons/Link';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Zoom,
  Typography,
  Divider,
  TextField,
  CircularProgress,
  Switch,
  Avatar,
  Autocomplete,
  IconButton,
  Button,
  Badge
} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { useSnackbar } from 'notistack';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import Results from './Results'
import { getUsuarios } from 'src/api/usuarios'

const Input = experimentalStyled('input')({
  display: 'none'
});

const AvatarWrapper = experimentalStyled(Box)(
  ({ theme }) => `

    position: relative;

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
    bottom: -${theme.spacing(2)};
    right: -${theme.spacing(2)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

const roles = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Subscriber', value: 'subscriber' },
  { label: 'Customer', value: 'customer' }
];

const useStyles = makeStyles((theme) => ({
    modified: {
    height: '50px!important',
    width: '208px!important'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    margin:{
        marginTop: '35px!important'
    },
    texto: {
        color: '#223354!important',
        marginTop: '12px!important',
        fontSize: '17px!important',
        fontWeight: '400!important',
        opacity: '70%'
        
    },
    title: {
        color: '#223354!important',
        fontSize: '30px!important',
        fontWeight: '700!important',
        
        
    },
    card:{
        marginTop: '41px!important',
        background: '#FFFFFF',
        boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        border: '6px'

    },
    dialog:{
        backgroundColor: 'red!important'
    },
    boxBtn:{
        with: '44px!important',
        height: '44px!important',
        padding: '10px!important',
        border: '6px!important',
        backgroundColor: 'white!important'
    },
    icon:{
       
        color: '#0061F4!important'
    },
    linea:{
        color: '#DDDDDD!important',
        backgroundColor: '#DDDDDD!important',
        border: '1px solid #DDDDDD',
        marginTop: '37px'
    },
    modified: {

        height: '50px',
        width: '256px',
        
        borderRadius: '6px',
        padding: '22px, 32px, 22px, 32px',
        color: 'white',
        backgroundColor: '#44D600!important',
        marginLeft: '13px!important'
        
        
            }
            
            ,
            modifiedError: {
        
                height: '50px',
                width: '175px',
                
                borderRadius: '6px',
                padding: '22px, 32px, 22px, 32px',
                color: 'white',
                backgroundColor: '#FF395C!important'
                
                
                    },
            extendedIcon: {
              marginRight: theme.spacing(1),
            },
            margin:{
                marginTop: '35px!important'
            },
            texto: {
                color: '#223354!important',
                marginTop: '12px!important',
                fontSize: '17px!important',
                fontWeight: '400!important',
                opacity: '70%'
                
            },
            titulo: {
        
        fontFamily: 'Roboto!important',
        fontStyle: 'normal!important',
        fontWeight: 'bold!important',
        fontSize: '30px!important',
        lineHeight:'35px!important',
        color: '#223354!important',
        marginLeft: '17px!important'
                
            },
            card:{
                marginTop: '41px!important',
                background: '#FFFFFF',
                boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
                border: '6px'
        
            },
        
          
          container:{
              width: '100%!important',
              heigth: 'auto!important',
              padding: '34px!important'
          },
        
        cardSubtitle2:{
        
            fontFamily: 'Roboto!important',
            fontStyle: 'normal!important',
            fontWeight: 'bold!important',
            fontSize: '18px!important',
            lineHeight: '27px!important',
            /* identical to box height */
            display: 'flex!important',
            alignItems: 'center!important',
            opacity: '35%',
            /* Color States/Common/Black */
            color: '#223354!important'
            
            
            },
            textEnd:{
                textAlign: 'end',
              
            },
            titleInformacion: {
                /* Mail: Teléfono: Dirección: */
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '239.3%',
        /* or 34px */
        marginRight: '5px',
        
        /* Color States/Common/Black */
        color: '#223354',
        opacity: '0.5'
        
            },
            parrafoInformacion:{
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28px',
        letterSpacing: '0em'
        
            }
            ,
            parrafoEmail:{
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        
        /* Color States/Common/Black */
        color: '#223354'
        
        
            },
            headerStyle:{
          
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        
        /* Color States/Common/Black */
        color: '#223354',
        
        opacity: '0.5'
        
            },
            headerHelp:{
          
                with: '16px!important',
                height: '16px!important',
                /* Color States/Common/Black */
                color: '#223354',
                marginTop: '2px!important',
                opacity: '0.5'
                
                    },
               textCard:{
             
        fontFamily: 'Roboto!important',
        fontStyle: 'normal!important',
        fontWeight: 'normal!important',
        fontSize: '22px!important',
        lineHeight: '26px!important',
        
        /* Color States/Common/Black */
        color: '#223354!important'
        
        
               },
        
               subTitle:{
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '150.6%',
        color: '#223354',
        opacity: '0.8',
        
               },
        badge:{
height: '22px!important',
width: 'auto!important',
backgroundColor: '#0AB6FF!important',
borderRadius: '22px',
textAlign: 'center!important'
        },
        badgeText:{
fontFamily: 'Roboto',
fontSize: '12px',
fontStyle: 'normal',
lineHeight: '22px',
fontWeight: '700',
color: 'white',
padding: '0px 15px!important'

        },
textSecondary: {
    fontSize: '17px!important',
    marginTop: '9px!important'
},
iconLink:{
    fontSize: '21px!important',
    marginRight: '5px!important'
}
        
        
  }));

function PageHeader() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();


  const [usuarios,setUsuarios] = useState([])


  const [publicProfile, setPublicProfile] = useState({
    public: true
  });


  useEffect(() => {
    /*
          const llamadaUsuarioXClub = async(param) => {
            const result =  await getUsuariosXClub(param)
            console.log(result)
            setUsuarios(result)
          }
    
    
          llamadaUsuarioXClub(135)
    */
    const llamadaUsuarios = async() => {
      const result =  await getUsuarios()
   //   console.log(result)
      setUsuarios(result)
    }
    
    
    llamadaUsuarios()
    
    
        }, []);

  const handlePublicProfile = (event) => {
    setPublicProfile({
      ...publicProfile,
      [event.target.name]: event.target.checked
    });
  };

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const handleCreateUserOpen = () => {
    setOpen(true);
  };

  const handleCreateUserClose = () => {
    setOpen(false);
  };

  const handleCreateUserSuccess = () => {
    enqueueSnackbar(t('The user account was created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Grid
   container
   direction="row"
   justify="start"
   alignItems="center"
  spacing={5}
 className={classes.margin}
>
<Grid item lg={12} xs={12} display="flex">
<Box component={RouterLink} to="/superadmin/dashboard/notificacion" className={classes.boxBtn}>
    <KeyboardBackspaceIcon className={classes.icon}/>
</Box>
<Typography variant="h1" mt={0.5} ml={3}>Salida recreativa al...</Typography>
  </Grid>

      </Grid>
      
      </Grid>

   
      <Grid
  container
  direction="row"
  alignItems="start"
  


>
<Grid item xs={12}>


<Box display="flex" mt={4}>
<Box>
<div  className={classes.badge} >
<p className={classes.badgeText} >Pedido de documentación</p>
</div>

</Box>



</Box>
<Box mt={3}>
<Typography variant="h2" >Salida recreativa al...</Typography>
</Box>
<Grid xs={8}>
<Typography  className={classes.textSecondary} color="secondary" >
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the 
</Typography>
</Grid>
<Box display="flex" mt={2}>
<LinkIcon className={classes.iconLink} color="secondary" /> <Typography  variant="p"  color="secondary" >Link a: www.google.com</Typography>

</Box>



</Grid>




    </Grid>
    <Grid item lg={12} xs={12} mt={5}>
<Typography variant="h1"> Lista de envios </Typography>
<Typography color="secondary" >{'Revisá la lista antes de enviar'}</Typography>
    </Grid>
    <Grid item lg={12} xs={12}  mt={2}>
    <Card >
      <Results users={usuarios} />
        </Card>
    </Grid>
    


    </>
  );
}

export default PageHeader;

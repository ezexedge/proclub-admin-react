import React , { useState } from 'react';
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
width: '112px!important',
padding: '4px, 15px, 4px, 15px!important',
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
color: 'white'

        }
        
        
  }));

function PageHeader() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

  const [publicProfile, setPublicProfile] = useState({
    public: true
  });

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
<Box component={RouterLink} to="/admin/dashboard/documentacion" className={classes.boxBtn}>
    <KeyboardBackspaceIcon className={classes.icon}/>
</Box>
<Typography variant="h1" mt={0.5} ml={3}>Documentación</Typography>
  </Grid>

      </Grid>
      
      </Grid>

      <hr  className={classes.linea}/>

      <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="start"
  


>
<Grid item xs={3}>
<Box >              
<Typography  mt={3} variant="h2" >Carla Ornis</Typography>
<Typography mt={2} className={classes.subTitle} >Enviado el 12 de Febrero 2021</Typography>


</Box>

<Box display="flex" mt={2}>
<Box>
<div  className={classes.badge} >
<p className={classes.badgeText} >Autorizaciones</p>
</div>

</Box>

<Box ml={3}>
<div  className={classes.badge} >
<p className={classes.badgeText} >Salida grupal</p>
</div>

</Box>

</Box>

</Grid>

<Grid item xs={9}
mt={3}
className={classes.textEnd}
>
<Button variant="contained" className={classes.modifiedError} disableElevation>
<span class="material-icons-outlined  icon-check">
clear
</span>
<span className={classes.iconPadding}>
      Desaprobar
</span>
    </Button>
<Button variant="contained" className={classes.modified} disableElevation>
<span class="material-icons-outlined  icon-check">
done
</span>
<span className={classes.iconPadding}>
Aprobar documentación
</span>
    </Button>
      </Grid>


    </Grid>
    <Grid display="flex" xs={12} spacing={3} mt={5}>
    <Grid xs={3.9} mr={3}>
        <Card className="cursor">
      <Box>
      
        <CardContent className="card-documentacion">
        <span class="material-icons-outlined documentacion">
archive
</span>
        </CardContent>
        <hr className="line-documentacion"/>
        
      </Box>
        <Box ml={2} >
            <Box  display="flex" alignItems="center" className="documentacion-content">
            <span className="material-icons-outlined documentacion-small">
            archive
            </span>
            <h5 className="documentacion-font">HolidayPictures.zip</h5>
            <br/>
           
            </Box>
            <p className="documentacion-font-sub">You opened in the past year</p>
        </Box>
    </Card>
        </Grid>
        <Grid xs={3.9} mr={3} >
        <Card className="cursor">
      <Box>
      
        <CardContent className="card-documentacion">
                    <span className="material-icons-outlined documentacion">
            picture_as_pdf
            </span>
        </CardContent>
        <hr className="line-documentacion"/>
        
      </Box>
        <Box ml={2} >
            <Box  display="flex" alignItems="center" className="documentacion-content">
            <span className="material-icons-outlined documentacion-small">
            picture_as_pdf
            </span>
            <h5 className="documentacion-font">PresentationDeck.pdf</h5>
            <br/>
           
            </Box>
            <p className="documentacion-font-sub">Never opened</p>
        </Box>
    </Card>
        </Grid>
        <Grid xs={3.9} >
        <Card className="cursor">
      <Box>
      
        <CardContent className="card-documentacion">
                    <span className="material-icons-outlined documentacion">
            picture_as_pdf
            </span>
        </CardContent>
        <hr className="line-documentacion"/>
        
      </Box>
        <Box ml={2} >
            <Box  display="flex" alignItems="center" className="documentacion-content">
            <span className="material-icons-outlined documentacion-small">
            picture_as_pdf
            </span>
            <h5 className="documentacion-font">PresentationDeck.pdf</h5>
            <br/>
           
            </Box>
            <p className="documentacion-font-sub">Never opened</p>
        </Box>
    </Card>
        </Grid>

    </Grid>

    </>
  );
}

export default PageHeader;

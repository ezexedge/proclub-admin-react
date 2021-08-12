import React,{useState, useCallback, useEffect } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import CardMedia from '@material-ui/core/CardMedia';
import Label from 'src/components/Label';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  Checkbox,
  Slide,
  CardHeader,
  CardContent,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
  Typography,
  Dialog,
  Zoom
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import  Results from './Results'
import {getClubID} from 'src/api/club'
import { unwrapResult } from '@reduxjs/toolkit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const theme = {
    spacing: 8,
  }

  
const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

const AvatarSuccess = experimentalStyled(Avatar)(
    ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.success.contrastText};
        width: ${theme.spacing(12)};
        height: ${theme.spacing(12)};
        box-shadow: ${theme.colors.shadows.success};
        margin-left: auto;
        margin-right: auto;
  
        .MuiSvgIcon-root {
          font-size: ${theme.typography.pxToRem(45)};
        }
  `
  );
  
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

  const Input = experimentalStyled('input')({
    display: 'none'
  });
  
  


const LinearProgressWrapper = experimentalStyled(LinearProgress)(
    ({ theme }) => `
          flex-grow: 1;
          margin-right: ${theme.spacing(1)};
  `
  );
  

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

  imageCard:{
      backgroundColor: 'white!important',
  
      height: '88px!important',
    width: '88px!important',
    borderRadius: '6px!important',
    padding: '20px!important'
  },
  container:{
      width: '100%!important',
      heigth: 'auto!important',
      padding: '34px!important'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
cardTitle:{
fontFamily: 'Roboto!important',
fontStyle: 'normal !important',
fontWeight: 'bold!important',
fontSize: '18px',
lineHeight: '21px',
/* identical to box height */
display: 'flex!important',
alignItems: 'center!important',

/* Color States/Common/Black */
color: '#223354!important'
},
cardSubtitle:{

fontFamily: 'Roboto!important',
fontStyle: 'normal!important',
fontWeight: 'bold!important',
fontSize: '23px!important',
lineHeight: '27px!important',
/* identical to box height */
display: 'flex!important',
alignItems: 'center!important',

/* Color States/Common/Black */
color: '#223354!important'


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
       upIcon:{
           color: '#3BB900!important',
           width: '13px!important',
           height: '13px!important',
           marginTop: '1.5px!important',
           marginLeft: '7px!important',
           marginRight: '5px!important',
           fontWeight:'700!important'


       },
       downIcon:{
        color: '#FF1A43!important',
        width: '13px!important',
        height: '13px!important',
        marginTop: '1.5px!important',
        marginLeft: '7px!important',
        marginRight: '5px!important',
        fontWeight:'700!important'


    },
    bolderText:{
        fontWeight: '700!important',
    },
    marginResponsable: {
      margin: '70px!important'
    },
    editIcon: {
      marginTop: '27px!important',
      with:'18px!important',
      height:'18px!important'
  },
  editText:{
      color: '#6B64F8!important',
      marginTop: '27px!important',
      marginRight: '15px!important',
      marginLeft: '3px!important',
      cursor: 'pointer!important'
  
  },
  socioTitle:{
    /* Fiat Deposit */



fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'bold',
fontSize: '15px',
lineHeight: '18px',
/* identical to box height */
display: 'flex',
alignItems: 'center',

/* Color States/Common/Black */
color: '#223354',

marginTop: '0px!important'


  },
  socioSubtitle:{
    /* 25 Jul 2021 | 11:45 PM */

fontFamily: 'Roboto',
fontStyle:'normal',
fontWeight: 'normal',
fontSize: '14px',
lineHeight: '16px',
display: 'flex',
alignItems: 'center',

/* Color States/Common/Black */
color: '#223354',

opacity: '0.5',
marginTop: '-10px!important'

  },
  marginAvatar:{
    marginRight: '10px!important'
  },
  vinculado:{
    backgroundColor: '#44D600!important'
  },
  deshabilitado:{
    backgroundColor: '#FFAF39!important'
  },
  black:{
    backgroundColor: 'black!important',
    color: 'white',
    marginRight: '10px!important'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: '100!important'
  },
  
  }));

//#FF1A43, 100 %
const Club = () => {
    const classes = useStyles();


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  

    const isMountedRef = useRefMounted();
    const [user, setUser] = useState(null);
    const [clubDatos,setClubDatos] = useState()
    // @ts-ignore
    const { userId } = useParams();
    const { t } = useTranslation();
  
    const [currentTab, setCurrentTab] = useState('activity');

    const tabs = [
      {
        value: 'all',
        label: t('All users')
      },
      {
        value: 'customer',
        label: t('Customers')
      },
      {
        value: 'admin',
        label: t('Administrators')
      },
      {
        value: 'subscriber',
        label: t('Subscribers')
      }
    ];
  
  
 
  
    const handleTabsChange = (event, value) => {
      setCurrentTab(value);
    };
  
    const getUser = useCallback(async () => {
      try {
        const response = await axios.get('/api/deporte', {
          params: {
            userId
          }
        });
        if (isMountedRef.current) {
          setUser(response.data.user);
        }

        console.log(response)
      } catch (err) {
        console.error(err);
      }
    }, [userId, isMountedRef]);
  
    useEffect(() => {

      const llamadaClubId = async () => {
          const result = await  getClubID(userId)
          console.log(result)
          setClubDatos(result)
      }

      llamadaClubId()

      getUser();
    }, []);
  
 
    

    return ( 
        <div className={classes.container}>
          
<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="center"

>

<Grid item xs={12} md={1.7}>
                
<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>

                <AvatarWrapper>
                    <Avatar
                      variant="rounded"
                      src={clubDatos && clubDatos.logo}
                    />
                    <ButtonUploadWrapper>
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        name="icon-button-file"
                        type="file"
                      
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton component="span" color="primary">
                          <CloudUploadTwoToneIcon />
                        </IconButton>
                      </label>
                    </ButtonUploadWrapper>
                  </AvatarWrapper>

                </Grid>

<Grid item lg={10.3} xs={12}  
mb={10}
className={classes.textEnd}
>
        <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
     
      >
       Ingresar como el club
      </Button>
      </Grid>


    </Grid>

    <Box m={5} />
    <Grid item lg={12} xs={12}>
<Typography variant="h1"> {clubDatos && clubDatos.nombre} </Typography>
<div className={classes.texto}>{clubDatos && clubDatos.descripcion}</div>
    </Grid>


    <Box m={3} />

<Grid container
xs={12}
spacing={2}
>

  
 
<Grid item xs={3}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"

>


<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
xs={12}
>
<Grid xs={10.5} >

<Typography className={classes.headerStyle}>
                  Socios vinculados
              </Typography>
</Grid>
<Grid xs={1.5}>           
              <HelpOutlineIcon className={classes.headerHelp}   />
 </Grid>

 </Grid>
 <Box m={1} />
 <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                      <Typography component="div"  variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                        890
                      </Typography>
                    <div>
                      <Label color="success" className={classes.bolderText}>+10% </Label>
                      <ArrowUpwardIcon className={classes.upIcon}/>
                    </div>
                    </Box>
   

    </Grid>

          </Paper>
</Grid>



<Grid item xs={3}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"

>


<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
xs={12}
>
<Grid xs={10.5} >

<Typography className={classes.headerStyle}>
                  Deportes
              </Typography>
</Grid>
<Grid xs={1.5}>           
              <HelpOutlineIcon className={classes.headerHelp}   />
 </Grid>

 </Grid>
 <Box m={1} />
 <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                      <Typography component="div"  variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                        22
                      </Typography>
                    <div>
                      <Label color="error" className={classes.bolderText}>-5.2% </Label>
                      
                      <ArrowDownwardIcon className={classes.downIcon}  />
                    </div>
                    </Box>
   

    </Grid>

          </Paper>
</Grid>
<Grid item xs={3}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"

>


<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
xs={12}
>
<Grid xs={10.5} >

<Typography className={classes.headerStyle}>
                  Deportes
              </Typography>
</Grid>
<Grid xs={1.5}>           
              <HelpOutlineIcon className={classes.headerHelp}   />
 </Grid>

 </Grid>
 <Box m={1} />
 <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                      <Typography component="div"  variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                        22
                      </Typography>
                    <div>
                      <Label color="error" className={classes.bolderText}>-5.2% </Label>
                      
                      <ArrowDownwardIcon className={classes.downIcon}  />
                    </div>
                    </Box>
   

    </Grid>

          </Paper>
</Grid>
<Grid item xs={3}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"

>


<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
xs={12}
>
<Grid xs={10.5} >

<Typography className={classes.headerStyle}>
                  Turnos semanales
              </Typography>
</Grid>
<Grid xs={1.5}>           
              <HelpOutlineIcon className={classes.headerHelp}   />
 </Grid>

 </Grid>
 <Box m={1} />
 <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                      <Typography component="div"  variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                        26
                      </Typography>
                    <div>
                      <Label color="success" className={classes.bolderText}>+10% </Label>
                      <ArrowUpwardIcon className={classes.upIcon}/>
                    </div>
                    </Box>
   

    </Grid>

          </Paper>
</Grid>


        




</Grid>

<Grid container
xs={12}
spacing={2}
mt={3}
>


<Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-start"
  spacing={3}
  item
  xs={6}
>
<Grid item

xs={12}>

<Card>
     

      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
         <CardHeader
        
        title={t('Responsable')}
        subheader={`${clubDatos && clubDatos.persona.nombre} ${clubDatos && clubDatos.persona.apellido}`}

      />

      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>

      </Box>

      <Divider/>
      <CardContent 
     
      >
        <Box xs={12} p={0} m={0}>
            <p  className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail:</span> {clubDatos && clubDatos.persona.correo}</p>
        </Box>

        <Box xs={12} mb={1}>
            <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono:</span> {clubDatos && clubDatos.persona.telefono}</p>
        </Box>

        <Box xs={12} mb={1}>
            <p className={classes.parrafoInformacion}> <span className={classes.titleInformacion}>Direccion: </span> <span className="informacion">
              
              {clubDatos && clubDatos.direccion.calle}  {clubDatos && clubDatos.direccion.numero}<br/>
              <span p={20} className={classes.marginResponsable}>
              {clubDatos && clubDatos.direccion.provincia.nombre} , {clubDatos && clubDatos.direccion.localidad}<br/>
              </span>
              <span  className={classes.marginResponsable}>
              {clubDatos && clubDatos.direccion.provincia.country.nombre}
              </span>

              </span> </p>
        </Box>
    </CardContent>
</Card>
</Grid>

</Grid>

<Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-start"
  spacing={3}
  item
  xs={6}
>
<Grid item

xs={12}>

<Card>

<Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
      <CardHeader
        
        title={t('Socios vinculados')}

      />

      <div
        style={{margin: '12px'}}
      >
      <Button variant="outlined" color="primary"
      startIcon={<AddTwoToneIcon />}
      onClick={handleOpen}
      >
        Agregar un ingreso
      </Button>

      </div>
      
      </Box>
      <Divider />
      <CardContent 
     
      >
       
       <Grid 
       container
       direction="row"
       justifyContent="flex-start"
       alignItems="flex-start"
     
     
       xs={12}>
         <Grid  xs={6}
         display="flex"
         >

         <Avatar  className={classes.marginAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1624836200598-00faf0458e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
          <div
          display="block"
          xs={12}
        
          >
          <p className={classes.socioTitle}>
          Bill Gates
      </p>
      <p className={classes.socioSubtitle}>
      Founder at Microsoft.
      </p>
      <Button variant="contained" className={classes.vinculado} disableElevation>
      Vinculado
    </Button>
</div>
          </Grid>

          <Grid  xs={6}
         display="flex"
         >

            <Avatar  className={classes.black}>G</Avatar>

          <div
          display="block"
          xs={12}
        
          >
          <p className={classes.socioTitle}>
          Google Inc.
      </p>
      <p className={classes.socioSubtitle}>
      Company |  Internet
      </p>
    
</div>
          </Grid>
         
          <Grid 
          mt={4}
          xs={6}
         display="flex"
         >

         <Avatar  className={classes.marginAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1624836200598-00faf0458e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
          <div
          display="block"
          xs={12}
        
          >
          <p className={classes.socioTitle}>
          Bill Gates
      </p>
      <p className={classes.socioSubtitle}>
      Founder at Microsoft.
      </p>
      <Button variant="contained" className={classes.deshabilitado} disableElevation>
      Deshabilitado
    </Button>
</div>
          </Grid>
      </Grid>

    </CardContent>
</Card>
</Grid>




</Grid>


</Grid>

<Box m={8} />

<Grid xs={12} >
<Results user={clubDatos}/>
</Grid>

      </div>
     );
}
 
export default Club;
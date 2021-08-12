import {useState, useCallback, useEffect } from 'react';
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
import PublishIcon from '@material-ui/icons/Publish';
import styled from 'styled-components'
import moment from 'moment'
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
import {getClubID} from 'src/api/usuarios'
import { getUsuariosXClub} from 'src/api/usuarios'
import { cambiarEstadoAprobado,cambiarEstadoDesaprobado } from 'src/api/estado'
import { unwrapResult } from '@reduxjs/toolkit';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import {Animated} from "react-animated-css";

const Span = styled.span`

font-size: 33px!important;
`

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

    avatar: {
        height: '109px!important',
        width: '109px!important'
    },
    modified: {

height: '50px',
width: '175px',

borderRadius: '6px',
padding: '22px, 32px, 22px, 32px',
color: 'white',
backgroundColor: '#44D600!important',
marginLeft: '13px!important'


    },
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
  iconPadding: {
      padding: '5px!important'
  },
  titleSports:{
    marginTop: '1px',
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left'

  },
  subTitleSports:{

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '14px',
lineHeight: '8px',
paddingLeft: '10px',
/* Color States/Common/Black */
color: '223354',

opacity: '0.5'

  },
  colorSpinner:{
    color: 'white!important',
    width: '35px!important'
  }
  }));

//#FF1A43, 100 %
const Usuario = () => {
    const classes = useStyles();

    const isMountedRef = useRefMounted();
    const [user, setUser] = useState(null);
    const [clubDatos,setClubDatos] = useState()
    const [usuario,setUsuario] = useState(null)
    const [checked, setChecked] = useState(false);
    const [aprobadoSpinner,setAprobadoSpinner] = useState(false)
    const [desaprobadoSpinner,setDesaprobadoSpinner] = useState(false)
    

    const { userId } = useParams();
    const { t } = useTranslation();
    
    
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

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

      //  console.log(response)
      } catch (err) {
        console.error(err);
      }
    }, [userId, isMountedRef]);
  
    useEffect(() => {


      const llamadaUsuario = async() => {

        const result = await  getUsuariosXClub(135,userId)
   //     console.log('resultado',result,userId)
        setUsuario(result)

      }



      llamadaUsuario()
      
    }, []);
  

    const generandoFecha = (param) => {

      var formatted = moment(param).format('D MMMM YYYY');
      return formatted

    }


    const testAceptar = async (club,usuario) => {
      
      setAprobadoSpinner(true)
      const result = await cambiarEstadoAprobado(club,usuario)
      const resultUser = await  getUsuariosXClub(135,userId)

      setUsuario(resultUser)

      setAprobadoSpinner(false)
    }
    

    const testNoAceptar = async (club,usuario) => {
      setDesaprobadoSpinner(true)
      await cambiarEstadoDesaprobado(club,usuario)
      const resultUser = await  getUsuariosXClub(135,userId)
      setUsuario(resultUser)
      setDesaprobadoSpinner(false)
    
    }
    
    

    return ( 
        <div className={classes.container}>
<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="center"

>
<Grid item xs={12} md={1.5}>
                

                <AvatarWrapper>
                    <Avatar
                      variant="rounded"
                       className={classes.avatar}
                    />
                    <ButtonUploadWrapper>
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        name="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file"   >
                        <IconButton component="span" color="primary">
                          <PublishIcon/>
                        </IconButton>
                      </label>
                    </ButtonUploadWrapper>
                  </AvatarWrapper>

                </Grid>

<Grid item lg={10.3} xs={12}  
mb={10}
className={classes.textEnd}
>
{usuario && usuario.estado.nombre === 'pendiente' &&

<>


<Button variant="contained" className={classes.modifiedError} 
disableElevation
onClick={()=> testNoAceptar(usuario.clubId , usuario.usuarioId)}

>

      {desaprobadoSpinner ?

      <CircularProgress className={classes.colorSpinner} />

            : 
            <>
            <span class="material-icons-outlined  icon-check">
            clear
            </span>
            <span className={classes.iconPadding}>
                  Desaprobar
            </span>
            </>
      }

    
    
    </Button>


<Button variant="contained" className={classes.modified} 
disableElevation
onClick={()=> testAceptar(usuario.clubId , usuario.usuarioId)}
>

    {aprobadoSpinner ? 

    <CircularProgress className={classes.colorSpinner} />

    :
    <>
    <span class="material-icons-outlined  icon-check">
    done
    </span>
    <span className={classes.iconPadding}>
      
          Usuario Activo
    </span>

</>

    }



    </Button>
</>

 } 
 {usuario && usuario.estado.nombre === 'aprobado' &&

<>

<Button variant="contained" className={classes.modified} 
onClick={()=> testAceptar()}
>

<span class="material-icons-outlined  icon-check">
done
</span>
<span className={classes.iconPadding}>
      Usuario Activo
</span>
    </Button>
</>

 } 

{usuario && usuario.estado.nombre === 'desaprobado' &&

<>

<Button variant="contained" className={classes.modifiedError} 
disableElevation
onClick={()=> testNoAceptar(usuario.clubId , usuario.usuarioId)}

>
<span class="material-icons-outlined  icon-check">
clear
</span>
<span className={classes.iconPadding}>
      Desaprobado
</span>
    </Button>
</>

 } 

      </Grid>


    </Grid>

    <Box m={5} />
    <Grid item lg={12} xs={12}>
<Typography variant="h1"> {usuario && usuario.usuario.persona.nombre}  {usuario && usuario.usuario.persona.apellido} </Typography>
<div className={classes.texto}>{usuario && usuario.rol.nombre}</div>
    </Grid>


    <Box m={3} />



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
        
        title={t('Datos de contacto')}
        subheader="7 saved cards"
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
            <p  className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail:</span> {usuario && usuario.usuario.persona.correo}</p>
        </Box>

        <Box xs={12} mb={1}>
            <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono:</span> {usuario && usuario.usuario.persona.telefono ?  usuario.usuario.persona.telefono  : 'No ingreso'}</p>
        </Box>


       

        <Box xs={12} mb={1}>
        
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
        
        title={t('Informacion del usuario')}
        subheader="10 saved addresses"
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
        <Box xs={12} mb={1}>
            <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>DNI:</span>{usuario && usuario.usuario.persona.documento}</p>
        </Box>

        <Box xs={12} mb={1}>
            <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Cumpleanios:</span>{usuario && generandoFecha(usuario.usuario.persona.fechaNacimiento)}</p>
        </Box>

    </CardContent>
</Card>
</Grid>

</Grid>



</Grid>

<Box m={8} />


<Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-start"
  spacing={3}
  item
  xs={12}
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
        
        title={t('Deportes')}

      />

      <div
        style={{margin: '12px'}}
      >
      <Button variant="outlined" color="primary"
      startIcon={<AddTwoToneIcon />}
    
      >
        Agregar un deporte
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

     
        <Grid
        xs={3}
        display="flex"
        >

            <Box >
            <Span className="material-icons-outlined ">
            sports_soccer
</Span>
            </Box>
            <Box >
                <p className={classes.titleSports}>Futbol</p>
                <p className={classes.subTitleSports}>Primera A > Arquero</p>
                <p className={classes.subTitleSports}>Segunda C > Delantero</p>
            </Box>
        </Grid>
        <Grid
        xs={3}
        display="flex"
        >

            <Box >
            <Span className="material-icons-outlined ">
            sports_tennis
</Span>
            </Box>
            <Box >
                <p className={classes.titleSports}>Tennis</p>
                <p className={classes.subTitleSports}>Primera A > Arquero</p>
                <p className={classes.subTitleSports}>Segunda C > Delantero</p>
            </Box>
        </Grid>
        <Grid
        xs={3}
        display="flex"
        >

            <Box >
            <Span className="material-icons-outlined ">
            sports_soccer
</Span>
            </Box>
            <Box >
                <p className={classes.titleSports}>Futbol</p>
                <p className={classes.subTitleSports}>Primera A > Arquero</p>
                <p className={classes.subTitleSports}>Segunda C > Delantero</p>
            </Box>
        </Grid>


      </Grid>

    </CardContent>
</Card>
</Grid>




</Grid>

<Box m={8} />


<Grid xs={12} >
<Results user={clubDatos}/>
</Grid>


      </div>
     );
}
 
export default Usuario;
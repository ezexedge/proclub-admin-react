import { useState, useCallback, useEffect,useMemo } from 'react';
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
import Turnos from './Turnos'
import Ingresos from './Ingresos'
import Notificaciones from './Notificaciones'
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
import Results from './Results'
import { getClubID } from 'src/api/usuarios'
import { getUsuario } from 'src/api/usuarios'
import { cambiarEstadoAprobado, cambiarEstadoDesaprobado } from 'src/api/estado'
import { unwrapResult } from '@reduxjs/toolkit';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import { Animated } from "react-animated-css";
import {getReservaPorUsuario} from 'src/api/reservas'
import {getIngresoByUser} from 'src/api/ingreso'
import {getNotificacionDeUnUsuario,getNotificacionAllByUser} from 'src/api/notificaciones'
import {getDeportesUsuarioAdmin} from 'src/api/deportes'
import { iconos} from 'src/iconos'


//getUsuario
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
  margin: {
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
    lineHeight: '35px!important',
    color: '#223354!important',
    marginLeft: '17px!important'

  },
  card: {
    marginTop: '41px!important',
    background: '#FFFFFF',
    boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
    border: '6px'

  },

  imageCard: {
    backgroundColor: 'white!important',

    height: '88px!important',
    width: '88px!important',
    borderRadius: '6px!important',
    padding: '20px!important'
  },
  container: {
    width: '100%!important',
    heigth: 'auto!important',
    padding: '34px!important'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardTitle: {
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
  cardSubtitle: {

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
  cardSubtitle2: {

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
  textEnd: {
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
  parrafoInformacion: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '0em'

  }
  ,
  parrafoEmail: {

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
  headerStyle: {

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
  headerHelp: {

    with: '16px!important',
    height: '16px!important',
    /* Color States/Common/Black */
    color: '#223354',
    marginTop: '2px!important',
    opacity: '0.5'

  },
  textCard: {

    fontFamily: 'Roboto!important',
    fontStyle: 'normal!important',
    fontWeight: 'normal!important',
    fontSize: '22px!important',
    lineHeight: '26px!important',

    /* Color States/Common/Black */
    color: '#223354!important'


  },
  upIcon: {
    color: '#3BB900!important',
    width: '13px!important',
    height: '13px!important',
    marginTop: '1.5px!important',
    marginLeft: '7px!important',
    marginRight: '5px!important',
    fontWeight: '700!important'


  },
  downIcon: {
    color: '#FF1A43!important',
    width: '13px!important',
    height: '13px!important',
    marginTop: '1.5px!important',
    marginLeft: '7px!important',
    marginRight: '5px!important',
    fontWeight: '700!important'


  },
  bolderText: {
    fontWeight: '700!important',
  },
  marginResponsable: {
    margin: '70px!important'
  },
  editIcon: {
    marginTop: '27px!important',
    with: '18px!important',
    height: '18px!important'
  },
  editText: {
    color: '#6B64F8!important',
    marginTop: '27px!important',
    marginRight: '15px!important',
    marginLeft: '3px!important',
    cursor: 'pointer!important'

  },
  socioTitle: {
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
  socioSubtitle: {
    /* 25 Jul 2021 | 11:45 PM */

    fontFamily: 'Roboto',
    fontStyle: 'normal',
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
  marginAvatar: {
    marginRight: '10px!important'
  },
  vinculado: {
    backgroundColor: '#44D600!important'
  },
  deshabilitado: {
    backgroundColor: '#FFAF39!important'
  },
  black: {
    backgroundColor: 'black!important',
    color: 'white',
    marginRight: '10px!important'
  },
  iconPadding: {
    padding: '5px!important'
  },
  titleSports: {
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
  subTitleSports: {

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
  colorSpinner: {
    color: 'white!important',
    width: '35px!important'
  }
}));

//#FF1A43, 100 %
const Usuario = () => {
  const classes = useStyles();
  const token = window.localStorage.getItem('accessToken');

  const isMountedRef = useRefMounted();
  const [user, setUser] = useState(null);
  const [clubDatos, setClubDatos] = useState()
  const [usuario, setUsuario] = useState(null)
  const [notificaciones,setNotificaciones] = useState([])
  const [ingresos,setIngresos] = useState([])
  const [values,setValues] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    cumpleanios: '',
    sexo: ''
  })
  const [checked, setChecked] = useState(false);
  const [aprobadoSpinner, setAprobadoSpinner] = useState(false)
  const [desaprobadoSpinner, setDesaprobadoSpinner] = useState(false)
const [turnos,setTurnos] = useState([])
const [deportes,setDeportes] = useState([])

  const { userId } = useParams();
  const { t } = useTranslation();


  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [currentTab, setCurrentTab] = useState('turnos');

  const tabs = [
    {
      value: 'turnos',
      label: t('Turnos')
    },
    {
      value: 'ingresos',
      label: t('Ingresos')
    },
    {
      value: 'notificaciones',
      label: t('Notificaciones')
    }
  ];




  const llamadoDeportesUsuario = async(param) => {
    const result = await getDeportesUsuarioAdmin(param,token)
    console.log('deportes del usuarip',result)
    setDeportes(result)
  }




  const llamadaNotificacion = async(param) => {
    const result = await getNotificacionAllByUser(param,token)
    console.log('notificacion',result)

    if(result){
      let arr = []
      for(let val of result){
        let obj = {
          id: val.club.notificacion.id,
          titulo: val.club.notificacion.titulo,
          fecha: val.club.notificacion.fecha,
          hora: val.club.notificacion.hora
        }
        arr.push(obj)
      }

      setNotificaciones(arr)

    }
  }

  const llamadoIngreso = async(param) => {
    const result = await getIngresoByUser(param,token)



    if(result){
      let arr = []

      for(let val of result){

        let obj = {
          id: val.id,
          fecha: val.fecha,
          hora: val.hora,
          espacio: val.espacio.nombre
        }

        arr.push(obj)


      }

      setIngresos(arr)
    }



}

  const llamadaTurno = async(param) => {
    const result = await getReservaPorUsuario(param,token)
    console.log('turnosss',result)
    if(result) {

      let arr = []
      for(let val of result){

          let obj = {
            id: val.id,
            turno: val.fechaInicio, 
            hora: val.desde,
            espacio: val.espacio.nombre,
            valor:  val.espacio.valor,
            estado: val.estadoreserva.nombre === 'desaprobado' ? 'eliminado' : 'activo'
          }


          arr.push(obj)

      }
      setTurnos(arr)


    }

}


  const handleTabsChange = (event, value) => {
    setCurrentTab(value)
  };


  const llamadaUsuario = async(param) => {
    const result = await  getUsuario(param,token)
    console.log('bbbu',result)
    setUsuario(result)
  }
 



  useMemo(() => {

    if(usuario!==null){

      setValues({
        ...values,
        nombre: usuario.persona.nombre,
        apellido: usuario.persona.apellido,
        mail: usuario.persona.correo,
        telefono: usuario.persona.telefono,
        fechaNacimiento: usuario.persona.fechaNacimiento,
        sexo: usuario.persona.sexo,
        documento: usuario.persona.documento,
        activo: usuario.activo

      })

    }
 

}, [usuario]);

  useEffect(() => {

    if(userId){
      llamadaUsuario(userId)
      llamadaTurno(userId)
      llamadoIngreso(userId)
      llamadaNotificacion(userId)
      llamadoDeportesUsuario(userId)
    }

  
  }, []);


  const generandoFecha = (param) => {
    var formatted = moment(param).format('D MMMM YYYY');
    return formatted
  }
 

  console.log('aca estan los turnos',turnos)

  const imageDeporte = (param) => {


    let result = iconos.find(val => val.nombre === param)
console.log('resultado de icono',result)
    return( 
    <img style={{ width: 30 }} src={result.icono} />
    )
   }



  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"


      >
        <Grid item xs={10} md={1.5}>
          <AvatarWrapper>
            <Avatar
              variant="rounded"
              className={classes.avatar}
            />
         </AvatarWrapper>

        </Grid>
        <Grid item lg={10} xs={10}
        
          className={classes.textEnd}
        >


          
         {values.activo === 1 ?  
         
         <Button variant="contained"  className={classes.modified}
               
               >
 
                 <span class="material-icons-outlined  icon-check">
                   done
                 </span>
                 <span className={classes.iconPadding}>
                   Usuario Activo
                 </span>
               </Button> 
        
             : 
             
             <Button variant="contained"  className={classes.modifiedError}
             disableElevation
          

           >
             <span class="material-icons-outlined  icon-check">
               clear
             </span>
             <span className={classes.iconPadding}>
               Eliminado
             </span>
           </Button>
             
             }   
  

        </Grid>

      </Grid>

      <Box mt={3} />
      <Grid item lg={12} xs={12}>
<Typography variant="h1"> {values.nombre}  {values.apellido} </Typography>
  
    </Grid>

      <Box m={2} />

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
                />

              </Box>

              <Divider />
              <CardContent

              >
                <Box xs={12} p={0} m={0}>
                  <p className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail: {values.mail}</span> </p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono: {values.telefono} </span> </p>
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
                />
              </Box>

              <Divider />
              <CardContent

              >
                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>DNI: {values.documento}</span></p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Cumpleanios: {values.fechaNacimiento}</span></p>
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




              {deportes && deportes.map((val)=>(
                      <Grid
                      xs={4}
                      display="flex"
                    >
    
                      <Box >
                        
                      {imageDeporte(val.disciplinaxclub && val.disciplinaxclub.disciplina && val.disciplinaxclub.disciplina.icono )}


                      </Box>
                      <Box >
                        <p className={classes.titleSports}>{val.disciplinaxclub && val.disciplinaxclub.disciplina && val.disciplinaxclub.disciplina.nombre }</p>
                        <p className={classes.subTitleSports}> {`${val.disxclubxdiv && val.disxclubxdiv.nombre ? val.disxclubxdiv.nombre : 'no hay division' }   > ${val.disciplinaxclubxpos && val.disciplinaxclubxpos.disciplinaxpos.nombre ? val.disciplinaxclubxpos.disciplinaxpos.nombre : 'no hay posicion'}`} </p>
                        <p className={classes.subTitleSports} color="primary">{val.disciplinaxclub && val.disciplinaxclub.club && val.disciplinaxclub.club.nombre}</p>

                      </Box>
                    </Grid>
               
              ))}


          


              </Grid>

            </CardContent>
          </Card>
        </Grid>




      </Grid>

      <Box m={8} />

      <div>

<Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
              
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value}  />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12} mt={4} >
            {currentTab === 'turnos' && <Turnos products={turnos} />}

            {currentTab === 'ingresos' && <Ingresos products={ingresos} />}
       
            {currentTab === 'notificaciones' && <Notificaciones products={notificaciones} />}
       
          </Grid>
      
</div>

    </div>
  );
}

export default Usuario;
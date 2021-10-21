import { useState, useCallback, useEffect , forwardRef } from 'react';
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
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import { getDeportesXClub , eliminarDisiciplinaByUser} from 'src/api/deportes'
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
  DialogTitle,
  Zoom
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Results from './Results'
import { getClubID, getUsuariosXClub, agregarUsuarioPerfilDeporte, getPerfilUsuarioAllDeportes } from 'src/api/usuarios'
import { cambiarEstadoAprobado, cambiarEstadoDesaprobado } from 'src/api/estado'
import { unwrapResult } from '@reduxjs/toolkit';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import { Animated } from "react-animated-css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDivisionXClubXDisciplina } from 'src/api/division'
import { getPosicionXDivision } from 'src/api/posiciones'
import { iconos} from 'src/iconos'
import Turnos from './Turnos'
import Ingresos from './Ingresos'
import Notificaciones from './Notificaciones'
import {getReservaPorUsuario} from 'src/api/reservas'
import {getIngresoByUser} from 'src/api/ingreso'
import {getNotificacionDeUnUsuarioByClub} from 'src/api/notificaciones'


const Span = styled.span`

font-size: 33px!important;
`

const theme = {
  spacing: 8,
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


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

const AvatarError = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const DialogWrapper = experimentalStyled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
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


const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);


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
    letterSpacing: '0em',
    margin: '0px'

  },
  parrafoInformacion2: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '0em',
    margin: '0px',
    padding: '0px 75px!important'

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
    marginTop: '8px',
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '5px',
    letterSpacing: '0em',
    textAlign: 'left'

  },
  subTitleSports: {

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '5px',
    paddingLeft: '10px',
    /* Color States/Common/Black */
    color: '223354',

    opacity: '0.5'

  },
  colorSpinner: {
    color: 'white!important',
    width: '35px!important'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

    zIndex: '100!important',
    width: '50%'

  },

  selectedPadding: {
    padding: '20px!important'
  },
  cancelar: {
    marginLeft: '15px !important'
  }
}));

//#FF1A43, 100 %
const Usuario = () => {
  const classes = useStyles();

  const [bloquearBtn, setBloquearBtn] = useState(true)

  const [open, setOpen] = useState(false)
  const isMountedRef = useRefMounted();
  const [clubDatos, setClubDatos] = useState()
  const [usuario, setUsuario] = useState(null)
  const [checked, setChecked] = useState(false);

  const [aprobadoSpinner, setAprobadoSpinner] = useState(false)
  const [desaprobadoSpinner, setDesaprobadoSpinner] = useState(false)
  const [deportes, setDeportes] = useState([])
  const [division, setDivision] = useState(null)
  const [disciplina, setDisciplina] = useState(null)
  const [disciplinaList, setDisciplinaList] = useState([])
  const [divisionList, setDivisionList] = useState([])
  const [posicion, setPosicion] = useState(null)
  const [posicionList, setPosicionList] = useState([])
  const [deportePerfil, setDeportePerfil] = useState([])
  const [actualizarDeportes, setActualizarDeportes] = useState(false)
  const token = window.localStorage.getItem('accessToken');
  const [aprobadoFinal,setAprobadoFinal] = useState(false)
  const [desaprobadoFinal,setDesaprobadoFinal] = useState(false)
  const [eliminarTodos,setEliminarTodos] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [eliminarId,setEliminarId] = useState(null)
  const [notificaciones,setNotificaciones] = useState([])
  const [ingresos,setIngresos] = useState([])
  const [turnos,setTurnos] = useState([])



  const { user } = useAuth()
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



  const llamadaNotificacion = async(param,param2) => {
    const result = await getNotificacionDeUnUsuarioByClub(param,param2,token)

    if(result && result.length > 0){
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



  const imageDeporte = (param) => {


    let result = iconos.find(val => val.nombre === param)
console.log('resultado de icono',result)
    return( 
    <img style={{ maxWidth: 30,marginLeft: 5 }} src={result.icono} />
    )
   }


  const llamarDeporte = async (param) => {
    const result = await getDeportesXClub(param, token)
    console.log('llamada a deportes', result)
    setDeportes(result)
  }

  const llamadaDivision = async (param1, param2) => {
    if (disciplina !== null) {
      const result = await getDivisionXClubXDisciplina(param1, param2, token)
      console.log('lista de division', result)
      setDivisionList(result)
    }
  }


  const llamadaPosicion = async (param) => {
    if (division !== null) {
      const result = await getPosicionXDivision(param, token)
      console.log('aca van todas las posiciones', result)
      setPosicionList(result)
    }
  }



  const handleConfirmDelete = (param) => {
    setEliminarId(param)
    console.log('esto se elimina',param)
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted =  async() => {


   
    setOpenConfirmDelete(false)


      let result = await eliminarDisiciplinaByUser(user.clubId,userId,eliminarId,token)
     
    if(result.error){


      enqueueSnackbar(t('La cuenta de usuario ha sido eliminada.'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

    }else{



      setActualizarDeportes(true)
      enqueueSnackbar(t('La cuenta de usuario ha sido eliminada.'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });


    }
  
  


 

    



  };




  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };



  const llamadaUsuario = async () => {

    const result = await getUsuariosXClub(user.clubId, userId, token)
    console.log('resultado', result, userId)
    setUsuario(result)

  }


  const llamadaDeportesDelPerfil = async (param,param2) => {

    const result = await getPerfilUsuarioAllDeportes(param,param2, token)
    console.log('estos son los deportes del perfil', result)
 

    setDeportePerfil(result)

  }


  useEffect(() => {




    if (user) {
      llamarDeporte(user.clubId)
      llamadaUsuario()

      llamadaDeportesDelPerfil(user.clubId,userId)
      
      llamadaTurno(userId)
      llamadoIngreso(userId)
       llamadaNotificacion(user.clubId,userId)
      
  

    }


  }, []);

  useEffect(() => {
    if (disciplina !== null) {
      llamadaDivision(user.clubId, disciplina)
      setPosicion(null)
      setDivision(null)
      setBloquearBtn(false)
    }
  }, [disciplina])

  useEffect(() => {
    if (division !== null) {
      llamadaPosicion(division)
    }
  }, [division])

  useEffect(() => {
    if (actualizarDeportes === true) {

      llamadaDeportesDelPerfil(user.clubId,userId)

      setActualizarDeportes(false)
    }
  }, [
    actualizarDeportes
  ])

  const generandoFecha = (param) => {

    var formatted = moment(param).format('D MMMM YYYY');
    return formatted

  }


  const testAceptar = async (club, usuario) => {

    setAprobadoSpinner(true)
    const result = await cambiarEstadoAprobado(club, usuario, token)
    const resultUser = await getUsuariosXClub(135, userId, token)

    setUsuario(resultUser)

    setAprobadoSpinner(false)
    setAprobadoFinal(true)
    setEliminarTodos(true)
  }


  const testNoAceptar = async (club, usuario) => {
    setDesaprobadoSpinner(true)
    await cambiarEstadoDesaprobado(club, usuario, token)
    const resultUser = await getUsuariosXClub(135, userId, token)
    setUsuario(resultUser)
    setDesaprobadoSpinner(false)
    setDesaprobadoFinal(true)
    setEliminarTodos(true)

  }


  const agregarDeporte = async () => {

    setBloquearBtn(true)
    const result = await agregarUsuarioPerfilDeporte(userId,user.clubId, disciplina, division, posicion, token)

    if (result.error) {
      setOpen(false)

      enqueueSnackbar(t(result.error), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });


    } else {

      //     setActualizarDivision(true)
      setActualizarDeportes(true)
      setOpen(false)
      enqueueSnackbar(t(result.message), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });


    }


    setBloquearBtn(false)
  }

  console.log('division cambio',user)

  return (
    <div className={classes.container}>

<DialogWrapper
        open={openConfirmDelete}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography align="center" sx={{ py: 4, px: 6 }} variant="h2">
            {t('¿Está seguro de que desea eliminar permanentemente esta cuenta de usuario?')}
            ?
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{ mx: 1 }}
              onClick={closeConfirmDelete}
            >
              {t('Cancelar')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{ mx: 1, px: 3 }}
              variant="contained"
            >
              {t('Eliminar')}
            </ButtonError>
          </Box>
        </Box>
      </DialogWrapper>

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
          <div className={classes.paperModal}>

            <DialogTitle disableTypography>
              <Typography variant="h3" gutterBottom py={1}>
                {t('Agregar un deporte')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Agregar un deporte'
                )}
              </Typography>
            </DialogTitle>
            <FormControl mt={4} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná un deporte</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná un deporte"
                name="sexo"
                onChange={(e) => setDisciplina(e.target.value)}

              >
                {deportes && deportes.length > 0 && deportes.map((val, i) => (

                  <MenuItem value={val.disciplinaId}   >{val.disciplina.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>


            <FormControl mt={1} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná una division</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná una division"
                name="sexo"
                onChange={(e) => setDivision(e.target.value)}
              >
                {divisionList && divisionList.map((val, i) => (

                  <MenuItem value={val.id}   >{val.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>


            <FormControl mt={1} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná una posicion</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná una division"
                name="sexo"
                onChange={(e) => setPosicion(e.target.value)}
              >
                {posicionList && posicionList.posiciones && posicionList.posiciones.map((val, i) => (

                  <MenuItem value={val.id}   >{val.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>

            <Grid xs={12} p={3} display="flex" justifyContent="flex-end" mt={3}>
              <Button variant="contained" color="primary"
                p={3}
                onClick={() => agregarDeporte()}
                disabled={bloquearBtn === true ? true : false}
              >
                Agregar un deporte

              </Button>

              <Button p={3}
                variant="outlined" color="secondary" className={classes.cancelar} onClick={handleClose}>
                Cancelar
              </Button>

            </Grid>

          </div>
        </Fade>
      </Modal>

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
         
          </AvatarWrapper>

        </Grid>

        <Grid item lg={10.3} xs={12}
          mb={10}
          className={classes.textEnd}
        >
          {usuario && usuario.estado && usuario.estado.nombre === 'pendiente' &&

            <>


              <Button variant="contained" className={classes.modifiedError}
                disableElevation
                onClick={() => testNoAceptar(usuario.clubId, usuario.usuarioId)}

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
                onClick={() => testAceptar(usuario.clubId, usuario.usuarioId)}
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
          {usuario && usuario.estado && usuario.estado.nombre === 'aprobado' && eliminarTodos === false &&

            <>

              <Button variant="contained" disabled={aprobadoFinal === true ? true : false } className={classes.modified}
                onClick={() => testAceptar()}
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

          {usuario && usuario.estado && usuario.estado.nombre === 'desaprobado'  && eliminarTodos === false &&

            <>

              <Button variant="contained"  disabled={desaprobadoFinal === true ? true : false } className={classes.modifiedError}
                disableElevation
                onClick={() => testNoAceptar(usuario.clubId, usuario.usuarioId)}

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


          {desaprobadoFinal === true && (

<>

<Button variant="contained"   className={classes.modifiedError}
  disableElevation

>
  <span class="material-icons-outlined  icon-check">
    clear
  </span>
  <span className={classes.iconPadding}>
    Desaprobado
  </span>
</Button>
</>

          )}


          {
            aprobadoFinal === true && (
              <>

              <Button variant="contained"  className={classes.modified}
               
              >

                <span class="material-icons-outlined  icon-check">
                  done
                </span>
                <span className={classes.iconPadding}>
                  Usuario Activo
                </span>
              </Button>
            </>
            )
          }



        </Grid>


      </Grid>

      <Box m={5} />
      <Grid item lg={12} xs={12}>
        <Typography variant="h1"> {usuario && usuario.usuario.persona.nombre}  {usuario && usuario.usuario.persona.apellido} </Typography>
        <Typography variant="h3" mt={1} color="secondary" >{usuario && usuario.rol && usuario.rol.nombre}</Typography>
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


              </Box>

              <Divider />
              <CardContent

              >
                <Box xs={12} p={0} m={0}>
                  <p className={classes.parrafoInformacion} ><span className={classes.titleInformacion}>Nombre:</span> {usuario && usuario.usuario.persona.nombre}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Apellido:</span> {usuario && usuario.usuario.persona.apellido ? usuario.usuario.persona.apellido : 'No ingreso'}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>DNI:</span>{usuario && usuario.usuario.persona.documento}</p>
                </Box>


                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Fecha de nacimiento:</span>{usuario && generandoFecha(usuario.usuario.persona.fechaNacimiento)}</p>
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


              </Box>

              <Divider />
              <CardContent

              >
                <Box xs={12} p={0} mb={1}>
                  <p className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail:</span> {usuario && usuario.usuario.persona.correo}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono:</span> {usuario && usuario.usuario.persona.telefono ? usuario.usuario.persona.telefono : 'No ingreso'}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Domicilio:</span> {usuario && usuario.usuario.persona.direccionPersona ? usuario.usuario.persona.direccionPersona.calle + ' ' + usuario.usuario.persona.direccionPersona.numero : 'No ingreso'}</p>
                  {/* <p className={classes.parrafoInformacion2}>< span>        </span>{usuario && usuario.usuario.persona.direccionPersona.provincia ?  usuario.usuario.persona.direccionPersona.provincia.nombre + ' , ' + usuario.usuario.persona.direccionPersona.localidad   : 'No ingreso'}</p> */}
                  {/* <p className={classes.parrafoInformacion2}>< span>        </span>{usuario && usuario.usuario.persona.direccionPersona.provincia ?  usuario.usuario.persona.direccionPersona.provincia.country.nombre  : 'No ingreso'}</p> */}

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
                style={{ margin: '12px' }}
              >
                <Button variant="outlined" color="primary"
                  startIcon={<AddTwoToneIcon />}
                  onClick={() => handleOpen()}
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



                {deportePerfil && deportePerfil.length > 0 && deportePerfil.map((val, i) => (

                  <>

                    <Grid
                      xs={4}
                      mt={2}
                      display="flex"
                    >

                      
                    {imageDeporte(val.disciplinaxclub && val.disciplinaxclub.disciplina && val.disciplinaxclub.disciplina.icono )}

                      
                      <Box >
                        <Grid  xs={12}  display="flex"   justifyContent="space-between">
                        <p className={classes.titleSports}>{val.disciplinaxclub && val.disciplinaxclub.disciplina  ? val.disciplinaxclub.disciplina.nombre : 'no existe'}</p>
                        <DeleteIcon  cursor="pointer" color="error"     onClick={() => handleConfirmDelete(val.id)}  />

                        </Grid>
                        <p className={classes.subTitleSports} > {val.disxclubxdiv ? val.disxclubxdiv.nombre : 'no ingreso'} >  {val.disciplinaxclubxpos && val.disciplinaxclubxpos.disciplinaxpos ? val.disciplinaxclubxpos.disciplinaxpos.nombre : 'no ingreso posicion'} </p>
                    </Box>
                    </Grid>
                  </>
                ))}


                {deportePerfil && deportePerfil.length === 0 && 'No posee deportes'}



              </Grid>

            </CardContent>
          </Card>
        </Grid>




      </Grid>

      <Box m={8} />


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
  );
}

export default Usuario;
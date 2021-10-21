import React, { useState, useCallback, forwardRef,useEffect } from 'react';
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
import RelationUserAdminClubWizard from './RelationUserAdminClubWizard'
import { getUsuarioXclubxRol } from 'src/api/usuarios';
import {getClubIdEstadistica} from 'src/api/club'
import {DataGrid} from '@material-ui/data-grid'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import {getUsuariosXClub,agregarAdminApi,eliminarAdminApi} from 'src/api/club'
import { useSnackbar } from 'notistack';
import Informacion from './Informacion'
import { getDisciplinaXClub } from 'src/api/club';
import Contacto from './Contacto'
import Deportes from './Deportes'
import Configuracion from './Configuracion'
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
import { getClubID } from 'src/api/club'
import { unwrapResult } from '@reduxjs/toolkit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
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

const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
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

const DialogWrapper = experimentalStyled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const Input = experimentalStyled('input')({
  display: 'none'
});


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
 
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
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
    lineHeight: '20px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',

    /* Color States/Common/Black */
    color: '#223354',

    marginTop: '2px!important'


  },
  socioSubtitle: {
    /* 25 Jul 2021 | 11:45 PM */
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
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
  sectorEliminar:{
  
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'center'
  }

}));




//#FF1A43, 100 %
const Club = () => {
  const classes = useStyles();

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [eliminarId,setEliminarId] = useState(null)
  const [currentTab, setCurrentTab] = useState('informacion');
  const token = window.localStorage.getItem('accessToken');

  const isMountedRef = useRefMounted();
  const [user, setUser] = useState(null);
  const [clubDatos, setClubDatos] = useState()
  const [estadistica,setEstadistica] = useState(null)
  // @ts-ignore
  const { userId } = useParams();
  const { t } = useTranslation();
  const [rows,setRows] = useState([])
  const [actualizarUsuarios,setActualizarUsuarios] = useState(false)
  const [deportes,setDeportes] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const [actualizar,setActualizar] = useState(false)

  const tabs = [
    { value: 'informacion', label: t('informacion del club') },
    { value: 'contacto', label: t('datos de contacto') },
    { value: 'deportes', label: t('Deportes') },
    { value: 'configuracion', label: t('Configuracion') }
  ];



  const actualizarClub = (data) => {
    setActualizar(data)
}


  const handleConfirmDelete = (params) => {
    
    setEliminarId(params)
    console.log(params)
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);


  };

  const handleDeleteCompleted = async() => {
    setOpenConfirmDelete(false);
    console.log('eliminado',eliminarId)

    const result = await eliminarAdminApi(userId,eliminarId,token)

    if(result.err){

      enqueueSnackbar(result.error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });


    }else{

      setActualizarUsuarios(true)

 enqueueSnackbar(result.message, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

    }

  }



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const [openTooltip, setOpenTooltip] = React.useState(false);

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const handleOpenTooltip = () => {
    setOpenTooltip(true);
  };


;


  const agregarAdmin = async(param) => {
    console.log('agregando admin',param.id)
    handleClose()

      const result = await agregarAdminApi(userId,param.id,token)

      if(result.error){

        enqueueSnackbar(result.error, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          TransitionComponent: Zoom
        });
  

      }else{

        setActualizarUsuarios(true)

   enqueueSnackbar(result.message, {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          TransitionComponent: Zoom
        });

      }







}





  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'nombre',
      headerName: 'Nombre y apellido',
      width: 210,
      editable: true,
    },
    {
      field: 'rol',
      headerName: 'Rol',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Button
        pl={4}
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        onClick={()=>agregarAdmin(params)}
      
      >
        Agregar
      </Button>
      )
      
      ,
    },
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
  const llamadaClubId = async () => {
    const result = await getClubID(userId,token)
    console.log('club datos',result)
    setClubDatos(result)
  }

  const llamadaEstadistica = async(param) =>{
    const result =  await getClubIdEstadistica(param)
    console.log('estadisiticas',result)
    setEstadistica(result) 
  }

    const llamadaDeportes = async (param) => {
      const result = await getDisciplinaXClub(param)
      console.log('resultad', result)
      let arr = []
      if(result){
        for(let val of result){
          if(val.disciplina !== null){
            arr.push(val.disciplina)
          }
        }
        setDeportes(arr)
      }
    }

  const llamadaUsuarioClub = async(param) => {
    const result = await getUsuariosXClub(param,token)
    console.log('usuarios x club',result)
    let arr = []
    if(result){

      for(let val of result){


        if( val.rol !== null && val.rol.nombre === 'socio' || val.rol !== null && val.rol.nombre === 'manager' ){

          let nombre = val.usuario && val.usuario.persona && val.usuario.persona.nombre ?  val.usuario.persona.nombre :  'No ingreso'
          let apellido = val.usuario && val.usuario.persona && val.usuario.persona.apellido ?  val.usuario.persona.apellido : 'No ingreso'
          const obj = {
            id: val.usuarioId,
            nombre : nombre + ' ' + apellido,
            rol: val.rol && val.rol.nombre ,
            acciones: ''

          }

          arr.push(obj)
        }
      }

    }
    setRows(arr)
  }

  useEffect(() => {

   
    if(userId){
      llamarUsuariosXClubXRol()
      llamadaClubId()
      llamadaEstadistica(userId)
      llamadaUsuarioClub(userId)
    }

    getUser();
  }, []);

  useEffect(()=>{

      if(actualizar === true){
        llamadaClubId()

        setActualizar(false)

      }
    
  },[actualizar])


  useEffect(()=>{

    if(actualizarUsuarios === true){

      llamadaUsuarioClub(userId)

      llamarUsuariosXClubXRol()

      setActualizarUsuarios(false)
    }

  },[actualizarUsuarios])


  useEffect(() => {
  

    if (userId) llamadaDeportes(userId)
      console.log('deportes', deportes)
  }, [user])


  // Llamar usuarios por club por rol
  const [usuariosXClubXRol, setUsuariosXClubXRol] = useState(null)
  const llamarUsuariosXClubXRol = async () => {
    const result = await getUsuarioXclubxRol(userId, 2,token);
    console.log(result)
    setUsuariosXClubXRol(result)
  }






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
            {t('¿Está seguro de que desea eliminar permanentemente este Club?')}
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
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
       
        disableSelectionOnClick
      />
    </div>
          </Box>
        </Fade>
      </Modal>


      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"

      >

        <Grid item xs={12} md={6}>

        

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
          
              </label>
            </ButtonUploadWrapper>
          </AvatarWrapper>

        </Grid>

        <Grid item lg={5.8} xs={12}
          mb={3}
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
                  <HelpOutlineIcon className={classes.headerHelp} />
                </Grid>

              </Grid>
              <Box m={1} />
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                <Typography component="div" variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                { estadistica !== null ?  estadistica.usuarios : 0  }
                </Typography>
               
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
                  <HelpOutlineIcon className={classes.headerHelp} />
                </Grid>

              </Grid>
              <Box m={1} />
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                <Typography component="div" variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                  {estadistica !== null ? estadistica.deportes : 0 }
                </Typography>
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
                    Cant turnos
                  </Typography>
                </Grid>
                <Grid xs={1.5}>
                  <HelpOutlineIcon className={classes.headerHelp} />
                </Grid>

              </Grid>
              <Box m={1} />
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                <Typography component="div" variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                {estadistica !== null ? estadistica.turnos : 0 }
                </Typography>
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
                    Cant notificaciones
                  </Typography>
                </Grid>
                <Grid xs={1.5}>
                  <HelpOutlineIcon className={classes.headerHelp} />
                </Grid>

              </Grid>
              <Box m={1} />
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">

                <Typography component="div" variant="h3" className={classes.textCard} sx={{ mr: 1 }}>
                {estadistica !== null ? estadistica.notificaciones : 0 }
                </Typography>
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
          xs={5}
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
             </div>

              </Box>

              <Divider />
              <CardContent

              >
                <Box xs={12} p={0} m={0}>
                  <p className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail:</span> {clubDatos && clubDatos.persona.correo}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono:</span> {clubDatos && clubDatos.persona.telefono}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}> <span className={classes.titleInformacion}>Direccion: </span> <span className="informacion">

                    {clubDatos && clubDatos.direccion.calle}  {clubDatos && clubDatos.direccion.numero}<br />
                    <span p={20} className={classes.marginResponsable}>
                      {clubDatos && clubDatos.direccion.provincia.nombre} , {clubDatos && clubDatos.direccion.localidad}<br />
                    </span>
                    <span className={classes.marginResponsable}>
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
          spacing={2}
          item
          xs={7}
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
                  title={t('Administradores del club')}
                />

                <div
                  style={{ margin: '12px' }}
                >
                  <Button variant="outlined" color="primary"
                    startIcon={<AddTwoToneIcon />}
                    onClick={handleOpen}
                  >
                    Agregar administrador
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


                  {
                    usuariosXClubXRol !== null &&
                    usuariosXClubXRol.map(item => {
                      console.log(item)
                      return <Grid xs={6} m={0} display="flex">
                        <Avatar className={classes.marginAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1624836200598-00faf0458e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                        <div display="block" xs={12}>
                          <div className={classes.sectorEliminar}>
                          <p className={classes.socioTitle}>
                            {item.usuario.persona.nombre}
                          </p>
                          <div>
                            <DeleteIcon cursor="pointer" color="error" pt={2} onClick={()=> handleConfirmDelete(item.usuarioId)} />
                          </div>
                          </div>
                          <p className={classes.socioSubtitle}>
                            {item.usuario.persona.correo}
                          </p>
                        </div>
                      </Grid>
                    })
                  }
                </Grid>
                  
                            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
                          >
              <Tooltip open={openTooltip} onClose={handleCloseTooltip} onOpen={handleOpenTooltip} title="Ver administradores" cursor="pointer">
              <MoreHorizIcon color="primary" />

       
    </Tooltip>
            </Grid>


              </CardContent>
            </Card>
          </Grid>
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
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12} mt={2}>
            {currentTab === 'informacion' && <Informacion datos={clubDatos}  actualizarClub={(e) => { actualizarClub(e) }} />}
            {currentTab === 'contacto' && <Contacto datos={clubDatos} actualizarClub={(e) => { actualizarClub(e) }}/>}
            {currentTab === 'deportes' && <Deportes users={deportes} />}
            {currentTab === 'configuracion' && <Configuracion datos={clubDatos}   actualizarClub={(e) => { actualizarClub(e) }} />}
              
          </Grid>
    </div>
  );
}

export default Club;
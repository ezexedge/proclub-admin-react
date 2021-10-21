import React,{useState, useCallback, useEffect,useMemo,forwardRef } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios  from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import {getDeportesIDXClubID} from 'src/api/deportes'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import EditIcon from '@material-ui/icons/Edit';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import PrintIcon from '@material-ui/icons/Print';
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import {getEspacioById,getEspacioByDisciplinaXClub,modificarNombreEspacio} from 'src/api/espacio'
import {getDisciplinaXClub} from 'src/api/club'
import {agregarDisciplina,eliminarEspacio,eliminarDisciplinaxEspacio} from 'src/api/espacio'
import TurnoHeader from './TurnoHeader'
import { upperFirts } from 'src/utils/text'
import useAuth from 'src/hooks/useAuth';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSnackbar } from 'notistack';
import ActivityTab from '../ActivityTab';
import EditProfileTab from '../EditProfileTab';
import NotificationsTab from '../NotificationsTab';
import SecurityTab from '../SecurityTab';
import { iconos} from 'src/iconos'
import CloseIcon from '@material-ui/icons/Close';
import {getReservasByEspacio,modificarImagenEspacio} from 'src/api/espacio'
import Resizer from 'react-image-file-resizer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { saveAs } from 'file-saver'

import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';


import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  CardHeader,
  Checkbox,
  Slide,
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
  Zoom,
  InputLabel,
  Select,
  MenuItem,
  CardContent
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Label from 'src/components/Label';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';

const Span = styled.span`

font-size: 33px!important;
`


  


const DialogWrapper = experimentalStyled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
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

const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
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



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const theme = {
    spacing: 8,
  }

  
  const AvatarWrapper = experimentalStyled(Box)(
    ({ theme }) => `
  
      position: relative;
  
      .MuiAvatar-root {
        width: ${theme.spacing(16)};
        height: ${theme.spacing(16)};
       
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
    modified: {
    height: '50px!important',
    width: '177px!important'
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
marginLeft: '18px!important',
marginTop: '0px!important'
        
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
    boxIcon:{
      /* Rectangle 67 */


height: '88px',

left: '0px',
borderRadius: '6px',


    },
    iconoStyle:{
      fontSize: '42px!important',
      marginLeft: '24px!important'

    },
    headerTap:{
      backgroundColor: '#F6F8FB!important',
      boxShadow: '0px 0px!important',
    
      
    },
    contenidoTap:{
      marginBottom: '40px!important'
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
  resetPadding: {
    padding: '0px!important'
  },
  titleInformacion: {
    /* Mail: Teléfono: Dirección: */
  display: 'flex!important',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '150%',
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
  color: 'black'
  
  
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
    lineHeight: '23px',
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
  ver:{
    color: '#0061F4!important'
  },
  editar:{
    color: '#6B64F8!important'
 
  },
  eliminar:{
 color: '#FF1A43!important'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '30px',
    zIndex: '100!important',
    width: '50%'

  },
  cancelar: {
    marginLeft: '20px!important'
  },
  btnEliminar:{
    cursor: 'pointer!important'
  },
  imprimir:{
    opacity: '0.8',
    cursor: 'pointer!important',
    "&:hover": {
      opacity: '0.8',
    }
  
  }
  }));

  const Input = experimentalStyled('input')({
    display: 'none'
  });
  
  

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


const Espacio = () => {
    const classes = useStyles();
    const {user} = useAuth()
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const token = window.localStorage.getItem('accessToken');
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [eliminarId,setEliminarid] = useState()
    const [openModificar,setOpenModificar] = useState(false)
    const [urlImage,setUrlImage] = useState(null)

    const [nombre,setNombre] = useState(null)
    const [nuevoNombre,setNuevoNombre] = useState('')
    const isMountedRef = useRefMounted();
    const [deportes,setDeportes] = useState(null)
    const [value, setValue] = React.useState(0);
    const [espacio,setEspacio] = useState(null)
    const [deportesxclub,setDeportesXClub] = useState([])
    const [valuesDeportes,setValuesDeportes] = useState([])
    const [seleccionado,setSeleccionado] = useState(null)
    const [actualizar,setActualizar] = useState(false)
    const [reservas,setReservas]  = useState([])
    const [loadingImage,setLoadingImage] = useState(false)
    const [values,setValues] = useState({
      


        nombre: '',
        descripcion:  '',
        maxReservasDia: '',
        maxReservasSem: '',
        maxReservasAno: '',
        horasPrevia: '',
        image: '',
        tiempoDeAnticipacion: '',
        tiempoDeCancelacion: '',
        estadoEspacio: ''
    
    
    })


    // @ts-ignore
    const { userId } = useParams();





    const { t } = useTranslation();
  
    const [currentTab, setCurrentTab] = useState('edit_profile');
  
    const tabs = [
      { value: 'edit_profile', label: t('Ingresos') },
      { value: 'activity', label: t('Turnos') }

  ];
  
    const handleTabsChange = (event, value) => {
      setCurrentTab(value);
    };




    const fileResizeAndUpload = async(event) => {

      setLoadingImage(true)
      let fileInput = false;
      if (event.target.files[0]) {
          fileInput = true;
      }
      if (fileInput) {
          Resizer.imageFileResizer(
              event.target.files[0],
              300,
              300,
              'JPEG',
              100,
              0,
              (uri) => {
                  // console.log(uri);
                  axios
                      .post(
                          `https://secure-temple-46604.herokuapp.com/api/uploadimages`,
                          { image: uri }
                      )
                      .then((response) => {
                          console.log('CLOUDINARY UPLOAD', response);
                      //    setValues({ ...values, images: [...images, response.data] });
                    



                      setUrlImage(response.data.url)

                      console.log(response.data.url)


                      const obj =  {
                        image: response.data.url
                      }


                      return fetch(`https://secure-temple-46604.herokuapp.com/api/update-imagen/club/${userId}`,{
                        method: "PUT",
                        headers: {
                            Accept: 'application/json',
                            "Content-type": "application/json"

                              },
                            body: JSON.stringify(obj)
                        })
                        .then(response => {

                          setLoadingImage(false)

                          if(response.status !== 200 ){
                            enqueueSnackbar(t('error al modificar la imagen!'), {
                              variant: 'error',
                              anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right'
                              },
                              TransitionComponent: Zoom
                            });
                          }else{
                    
                            setActualizar(true)
                            enqueueSnackbar(t('imagen modificada!'), {
                              variant: 'success',
                              anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right'
                              },
                              TransitionComponent: Zoom
                            });
                          }


                        })
                        .catch(err => {
                            console.log(err)
                            
                            enqueueSnackbar(t(err.message), {
                              variant: 'error',
                              anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right'
                              },
                              TransitionComponent: Zoom
                            });
                        })




                      




//                return fetch(`https://secure-temple-46604.herokuapp.com/api/update-imagen/club/${id}`,{




                  


                    })
                      .catch((error) => {
                          console.log('CLOUDINARY UPLOAD FAILED', error);
                          enqueueSnackbar(t(error.message), {
                            variant: 'error',
                            anchorOrigin: {
                              vertical: 'top',
                              horizontal: 'right'
                            },
                            TransitionComponent: Zoom
                          });
                      });
              },
              'base64'
          );
      }



   


  };




    const llamadaEspacio = async(param) => {
      const result = await getEspacioById(param,token)
      console.log('espacioo',result)

      if(result){
        setNombre(result.nombre)
      }
      setEspacio(result)
    }

    const llamadaDisciplinas = async(param1,param2) => {
      const result = await getEspacioByDisciplinaXClub(param1,param2,token)
      console.log('aca llego deportes',result)
      setDeportes(result)
    }
    

    const llamadaDisciplinaXClub = async(param) => {
      const result = await getDisciplinaXClub(param,token)
      console.log('resultado de disciplina x club',result)
      setDeportesXClub(result)
    }

    const llamadaReservasByEspacio = async(param) => {
      const result =  await getReservasByEspacio(param,token)
      console.log('reservas filtradas por espacio',result)
      setReservas(result)
    }


    //agregarDisciplina
    const postDisciplina = async(param1,param2) => {
      const result = await agregarDisciplina(param1,param2,token)
     return result
    }


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    useMemo(()=> {
      


      if(espacio !== null) {

        setValues({
          ...values,

        nombre: upperFirts(espacio.nombre),
        descripcion: espacio.descripcion,
        maxReservasDia: espacio.maxReservasDia,
        maxReservasSem: espacio.maxReservasSem,
        maxReservasAno: espacio.maxReservasAno,
        horasPrevia: espacio.horasPrevia,
        image: espacio.image,
        tiempoDeAnticipacion: espacio.tiempoDeAnticipacion,
        tiempoDeCancelacion: espacio.tiempoDeCancelacion,
        
        })

      }

     

    },[espacio])
  
    useEffect(() => {
      

      if(userId && user){
        llamadaEspacio(userId)
        llamadaDisciplinas(userId,user.clubId)
        llamadaDisciplinaXClub(user.clubId)
        llamadaReservasByEspacio(userId)
      }

 

    }, []);
  


    useEffect(()=>{
      if(actualizar){
        llamadaDisciplinas(userId,user.clubId)
        llamadaEspacio(userId)
        setActualizar(false)

      }


    },[actualizar])
  

    useEffect(()=>{
      
      llamadaEspacio(userId)

    },[openModificar])




    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const agregar =  async() => {

    
    if(seleccionado !== null){

    

        const result = await postDisciplina(userId,seleccionado,token)
        console.log('resultado del post',result)

        if(result && result.message){
          handleClose()
          setActualizar(true)
          enqueueSnackbar(t(result.message), {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            TransitionComponent: Zoom
          });
        }

        if(result && result.error){
          handleClose()

          enqueueSnackbar(t(result.error), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
        }
      

      setActualizar(false)

  
       

    }

  }


  const imageDeporte = (param) => {
    let result = iconos.find(val => val.nombre === param)

    return( 
    <img style={{ width: 30}} src={result.icono} />
    )
   }


   const handleChangeNombre = (e) => {
    setNuevoNombre(e.target.value);
  }

   const handleConfirmDelete = (param) => {

    setEliminarid(param)
    console.log('eliminado',param)
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };


  const handleDeleteCompleted =  async() => {
    setOpenConfirmDelete(false);

 

      //console.log('eliminar',eliminarId)

     const result =  await eliminarDisciplinaxEspacio(eliminarId,token)


     if(result.error){

      enqueueSnackbar(t(error.message), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

     }else{

      setActualizar(true)

      enqueueSnackbar(t(result.message), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
    }

  //    console.log('eliminar',eliminarId)

    
    
    


  setActualizar(false)

  };





  const handleOpenModificar = (param) => {
    console.log(param)
  setOpenModificar(true);
  };

  const handleCloseModificar = () => {
    setOpenModificar(false);
    
  };

  const agregarNombre = async() => {
    console.log('nuevo nombree',nuevoNombre)

    setOpenModificar(false)


    let  obj = {
      nombre: nuevoNombre
    }

    const result =  await modificarNombreEspacio(userId,obj,token)

    if(result.error){

      enqueueSnackbar(t(error.message), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

    }else{

      setActualizar(true)
      enqueueSnackbar(t(result.message), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

    }



  }



  const descargarImage = () => {
    saveAs('https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=www.google.com&choe=UTF-8', 'image.jpg') // Put your image url here.

  } 


  console.log('nombree',nombre)

    return ( 
        <div className={classes.container}>


<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModificar}
        onClose={handleCloseModificar}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModificar}>
          <div className={classes.paper}>

          <TextField id="outlined-basic" defaultValue={nombre} onChange={handleChangeNombre} fullWidth label="Nombre"   variant="outlined" />
  
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={5}>
       <Button variant="contained" color="primary" onClick={agregarNombre} disabled={!nuevoNombre ? true : false} >
  Modificar nombre
</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={()=>setOpenModificar(false)}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>

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
            {t('¿Está seguro de que desea eliminar permanentemente espacio?')}
            ?
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{ mx: 1 }}
              onClick={closeConfirmDelete}
            >
              {t('Cancel')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{ mx: 1, px: 3 }}
              variant="contained"
            >
              {t('Delete')}
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
          <div className={classes.paper}>

          <InputLabel id="demo-simple-select-outlined-label">Disciplinas</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="pais"
          label="Pais"
          onChange={e => setSeleccionado(e.target.value)}

        >
          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {deportesxclub.length  && deportesxclub.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.disciplina && val.disciplina.nombre}</MenuItem> 
                ))}

        </Select>
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={5}>
       <Button variant="contained" color="primary" onClick={agregar} disabled={seleccionado === null ? true : false }>
  Agregar deporte
</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={handleClose}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>

            <Grid
  container
  direction="row"
  justifyContent="space-between"

  alignItems="flex-start"
>

  <Box className={classes.boxIcon} display="flex" xs={6}>



  <AvatarWrapper >



{loadingImage === true  ?
<Box sx={{width: 73}}> 
  <CircularProgress />
  </Box>
:

<Avatar
className="iconEspacioSingle"
  variant="rounded"

  src={ urlImage !== null ? urlImage  : values.image}

/>
}
                    
                      

                      <ButtonUploadWrapper>
                      <Input
                            accept="image/*"
                            id="icon-button-file"
                            name="icon-button-file"
                            type="file"
                            onChange={fileResizeAndUpload}

                      
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton component="span" color="primary">
                          <CloudUploadTwoToneIcon />
                        </IconButton>
                      </label>
                    </ButtonUploadWrapper>
                         
                      </AvatarWrapper>
     <Box display="flex"  >
<p className={classes.titulo}>{values.nombre}</p>


<EditTwoToneIcon className="iconEspacioEdit"  onClick={handleOpenModificar}/>

</Box>             

  </Box>

  <Box display="flex"    >
  <Button variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
      </Button>

      </Box>
    </Grid>

    <Box m={3} />
    <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  spacing={3}
  mt={3}
>
<Grid item xs={4}>
<Card className="cardLayout">
      <CardHeader
        title={t('Codigo QR de ingreso')}
        subheader={'10 saved addresses'}
        action={
          <PrintIcon className={classes.imprimir} onClick={()=>descargarImage()} className="iconPrint"/>
        }
      />
      <Divider />
      <CardContent className="cardContentEspacio">
        <img
        className="cardContentEspacio"
        className="qrEspacio" src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=www.google.com&choe=UTF-8"/>
      </CardContent>
  </Card>
</Grid>
<Grid item xs={8}>
<Card  className="cardLayout">
      <CardHeader
        title={t('Deportes')}
     
        action={
          <Button 
          onClick={handleOpen}
          startIcon={<AddTwoToneIcon />}
          variant="outlined" size="small">
          {t('Agregar un deporte')}
        </Button>
        }
      />
      <Divider />
      <CardContent>
      <CardContent 
     
     >
      
      <Grid 
      
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    
      xs={12}>

    
   
       { deportes !== null && deportes.length > 0  && deportes.map((val, i) => (
         <>
      <Grid
       xs={4}
       display="flex"
       >
         <Box  display="flex">
          {val && val.disciplinaxclub && val.disciplinaxclub.disciplina && imageDeporte(val.disciplinaxclub.disciplina.icono)}               
  

         </Box>
         <Box  >
             <p className={classes.titleSports}>{ val.disciplinaxclub !== null && val.disciplinaxclub.disciplina !== null &&  val.disciplinaxclub.disciplina.nombre}</p>
             <p className={classes.subTitleSports}>{/*Primera A > Arquero*/}</p>
             <p className={classes.subTitleSports}>{/*Segunda C > x*/}</p>

         </Box>
         < DeleteIcon color="error" className={classes.btnEliminar} 
           onClick={() => handleConfirmDelete(val.id)}
                                 
         />

         </Grid>
         </>

))}

       
    
  


     </Grid>

   </CardContent>
      </CardContent>
  </Card>
</Grid>


</Grid>

<Box mb={3} mt={3}>
<TurnoHeader/>
</Box>
<Box />



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
            {currentTab === 'activity' && <ActivityTab reservas={reservas} />}
            {currentTab === 'edit_profile' && <EditProfileTab espacio={userId} />}
            {currentTab === 'notifications' && <NotificationsTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
      
</div>
      </div>
     );
}
 
export default Espacio;
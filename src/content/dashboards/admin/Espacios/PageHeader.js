import { useState ,useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import wait from 'src/utils/wait';
import useAuth from 'src/hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import RegisterWizard from './RegisterWizard'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {iconosList} from  './opciones'
import Resizer from 'react-image-file-resizer';

import {crearDeporte,getDeportesXClub} from 'src/api/deportes'
//getDisciplinaXClub
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
  Container
} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { useSnackbar } from 'notistack';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import TextFieldd from '@material-ui/core/TextField';
import {getDeportes} from 'src/api/deportes'
import axios  from 'axios'



const top100Films = [
  { title: 'Delantero', year: 1994 },
  { title: 'Defensor', year: 1972 },
  { title: 'Arquero', year: 1974 }
 
];

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
    width: '100%!important'
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
    field: {
      width: '100%!important'
    },
    textField:{
      fontWeight: '700',
      fontSize: '14px',
      Align: 'Right',
      display: 'flex',
      justifyContent: 'center'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '100%!important',
    },
    formControlSub: {
      margin: theme.spacing(1),
      minWidth: '100px!important',
    },
    cajaIcono:{
      display: 'flex!important',
      justifyContent: 'space-between!important'
      
    }
  }));

function PageHeader({actualizarChange}) {
    const classes = useStyles();

    const token = window.localStorage.getItem('accessToken');


  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const { user } = useAuth();
  console.log('acaaa header',user)


  const [deporte,setDeporte] = useState(null)
  const [deportes,setDeportes] = useState(null)
  const [nombre,setNombre] = useState(null)
  const [icono,setIcono] = useState(null)
  const [visibilidad,setVisibilidad] = useState(null)
  const [urlImage,setUrlImage] = useState(null)

  const [publicProfile, setPublicProfile] = useState({
    public: true
  });



  console.log('los valores',visibilidad,nombre,deportes)


  const fileResizeAndUpload = (event) => {
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
                  })
                    .catch((error) => {
                        console.log('CLOUDINARY UPLOAD FAILED', error);
                    });
            },
            'base64'
        );
    }
};

  const llamadaDeportes = async(param) => {
    const result  = await getDeportesXClub(param,token) 
  console.log('resultado de deportes por club',result)
  setDeportes(result)
 }
  

  useEffect(()=>{

    if(user){
      llamadaDeportes(user.clubId)
    }

  },[])



  const handlePublicProfile = (event) => {
    setPublicProfile({
      ...publicProfile,
      [event.target.name]: event.target.checked
    });
  };

  const handleCreateUserOpen = () => {
    setOpen(true);
  };

  const handleCreateUserClose = () => {
    setOpen(false);
  };

  const handleCreateUserSuccess = () => {
    
    enqueueSnackbar(t('Deporte creado'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };


  const crear = async()=> {

   


    try{

      const val = {
        nombre: nombre,
      descripcion: "",
      icono: icono,
      }
     
      console.log(val)
      await crearDeporte(val,token)


      enqueueSnackbar(t('Deporte creado'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
   
      setOpen(false);


        }catch(err){

          console.log('resupuesta',err)

          enqueueSnackbar(t('The user account was created successfully'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            TransitionComponent: Zoom
          });
       
          setOpen(false);
        }


  }
  
  const crearEspacio = async() => {
    handleCreateUserClose()
    let val = {
      nombre: nombre,
      image: urlImage,
      descripcion: null,
      clubId: user.clubId,
      tiempoDeAnticipacion: null,
      tiempoDeCancelacion: null,
      horasPrevia: null,
      maxReservasAno:null,
      maxReservasDia:null,
      maxReservasSem: null,
      maxReservasMes: null,
      deporte: deporte
    }


    console.log(val)
    
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    myHeaders.append('Authorization','Bearer ' + token)
    var formdata = new FormData();

    let parseVal = JSON.stringify(val)
                  //A LA HORA DE AGREGAR UNA IMAGEN SETEAR
    formdata.set("imagen",null);


                  
   formdata.set("data",parseVal);
                  
                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                  };
                  
    const result = await fetch("https://secure-temple-46604.herokuapp.com/api/espacio", requestOptions)
    const resultFinal = await result.json()
    console.log(resultFinal)
   
    actualizarChange(true)
    enqueueSnackbar(t('Espacio creado creado'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
                     

  }

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
      <Grid
   container
   direction="row"
   justify="space-between"
   alignItems="center"
  spacing={5}
 className={classes.margin}
>
<Grid item lg={9} xs={12}>
<Typography variant="h1"> Espacios </Typography>
<div className={classes.texto}>{'Todos los aspectos relacionados con los usuarios de la aplicación se pueden gestionar desde esta página.'}</div>
    </Grid>
    <Grid item lg={3} xs={12}  >
        <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        onClick={handleCreateUserOpen}
      >
        Crear un espacio
      </Button>
      </Grid>
      
      </Grid>
      </Grid>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateUserClose}
   
      >
       
    
            <>
             
             <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateUserClose}
      >
        <DialogTitle sx={{ p: 3 }} disableTypography>
          <Typography variant="h4" gutterBottom>
            {t('Crear un nuevo espacio')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'Utilice esta ventana de diálogo para agregar un nuevo espacio'
            )}
          </Typography>
        </DialogTitle>
   
            <form >
              <DialogContent dividers sx={{ p: 9 }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} display="flex">
                    <Grid xs={3}
                className="avatarEspacio"

                    >
                    <Grid xs={6}
                    className="avatarEspacio"
                    >
                    <AvatarWrapper
                    mt={3}
                    >
                        <Avatar
                          variant="rounded"
                          src={urlImage === null? "" : urlImage}
                     
                        />
                        <ButtonUploadWrapper>
                          <Input
                            accept="image/*"
                            id="icon-button-file"
                            name="icon-button-file"
                            type="file"
                            onChange={fileResizeAndUpload}

                          />
                          <label htmlFor="icon-button-file"
                      
                          >
                            <IconButton component="span" color="primary">
                              <CloudUploadTwoToneIcon />
                            </IconButton>
                          </label>
                        </ButtonUploadWrapper>

                      </AvatarWrapper>

                    </Grid>

                    {urlImage === null ?
                     <Typography mt={2} color="error">Agregar una imagen</Typography>
                      :
                      null
                    
                    }
                  
                    </Grid>
                    <Grid xs={10} p={3}>
                    <Box>
                    <TextField 
                    
                    onChange={ (event) => setNombre(event.target.value) } 

                    fullWidth id="outlined-search" label="Nombre del espacio" placeholder="Nombre del espacio..." type="search" variant="outlined" />
                    </Box>
                    <Box mt={2}>
 



                    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Vincular a un deporte</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="pais"
          label="Vincular a un deporte"
          onChange={ event => setDeporte(event.target.value) } 

  
        >
          <MenuItem value="">
            <em>Elegir un deporte</em>
          </MenuItem>

          {deportes && deportes.length && deportes.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.disciplina.nombre}</MenuItem> 
                ))}

             
        </Select>
      </FormControl>



                 
                  </Box>
                    </Grid>

                    </Grid>
                    <Grid xs={12}  
                    px={3}
                    >
                 
                  
                    </Grid>
                    <Grid item lg={12} xs={12}  px={3} >
        {/* <Button
        
        variant="outlined"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
      >
     Agregar otro deporte
      </Button> */}
      </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
              <Button
                variant="contained"
                onClick={crearEspacio}
               

                disabled={ nombre !== null  && deporte !== null && urlImage !== null ? false : true }
               
               >

                  {t('Crear espacio')}
                </Button>

                <Button variant="outlined" color="secondary" onClick={handleCreateUserClose}>
                  {t('Cancelar')}
                </Button>
             
              </DialogActions>
            </form>
       
      </Dialog>
            
           </>
       
      </Dialog>
    </>
  );
}

export default PageHeader;

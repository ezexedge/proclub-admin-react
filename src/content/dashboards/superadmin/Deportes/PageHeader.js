import { useState } from 'react';
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
import {crearDeporte} from 'src/api/deportes'
import { iconos } from 'src/iconos';
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
  Container,
  ImageList
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
      minWidth: '100%!important',
    },
    cajaIcono:{
      display: 'flex!important',
      justifyContent: 'space-between!important'
      
    }
  }));

function PageHeader({onchange}) {
    const classes = useStyles();
    const token = window.localStorage.getItem('accessToken');

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const { user } = useAuth();

  const [bloquearBtn,setBloquearBtn] = useState(false)
  const [nombre,setNombre] = useState('')
  const [icono,setIcono] = useState('')
  const [publicProfile, setPublicProfile] = useState({
    public: true
  });

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

   
      setBloquearBtn(true)

   

      const val = {
        nombre: nombre,
      descripcion: "",
      icono: icono,
      }
     
      console.log(val)
      const result = await crearDeporte(val,token)


        if(result.error){

          console.log('resupuesta',err)

          enqueueSnackbar(t('The user account was created successfully'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            TransitionComponent: Zoom
          });
       
        }else{

          onchange(true)
          enqueueSnackbar(t('Deporte creado'), {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            TransitionComponent: Zoom
          });
       


        }
    
      setOpen(false);



     
        

        setBloquearBtn(false)
  }


  const imageDeporte = (param) => {
    let result = iconos.find(val => val.nombre === param)
    if(result){

  return( 
    <img style={{ maxWidth: 30,marginLeft: 5 }} src={result.icono} />
    )
    }
  
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
<Typography variant="h1"> Deportes </Typography>
<div className={classes.texto}>{'Todos los aspectos relacionados con los deportes de la aplicación se pueden gestionar desde esta página.'}</div>
    </Grid>
    <Grid item lg={3} xs={12}  >
        <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        onClick={handleCreateUserOpen}
      >
        Agregar un Deporte
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
       
        <Formik
          initialValues={{
            email: '',
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required(t('The username field is required')),
            first_name: Yup.string()
              .max(255)
              .required(t('The first name field is required')),
            last_name: Yup.string()
              .max(255)
              .required(t('The last name field is required')),
            email: Yup.string()
              .email(t('The email provided should be a valid email address'))
              .max(255)
              .required(t('The email field is required')),
            password: Yup.string()
              .max(255)
              .required(t('The password field is required'))
          })}
          onSubmit={async (
            values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateUserSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <>
             
             <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateUserClose}
      >
        <DialogTitle sx={{ p: 3 }} disableTypography>
          <Typography variant="h4" gutterBottom>
            {t('Crear un nuevo deporte')}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            email: '',
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required(t('The username field is required')),
            first_name: Yup.string()
              .max(255)
              .required(t('The first name field is required')),
            last_name: Yup.string()
              .max(255)
              .required(t('The last name field is required')),
            email: Yup.string()
              .email(t('The email provided should be a valid email address'))
              .max(255)
              .required(t('The email field is required')),
            password: Yup.string()
              .max(255)
              .required(t('The password field is required'))
          })}
          onSubmit={async (
            values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateUserSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent dividers sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={12}>
                    <Grid container spacing={3}>
        <Container sx={{ my: 4 }} maxWidth="md">  
        <Grid 
  md={12}
  container
  direction="row"
  justify="space-around"
  alignItems="center"
>
          
        <Grid  xs={12} md={3}>
            <p className={classes.textField}>Nombre del deporte</p>

           


          </Grid>
          <Grid  xs={12} md={9} >
          <TextField onChange={event => setNombre(event.target.value)}  id="outlined-basic" className={classes.field} label="Nombre del deporte" placeholder="Escribe el nombre de deporte aqui..." variant="outlined" />

            </Grid>

            <Grid  xs={12} md={3} mt={5}>
            <p className={classes.textField}>Seleccioná un icono</p>
          </Grid>
          <Grid  xs={12} md={5} mt={5} >
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Selecciona un icono</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
            placeholder="Selecciona un icono"
          label="Selecciona un icono"
          onChange={event => setIcono(event.target.value)}
        >
             <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {iconos.length && iconos.map((val,i)=>(
                  <MenuItem value={val.nombre} index={i}   className={classes.cajaIcono}>
                 
                  {val.nombre}     
                 

                  <img style={{ maxWidth: 20,marginLeft: 5 }} src={val.icono} />

              
              
               </MenuItem> 
                ))}
        </Select>
      </FormControl>
            </Grid>
       
  </Grid>
        </Container>

                    </Grid>
                  </Grid>
               
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
              <Button
                  type="submit"
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={bloquearBtn == false &&  icono !== '' &&  nombre !== ''  ? false : true}
                  variant="contained"
                  onClick={() => crear()}
                >
                  {t('Crear deporte')}
                </Button>

                <Button variant="outlined" color="secondary" onClick={handleCreateUserClose}>
                  {t('Cancelar')}
                </Button>
             
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
            
           </>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;

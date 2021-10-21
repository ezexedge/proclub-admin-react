import { useState, useEffect } from 'react';
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
import { iconosList } from './opciones'
import { getDeportesXClub, getDeportes } from 'src/api/deportes'
import Chip from '@material-ui/core/Chip';


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
import { crearDivisionPosicion } from 'src/api/deportes'



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
  title: {
    color: '#223354!important',
    fontSize: '30px!important',
    fontWeight: '700!important',


  },
  card: {
    marginTop: '41px!important',
    background: '#FFFFFF',
    boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
    border: '6px'

  },
  dialog: {
    backgroundColor: 'red!important'
  },
  field: {
    width: '100%!important'
  },
  textField: {
    fontWeight: '700',
    fontSize: '14px',
    Align: 'Right',
    display: 'flex',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '679px!important',
  },
  formControlSub: {
    margin: theme.spacing(1),
    minWidth: '100px!important',
  },
  cajaIcono: {
    display: 'flex!important',
    justifyContent: 'space-between!important'

  }
}));

function PageHeader(props) {
  const classes = useStyles();

  const token = window.localStorage.getItem('accessToken');


  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuth();

  console.log('aqui usuario', user)

  const [deportesSuper, setDeportessuper] = useState(null)
  const [deportes, setDeportes] = useState(null)
  const [nombre, setNombre] = useState()
  const [icono, setIcono] = useState()
  const [disciplinaxclub, setDisciplinaxclub] = useState(null)
  const [posiciones, setPosiciones] = useState([])
  const [publicProfile, setPublicProfile] = useState({
    public: true
  });




  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [

  ]

  console.log('aca posiciones', disciplinaxclub)


  const llamarDeportes = async (param) => {
    const result = await getDeportesXClub(param, token)
    //console.log('////deportes',result)
    setDeportes(result)
  }

  const llamarDeportesSuper = async () => {
    const result = await getDeportes(token)
    console.log('////deportes superadmun', result)
    setDeportessuper(result)
  }


  useEffect(() => {

    llamarDeportesSuper()
    llamarDeportes(user.clubId)

  }, [])
  const handlePublicProfile = (event) => {
    setPublicProfile({
      ...publicProfile,
      [event.target.name]: event.target.checked
    });
  };



  const crear = async () => {




    try {


      const obj = {
        posiciones: posiciones,
        nombre: nombre
      }



      const result = await crearDivisionPosicion(user.clubId, disciplinaxclub, obj, token)
      console.log(result)

      if (result && result.error) {
        enqueueSnackbar(t(result.error), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          TransitionComponent: Zoom
        });

        setOpen(false);
      } else {


        props.onChangeLoading(true)

        enqueueSnackbar(t('Deporte creado'), {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          TransitionComponent: Zoom
        });

        setOpen(false);
      }



    } catch (err) {

      console.log('resupuesta', err)

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
                    {t('Añadir un nuevo deporte')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t(
                      'Utilice esta ventana de diálogo para agregar un nuevo deporte'
                    )}
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

                                <Grid container
                                  justfy="center"

                                  spacing={3}>
                                  <Grid item xs={12} >
                                    <FormControl variant="outlined" fullWidth >
                                      <InputLabel
                                        fullWidth
                                        id="demo-simple-select-outlined-label">Seleccioná un deporte</InputLabel>
                                      <Select
                                        fullWidth
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"

                                        label="Seleccioná un deporte"
                                        name="sexo"
                                        onChange={e => setDisciplinaxclub(e.target.value)}

                                      >
                                        {deportesSuper && deportesSuper.map((val, i) => (

                                          <MenuItem value={val.id}   >{val.nombre}</MenuItem>

                                        ))}
                                      </Select>
                                    </FormControl>
                                  </Grid>
                                
               


                                  <Grid item lg={12} xs={12}  >
                                    {/* <Button
        
        variant="outlined"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
      >
       Agregar otra división
      </Button> */}
                                  </Grid>

                                </Grid>


                              </Container>

                            </Grid>
                          </Grid>

                        </Grid>
                      </DialogContent>
                      <DialogActions sx={{ p: 3 }}>
                        <Button
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

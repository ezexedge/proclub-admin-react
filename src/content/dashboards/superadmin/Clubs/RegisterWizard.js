import { useState, Children ,useEffect } from 'react';
import {
  Typography,
  Container,
  Button,
  Card,
  CircularProgress,
  Grid,
  Box,
  Step,
  StepLabel,
  Stepper,
  Link,
  Collapse,
  Alert,
  Avatar,
  IconButton
} from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import ColorPicker from 'material-ui-color-picker'
import  { ChromePicker } from 'react-color'
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import Select from '@material-ui/core/Select';

import ContentWrapper from 'src/components/ContentWrapper';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/LogoSign';
import {paises,provincias} from 'src/api/datos'
import {crearClub} from 'src/api/club'
import axios  from 'axios'
import Resizer from 'react-image-file-resizer';
import { formatDuration } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%!important',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Input = experimentalStyled('input')({
  display: 'none'
});


const MainContent = experimentalStyled(Box)(
  () => `
    height: 100%;
    overflow: auto;
    flex: 1;
`
);

const BoxActions = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]}
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


const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function RegisterWizard() {
    const classes = useStyles();

  const { t } = useTranslation();
  const [openAlert, setOpenAlert] = useState(true);
  const [pais,setPais] = useState([])
  const [urlImage,setUrlImage] = useState(null)
  const [provincia,setProvincia] = useState([])
  const [valorPais,setValorPais] = useState()
  const [valorProvincia,setValorProvincia] = useState()
const [color,setColor] = useState()

const [colorPrimario,setColorPrimario] = useState('#fff')
const [colorSecundario,setColorSecundario] = useState('#fff')
const [colorTextoPrimario,setColorTextoPrimario] = useState('#fff')
const [colorTextoSecundario,setColorTextoSecundario] = useState('#fff')


  useEffect(()=>{

    const llamadaPais = async() => {
      const resultado =  await paises()
      console.log(resultado)
      setPais(resultado)
    }
    const llamadaProvincias = async() => {
      const resultado =  await provincias()
      console.log(resultado)
      setProvincia(resultado)
    }

    llamadaPais()
    llamadaProvincias()

  },[])


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




  return (
    <ContentWrapper title="Agregar club">
      <MainContent>
        <Container sx={{ my: 4 }} maxWidth="md">
      
        
            <Box px={4}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                {t('Crear un nuevo club')}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 3 }}
              >
                {t('Coompleta la informacion basica del club')}
              </Typography>
            </Box>

            <FormikStepper
              initialValues={{
                nombre: '',
                 nombre_visible: '',
                terms: true,
                descripcion: '',
                cuit:'',
                password: '',
                email: '',
                telefono: '',
                direccion: '',
                numero: '',
                pais: '',
                provincia: '',
                cp: '',
                facebook:'',
                twitter:'',
                instagram:'',
                apellido_responsable:'',
                nombre_responsable: '',
                email_responsable: '',
                telefono_responsable:'',
                localidad: ''
                
              }}
              onSubmit={async (values) => {
              
                console.log('values', values);

                console.log('url de imagenes',urlImage)



                  try{

                const val = {
                  nombre: values.nombre,
                  colorPrimario: colorPrimario.hex,
                  colorSecundario: colorSecundario.hex,
                  colorTextoPrimario: colorTextoPrimario.hex,
                  colorTextoSecundario: colorTextoSecundario.hex,
                  descripcion: values.descripcion,
                  email: values.email,
                  telefono: values.telefono,
                  cuit: values.cuit,
                  instagram: values.instagram,
                  facebook: values.facebook,
                  twitter: values.twitter,
                  cp: values.cp,
                  logo: urlImage,
                  direccion: { 
                  calle: values.direccion,
                  
                  numero: values.numero,
                  provincia: valorProvincia,
                  pais: valorPais,
                  localidad: values.localidad
                  },
                          responsable: { 
                          apellido: values.apellido_responsable,
                          nombre: values.nombre_responsable,
                          telefono: values.telefono_responsable,
                          correo: values.email_responsable
                          }
                  }


                  console.log('respuesta final ',val)

                  var myHeaders = new Headers();
                  myHeaders.append("Accept", "application/json");
                  
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
                  
                 const result = await fetch("https://secure-temple-46604.herokuapp.com/api/clubs", requestOptions)
                const resultFinal = await result.json()
                 console.log(resultFinal)

                       
                        
                  

                  }catch(err){

                    console.log('resupuesta',err)
                  }
                  



              }}
            >
                 
              <FormikStep
                validationSchema={Yup.object().shape({
                
                  nombre: Yup.string()
                    .max(255)
                    .required(t('El nombre es obligatorio')),
                  descripcion: Yup.string()
                    .max(255)
                    .required(t('La descripcion es obligatoria')),
                  nombre_visible: Yup.string()
                    .max(255)
                    .required(t('El nombre visible es obligatorio')),
                  cuit: Yup.number()
                    .min(20)
                    .integer()
                    .required(t('El CUIT es obligatorio')),
                  password: Yup.string()
                    .min(8)
                    .max(255)
                    .required(t('The password field is required')),
                
                })}
                label={t('Informacion del club')}
              >
                <Box p={4}>
               <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="nombre"
                        component={TextField}
                        label={t('Nombre del club')}
                        placeholder={t('Nombre del club...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="nombre_visible"
                        component={TextField}
                        label={t('Nombre visible')}
                        placeholder={t('Nombre visible...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field
                        fullWidth
                        name="descripcion"
                        component={TextField}
                        label={t('Breve descripcion')}
                        placeholder={t('Breve descripcion...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} />

                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="cuit"
                        type="number"
                        component={TextField}
                        label={t('Cuit')}
                        placeholder={t('CUIT...')}

                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="password"
                        component={TextField}
                        label={t('Confirm password')}
                        placeholder={t('El password es obligatorio...')}
                      />
                    </Grid>
                 
                    <Grid item xs={12}>
                     
                      <Field
                        name="terms"
                        type="checkbox"
                        component={CheckboxWithLabel}
                        Label={{
                          label: (
                            <Typography variant="body2">
                              {t('I accept the')}{' '}
                              <Link component="a" href="#">
                                {t('terms and conditions')}
                              </Link>
                              .
                            </Typography>
                          )
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </FormikStep>
              <FormikStep
                validationSchema={Yup.object().shape({
                  direccion: Yup.string()
                    .max(255)
                    .required(t('La direccion obligatoria')),
                    numero: Yup.number()
                    .integer()
                    .min(20)
                    .required(t('El numero es obligatorio')),
                    telefono: Yup.number()
                    .integer()
                    .min(20)
                    .required(t('El telefono es obligatorio')),
                    email: Yup.string()
                    .email(
                      t('el email es obligatorio')
                    )
                    .max(255)
                    .required(t('The email field is required')),
                })}
                label={t('Datos de contacto')}
              >
                <Box p={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                      <Field
                        fullWidth
                        name="direccion"
                        component={TextField}
                        label={t('Direccion')}

                        placeholder={t('Direccion...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Field
                        fullWidth
                        name="numero"
                        type="number"
                        component={TextField}
                        label={t('Numero')}

                        placeholder={t('Numero...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pais</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="pais"
          label="Pais"
          
          onChange={event => setValorPais( event.target.value )}

        >
          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {pais.length && pais.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.nombre}</MenuItem> 
                ))}

        </Select>
      </FormControl>
                    </Grid>
                       <Grid item xs={12} md={3}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Provincia</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="provincia"
          label="Provincias"

          onChange={event => setValorProvincia(event.target.value)}
        >
                <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {provincia.length && provincia.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.nombre}</MenuItem> 
                ))}
        </Select>
      </FormControl>
                    </Grid>

            

                         <Grid item xs={12} md={3}>
                         <Field
                        fullWidth
                        name="localidad"
                        type="text"
                        component={TextField}
                        label={t('Localidad')}

                        placeholder={t('Localidad...')}
                      />
                    </Grid>

                           <Grid item xs={12} md={3}>
                           <Field
                        fullWidth
                        name="cp"
                        type="text"
                        component={TextField}
                        label={t('CP')}

                        placeholder={t('CP...')}
                      />


                    </Grid>
                 <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="telefono"
                        type="number"
                        component={TextField}
                        label={t('Telefono')}

                        placeholder={t('Telefono...')}
                      />
                    </Grid>
         <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="email"
                        type="email"
                        component={TextField}
                        label={t('Mail')}

                        placeholder={t('Mail...')}
                      />
                    </Grid>
                       <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name="facebook"
                        type="text"
                        component={TextField}
                        label={t('Facebook')}

                        placeholder={t('@Facebook...')}
                      />
                      </Grid>
                         <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name="instagram"
                        type="text"
                        component={TextField}
                        label={t('Instagram')}

                        placeholder={t('@Instagram...')}
                      />
                    </Grid>
                       <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name="twitter"
                        type="text"
                        component={TextField}
                        label={t('Twitter')}

                        placeholder={t('@Twitter...')}
                      />
                    </Grid>

                    
                  </Grid>
                </Box>
              </FormikStep>
              <FormikStep
                validationSchema={Yup.object().shape({
                  nombre_responsable: Yup.string()
                    .max(255)
                    .required(t('El nombre es obligatorio')),
                    apellido_responsable: Yup.string()
                    .max(255)
                    .required(t('El apellido es obligatorio')),
                    telefono_responsable: Yup.number()
                    .integer()
                    .min(20)
                    .required(t('El telefono es obligatorio')),
                    email_responsable: Yup.string()
                    .email(
                      t('el email es obligatorio')
                    )
                    .max(255)
                    .required(t('El email es obligatorio')),
                })}
                label={t('responsable')}
              >
                <Box p={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="nombre_responsable"
                        component={TextField}
                        label={t('Nombre')}

                        placeholder={t('Nombre...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="apellido_responsable"
                        type="text"
                        component={TextField}
                        label={t('Apellido')}

                        placeholder={t('Apellido...')}
                      />
                    </Grid>

                 <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="telefono_responsable"
                        type="number"
                        component={TextField}
                        label={t('Telefono')}

                        placeholder={t('Telefono...')}
                      />
                    </Grid>
         <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="email_responsable"
                        type="email"
                        component={TextField}
                        label={t('Mail')}

                        placeholder={t('Mail...')}
                      />
                    </Grid>
                    
                  </Grid>
                </Box>
              </FormikStep>
              <FormikStep
                validationSchema={Yup.object().shape({
                  nombre_responsable: Yup.string()
                    .max(255)
                    .required(t('El nombre es obligatorio')),
                    apellido_responsable: Yup.string()
                    .max(255)
                    .required(t('El apellido es obligatorio')),
                    telefono_responsable: Yup.number()
                    .integer()
                    .min(20)
                    .required(t('El telefono es obligatorio')),
                    email_responsable: Yup.string()
                    .email(
                      t('el email es obligatorio')
                    )
                    .max(255)
                    .required(t('El email es obligatorio')),
                })}
                label={t('Configuraciones')}
              >
                <Box p={4}>
                  <Grid container spacing={2}
                  xs={12}
                  
                  >
                
                <Grid item xs={2} mr={6} mt={19} >
                    <AvatarWrapper>
                        <Avatar
                          variant="rounded"
                     
                        />
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
                </Grid>
                  
                
                  
                    <Grid item xs={4} >
                  
                  <ChromePicker
                  color={colorPrimario}
                  onChange={updatedColor => setColorPrimario(updatedColor)}

                  />
                      </Grid>
                      <Grid item xs={4} >
                    
                  <ChromePicker
                  color={colorSecundario}
                  onChange={updatedColor => setColorSecundario(updatedColor)}
                    
                  />
                      </Grid>

                      <Grid item xs={4} ml={23} mt={5} >


                         
                  <ChromePicker
                  color={colorTextoPrimario}
                  onChange={updatedColor => setColorTextoPrimario(updatedColor)}
                    
                  />



                      </Grid>
                      <Grid item xs={4}  mt={5}>
                      <ChromePicker
                  color={colorTextoSecundario}
                  onChange={updatedColor => setColorTextoSecundario(updatedColor)}
                    
                  />

                      </Grid>
                    
                  </Grid>
                </Box>
              </FormikStep>
            
                     <FormikStep label={t('Confirmar')}>
                <Box px={4} py={8}>
                  <Container maxWidth="sm">
                    <AvatarSuccess>
                      <CheckTwoToneIcon />
                    </AvatarSuccess>
                

                    <Typography
                      align="center"
                      sx={{ pt: 5, pb: 4, lineHeight: 1.5, px: 10 }}
                      variant="h2"
                    >
                      {t(
                        'Club registrado'
                      )}
                    </Typography>

                    <Button fullWidth variant="contained" href="/login">
                      Salir
                    </Button>
                  </Container>
                </Box>
              </FormikStep>
            </FormikStepper>
         
        </Container>
      </MainContent>
    </ContentWrapper>
  );
}

export function FormikStep({ children }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  const { t } = useTranslation();

  function isLastStep() {
    return step === childrenArray.length - 2;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
          setStep((s) => s + 1);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}
          {!completed ? (
            <BoxActions
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                disabled={isSubmitting || step === 0}
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => setStep((s) => s - 1)}
              >
                {t('Previous')}
              </Button>

              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting
                  ? t('Submitting')
                  : isLastStep()
                  ? t('Complete registration')
                  : t('Next step')}
              </Button>
            </BoxActions>
          ) : null}
        </Form>
      )}
    </Formik>
  );
}

export default RegisterWizard;

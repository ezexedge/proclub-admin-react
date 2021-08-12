import { useState, Children ,useEffect} from 'react';
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
import jwtDecode from 'jwt-decode';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

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
import TextFieldd from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import {roles,documento,paises,provincias} from 'src/api/datos'
import { getDeportes, getDeportesXClub } from 'src/api/deportes'
//getDisciplinaXClub
import {getDisciplinaXClub} from 'src/api/club'

import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%!important',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  anchoDate:{
    width: '100%!important',
    minWidth: '100%!important',

  },
  modified: {
    height: '38px!important',
    width: '100%!important'
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
    const [nacimiento, setNacimiento] = useState(null);
  const { t } = useTranslation();
  const [openAlert, setOpenAlert] = useState(true);
  const [allRoles,setAllRoles] = useState([])
  const [allDocumento,setAllDocumento] = useState([])
  const [allPais,setAllPais] = useState([])
  const [allProvincias,setAllProvincias] = useState([])
 const [allDeportes,setAllDeportes] = useState([])
 const [allDeportesxclub,setAllDeportesxclub] = useState([])

 const [valorPais,setValorPais] = useState()
const [valorProvincia,setValorProvincia] = useState()
const [valorTipoDocumento ,setValorTipoDocumento] = useState()
const [valorRol,setValorRol] = useState()
const [valorSexo,setValorSexo] = useState()
const [clubId,setClubId] = useState()
const [valorDeporte,setValorDeporte] = useState()

const [valorCategoria,setValorCategoria] = useState()

  useEffect(()=>{


    const accessToken = window.localStorage.getItem('accessToken');
    const usuario = jwtDecode(accessToken);
    setClubId(usuario.clubId)
    console.log('respuestaaaaa',usuario)

    const llamadaRoles = async () => {
        const result = await roles()
        console.log(result)
        let arr = result.filter((val)=> val.nombre !== 'superadmin')
       setAllRoles(arr)
    }

    const llamadaDocumento = async () => {
      const result = await documento()
      console.log(result)
     setAllDocumento(result)
  }


  const llamadaProvincia = async () => {
    const result = await provincias()
    console.log(result)
   setAllProvincias(result)
}

const llamadaPais = async() => {
  const result = await paises()
  console.log(result)
  setAllPais(result)
}

const llamadaDeportes = async()=>{
  const result = await getDeportes()
  console.log('deportes',result)
  setAllDeportes(result)
}

const llamadaDeportesXDisciplina = async(param)=>{
  const result = await getDisciplinaXClub(param)
  console.log('deportes',result)
  setAllDeportesxclub(result)
}


  llamadaRoles()
  llamadaDocumento()
  llamadaProvincia()
  llamadaPais()
  llamadaDeportes()
  llamadaDeportesXDisciplina(usuario.clubId)


  },[])
  

  return (
    <ContentWrapper title="Crear un nuevo usuario">
      <MainContent>
        <Container sx={{ my: 4 }} maxWidth="md">
      
        
            <Box px={4}>
              <Typography variant="h2" sx={{ mb: 1 }}>
                {t('Crear un nuevo usuario')}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 3 }}
              >
                {t('Completá la información básica del usuario')}
              </Typography>
            </Box>

            <FormikStepper
              initialValues={{
                nombre: '',
                apellido: '',
                terms: true,
                descripcion: '',
                dni:'',
                password: '',
                email: '',
                telefono: '',
                direccion: '',
                numero: '',
                localidad: '',
                cp: ''

                
                
              }}
              onSubmit={async(values) => {
               
                console.log('values', values);

                try{

                  const val = {
                    nombre: values.nombre,
                    deporte:71, 
                    categoria: 15, 
                    apellido: values.apellido,
                    telefono: values.telefono,
                    correo: values.email,
                    sexo: valorSexo, 
                    fechaNacimiento: nacimiento, 
                    tipoDocumentId: valorTipoDocumento,  
                    idClub: clubId,
                    cp: values.cp,
                    documento: values.dni,  
                    rol: valorRol,   
                    direccion: { 
                    calle: values.direccion,
                    localidad: values.localidad,
                    numero: values.numero,
                    provincia: valorProvincia
                    }
                    }


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
                    
                   const result = await fetch("https://secure-temple-46604.herokuapp.com/api/persona", requestOptions)
                  const resultFinal = await result.json()
                   console.log(resultFinal)
  
                         
                       


                }catch(error){

                }
           

                    // console.log('valor final de todo',valorFinal)
                
              
              }}
            >
              <FormikStep
                validationSchema={Yup.object().shape({
                
                  nombre: Yup.string()
                    .max(255)
                    .required(t('El nombre es obligatorio')),
                  apellido: Yup.string()
                    .max(255)
                    .required(t('El apellido es obligatorio')),
                  dni: Yup.number()
                    .min(20)
                    .integer()
                    .required(t('El DNI es obligatorio')),
           
                
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
                        label={t('Nombre')}
                        placeholder={t('Nombre...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="apellido"
                        component={TextField}
                        label={t('Apellido')}
                        placeholder={t('Apellido...')}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Tipo de usuario</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                    
                        label="Tipo de usuario"
                        name="rol"
                        
                        
                        onChange={event => setValorRol( event.target.value )}
                      >
             <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {allRoles && allRoles.map((val,i)=>(

                    <MenuItem value={val.id} >{val.nombre}</MenuItem> 
                
                ))}
                      </Select>
                    </FormControl>


                    </Grid>
                    <Grid item xs={12} md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Tipo de documento</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                    
                        label="Tipo de documento"
                        name="tipoDoc"
                    
                        
                        onChange={event => setValorTipoDocumento( event.target.value )}

                      >

          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {allDocumento && allDocumento.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.nombre}</MenuItem> 
                ))}
                        
                      </Select>
                    </FormControl>


                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        fullWidth
                        name="dni"
                        type="number"
                        component={TextField}
                        label={t('Dni')}
                        placeholder={t('DNI...')}

                      />
                    </Grid>
                    <Grid item xs={12} md={12} />

                    <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Sexo</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                    
                        label="Sexo"
                        name="sexo"
                     
                        
                        onChange={event => setValorSexo( event.target.value )}
                      >
                        <MenuItem value="">
                          <em>Elegir</em>
                        </MenuItem>
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="femenino">Femenino</MenuItem>
                      </Select>
                    </FormControl>

                  </Grid>



                    <Grid item xs={12} md={6} >
       <Box  className={classes.anchoDate} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker
        label="Fecha de nacimiento"
      
        value={nacimiento}
        onChange={(newValue) => {
          setNacimiento(newValue);
        }}
        renderInput={(params) => <TextFieldd {...params}  className={classes.anchoDate}/>}
      />
    </LocalizationProvider>
        </Box>

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
        
                {allPais && allPais.map((val,i)=>(
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
       
          label="Provincia"
          name="pais"
        
          
          onChange={event => setValorProvincia( event.target.value )}
        >
         <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {allProvincias && allProvincias.map((val,i)=>(
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
                

                    
                  </Grid>
                </Box>
              </FormikStep>
              <FormikStep
                validationSchema={Yup.object().shape({
              
                })}
                label={t('responsable')}
              >
                <Box p={4}>
                  <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Selecciona un deporte</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                    
                        label="Selecciona un deporte"
                        name="deporte"
                        onChange={event => setValorDeporte( event.target.value )}

                      >

          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
          {allDeportesxclub && allDeportesxclub.map((val,i)=>(
                  <MenuItem value={val.disciplina.id} index={i}>{val.disciplina.nombre}</MenuItem> 
                ))}
                        
                      </Select>
                    </FormControl>


                    </Grid>
                  

                 <Grid item xs={12} md={6}>
                 <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Selecciona una division</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                    
                        label="Selecciona una division"

                      name="categoria"
                        onChange={event => setValorCategoria( event.target.value )}
                      >

          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {allDeportesxclub && allDeportesxclub.map((val,i)=>(
                  <MenuItem value={val.disciplina.id} index={i}>{val.disciplina.nombre}</MenuItem> 
                ))}
                        
                      </Select>
                    </FormControl>

                    </Grid>
         <Grid item xs={12} md={6}>
         <Autocomplete
        multiple
        id="tags-outlined"
        options={allDeportes}
        getOptionLabel={(option) => option.nombre}
        
        filterSelectedOptions
        renderInput={(params) => (
          <TextFieldd
            {...params}
            variant="outlined"
            label="Posicion"
            placeholder="Elegir posicion"
          />
          )}
          />
                    </Grid>
                    <Grid item lg={12} xs={12}  >
        <Button
        
        variant="outlined"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
      >
        Agregar un usuario
      </Button>
      </Grid>
      <Grid item lg={12} xs={12}  >
        <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        
      >
        Agregar un usuario
      </Button>
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

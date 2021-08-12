import { useState, Children } from 'react';
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
                phone: '',
                direccion: '',
                numero: ''
                
              }}
              onSubmit={async (values) => {
                await sleep(3000);
                console.log('values', values);
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
       
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                    </Grid>
                       <Grid item xs={12} md={3}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Provincia</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
       
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                    </Grid>

            

                         <Grid item xs={12} md={3}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Localidad</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
       
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                    </Grid>

                           <Grid item xs={12} md={3}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">CP</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
       
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


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
                  <Grid container spacing={3}
                  
             
                  >
                    <Grid item xs={12} md={2}>
                

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
                          />
                          <label htmlFor="icon-button-file">
                            <IconButton component="span" color="primary">
                              <CloudUploadTwoToneIcon />
                            </IconButton>
                          </label>
                        </ButtonUploadWrapper>
                      </AvatarWrapper>

                    </Grid>
                

                    <Grid item xs={12} md={5}>
                    <Field
                        fullWidth
                        name="color"
                        type="text"
                        component={TextField}
                        label={t('Color primario')}

                        placeholder={t('Color primario...')}
                      />
                      </Grid>
                      <Grid item xs={12} md={5}>
                    <Field
                        fullWidth
                        name="color2"
                        type="text"
                        component={TextField}
                        label={t('Texto primario')}

                        placeholder={t('Texto primario...')}
                      />
                      </Grid>

                      <Grid item xs={12} md={5}>
                    <Field
                        fullWidth
                        name="color"
                        type="text"
                        component={TextField}
                        label={t('Color secundario')}

                        placeholder={t('Color secundario...')}
                      />
                      </Grid>
                      <Grid item xs={12} md={5}>
                    <Field
                        fullWidth
                        name="color2"
                        type="text"
                        component={TextField}
                        label={t('Texto secundario')}

                        placeholder={t('Texto secundario...')}
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

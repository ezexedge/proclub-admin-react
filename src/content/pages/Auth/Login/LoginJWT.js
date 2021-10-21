import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  Link,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import jwtDecode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
modified: {
  color: 'black!important'
}

}))


function LoginJWT() {
  const classes = useStyles();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const { login, isAuthenticated , user } = useAuth();
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        terms: true,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('El correo electrónico proporcionado debe ser una dirección de correo electrónico válida.'))
          .max(255)
          .required(t('El campo de correo electrónico es obligatorio.')),
        password: Yup.string()
          .max(255)
          .required(t('El campo de contraseña es obligatorio.')),
        terms: Yup.boolean().oneOf(
          [true],
          t('Debes aceptar nuestros términos y condiciones.')
        )
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          
              await login(values.email, values.password);
          
              console.log(isAuthenticated , user)
         
            const accessToken = window.localStorage.getItem('accessToken');
            const usuario = jwtDecode(accessToken);

            console.log('ress',user)
          
          if(usuario.rol === 'socio' || usuario.rol === 'manager'){

            enqueueSnackbar('No tiene permisos suficientes para ingresar a esta área.',{ 
              variant: 'error',
          })
          }
          
      
        

          
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);

          }
        } catch (err) {


    //      console.log('errrpepa',err);
          
          enqueueSnackbar('Usuario y/o contraseña incorrectos.',{ 
            variant: 'error',
        })
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
            autoFocus
            helperText={touched.email && errors.email}
            label={t('Email')}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            margin="normal"
            helperText={touched.password && errors.password}
            label={t('Contraseña')}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            mt={1}
          
          >
           <Link component={RouterLink} to="/recover-password" className={classes.modified}>
              <b>{t('Recuperar contraseña')}</b>
            </Link>
            <Link component={RouterLink} to="/recover-password">
              <b>{t('')}</b>
            </Link>

           
          
          </Box>

          {Boolean(touched.terms && errors.terms) && (
            <FormHelperText error>{errors.terms}</FormHelperText>
          )}

          <Button
            sx={{ mt: 3 }}
            color="primary"
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
            {t('Ingresar')}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default LoginJWT;

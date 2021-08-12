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
import  firebase from 'src/firebase'
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import jwtDecode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
import {actualizarUsuario} from 'src/api/usuarios'

const useStyles = makeStyles((theme) => ({
modified: {
  color: 'black!important'
}

}))


function LoginJWT() {
  const classes = useStyles();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const { login , isAuthenticated,user} = useAuth();
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
          .email(t('The email provided should be a valid email address'))
          .max(255)
          .required(t('The email field is required')),
        password: Yup.string()
          .max(255)
          .required(t('The password field is required')),
        terms: Yup.boolean().oneOf(
          [true],
          t('You must agree to our terms and conditions')
        )
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
            
            const result = await firebase.default.auth().signInWithEmailLink(values.email, window.location.href);
            //.
            console.log('result',result)
            console.log(values)
            
            if (result.user.emailVerified) {
                let user = firebase.default.auth().currentUser

             let respUpdate =  await user.updatePassword(values.password);

             console.log('respuesta update',respUpdate)
                //const idTokenResult = await user.getIdTokenResult();
                const result = await actualizarUsuario(values.email,user.uid)
                console.log(result)
                
            }
            

          
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);

          }

          
        } catch (err) {
          console.error(err);
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
            label={t('Email address')}
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
            label={t('Password')}
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
            {t('Sign in')}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default LoginJWT;

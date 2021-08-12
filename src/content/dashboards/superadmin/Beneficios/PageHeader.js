import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import wait from 'src/utils/wait';
import useAuth from 'src/hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import RegisterWizard from './RegisterWizard'
import { Link as RouterLink } from 'react-router-dom';

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
  Button
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
    }
  }));

  

function PageHeader() {
    const classes = useStyles();

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

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
    enqueueSnackbar(t('The user account was created successfully'), {
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
<Typography variant="h1"> Beneficios </Typography>
<div className={classes.texto}>{'All aspects related to the app users can be managed from this page'}</div>
    </Grid>
    <Grid item lg={3} xs={12}  >
        <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        onClick={handleCreateUserOpen}
        component={RouterLink} to="/superadmin/dashboard/beneficio/crear"
     
     >
        Crear un beneficio
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
             
               <RegisterWizard/>
          
            
           </>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;

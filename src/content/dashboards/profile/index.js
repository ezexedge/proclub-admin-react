import { useState, useCallback, useEffect,useMemo } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import CardMedia from '@material-ui/core/CardMedia';
import Label from 'src/components/Label';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import styled from 'styled-components'
import moment from 'moment'
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  Checkbox,
  Slide,
  CardHeader,
  CardContent,
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
  DialogTitle,
  Zoom
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { getClubID, getUsuariosXClub, agregarUsuarioPerfilDeporte, getPerfilUsuarioAllDeportes } from 'src/api/usuarios'
import { cambiarEstadoAprobado, cambiarEstadoDesaprobado } from 'src/api/estado'
import { unwrapResult } from '@reduxjs/toolkit';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import { Animated } from "react-animated-css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getUsuario } from 'src/api/usuarios'


const Span = styled.span`

font-size: 33px!important;
`

const theme = {
  spacing: 8,
}


const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
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

const Input = experimentalStyled('input')({
  display: 'none'
});




const LinearProgressWrapper = experimentalStyled(LinearProgress)(
  ({ theme }) => `
          flex-grow: 1;
          margin-right: ${theme.spacing(1)};
  `
);


const useStyles = makeStyles((theme) => ({

  avatar: {
    height: '109px!important',
    width: '109px!important'
  },
  modified: {

    height: '50px',
    width: '175px',

    borderRadius: '6px',
    padding: '22px, 32px, 22px, 32px',
    color: 'white',
    backgroundColor: '#44D600!important',
    marginLeft: '13px!important'


  },
  modifiedError: {

    height: '50px',
    width: '175px',

    borderRadius: '6px',
    padding: '22px, 32px, 22px, 32px',
    color: 'white',
    backgroundColor: '#FF395C!important'


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
  titulo: {

    fontFamily: 'Roboto!important',
    fontStyle: 'normal!important',
    fontWeight: 'bold!important',
    fontSize: '30px!important',
    lineHeight: '35px!important',
    color: '#223354!important',
    marginLeft: '17px!important'

  },
  card: {
    marginTop: '41px!important',
    background: '#FFFFFF',
    boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
    border: '6px'

  },

  imageCard: {
    backgroundColor: 'white!important',

    height: '88px!important',
    width: '88px!important',
    borderRadius: '6px!important',
    padding: '20px!important'
  },
  container: {
    width: '100%!important',
    heigth: 'auto!important',
    padding: '34px!important'
  },
  paper: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardTitle: {
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
  cardSubtitle: {

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
  cardSubtitle2: {

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
  textEnd: {
    textAlign: 'end',

  },
  titleInformacion: {
    /* Mail: Teléfono: Dirección: */

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '239.3%',
    /* or 34px */
    marginRight: '5px',

    /* Color States/Common/Black */
    color: '#223354',
    opacity: '0.5'

  },
  parrafoInformacion: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '0em',
    margin: '0px'

  },
  parrafoInformacion2: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '0em',
    margin: '0px',
    padding: '0px 75px!important'

  }
  ,
  parrafoEmail: {

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',

    /* Color States/Common/Black */
    color: '#223354'


  },
  headerStyle: {

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',

    /* Color States/Common/Black */
    color: '#223354',

    opacity: '0.5'

  },
  headerHelp: {

    with: '16px!important',
    height: '16px!important',
    /* Color States/Common/Black */
    color: '#223354',
    marginTop: '2px!important',
    opacity: '0.5'

  },
  textCard: {

    fontFamily: 'Roboto!important',
    fontStyle: 'normal!important',
    fontWeight: 'normal!important',
    fontSize: '22px!important',
    lineHeight: '26px!important',

    /* Color States/Common/Black */
    color: '#223354!important'


  },
  upIcon: {
    color: '#3BB900!important',
    width: '13px!important',
    height: '13px!important',
    marginTop: '1.5px!important',
    marginLeft: '7px!important',
    marginRight: '5px!important',
    fontWeight: '700!important'


  },
  downIcon: {
    color: '#FF1A43!important',
    width: '13px!important',
    height: '13px!important',
    marginTop: '1.5px!important',
    marginLeft: '7px!important',
    marginRight: '5px!important',
    fontWeight: '700!important'


  },
  bolderText: {
    fontWeight: '700!important',
  },
  marginResponsable: {
    margin: '70px!important'
  },
  editIcon: {
    marginTop: '27px!important',
    with: '18px!important',
    height: '18px!important'
  },
  editText: {
    color: '#6B64F8!important',
    marginTop: '27px!important',
    marginRight: '15px!important',
    marginLeft: '3px!important',
    cursor: 'pointer!important'

  },
  socioTitle: {
    /* Fiat Deposit */



    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    /* identical to box height */
    display: 'flex',
    alignItems: 'center',

    /* Color States/Common/Black */
    color: '#223354',

    marginTop: '0px!important'


  },
  socioSubtitle: {
    /* 25 Jul 2021 | 11:45 PM */

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',

    /* Color States/Common/Black */
    color: '#223354',

    opacity: '0.5',
    marginTop: '-10px!important'

  },
  marginAvatar: {
    marginRight: '10px!important'
  },
  vinculado: {
    backgroundColor: '#44D600!important'
  },
  deshabilitado: {
    backgroundColor: '#FFAF39!important'
  },
  black: {
    backgroundColor: 'black!important',
    color: 'white',
    marginRight: '10px!important'
  },
  iconPadding: {
    padding: '5px!important'
  },
  titleSports: {
    marginTop: '1px',
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left'

  },
  subTitleSports: {

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    paddingLeft: '10px',
    /* Color States/Common/Black */
    color: '223354',

    opacity: '0.5'

  },
  colorSpinner: {
    color: 'white!important',
    width: '35px!important'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

    zIndex: '100!important',
    width: '50%'

  },

  selectedPadding: {
    padding: '20px!important'
  },
  cancelar: {
    marginLeft: '15px !important'
  }
}));

//#FF1A43, 100 %
const Profile = () => {
  const classes = useStyles();

  const [bloquearBtn, setBloquearBtn] = useState(true)

  const [open, setOpen] = useState(false)
  const isMountedRef = useRefMounted();
  const [clubDatos, setClubDatos] = useState()
  const [usuario, setUsuario] = useState(null)
  const [checked, setChecked] = useState(false);

  const [aprobadoSpinner, setAprobadoSpinner] = useState(false)
  const [desaprobadoSpinner, setDesaprobadoSpinner] = useState(false)
  const [deportes, setDeportes] = useState([])
  const [division, setDivision] = useState(null)
  const [disciplina, setDisciplina] = useState(null)
  const [disciplinaList, setDisciplinaList] = useState([])
  const [divisionList, setDivisionList] = useState([])
  const [posicion, setPosicion] = useState(null)
  const [posicionList, setPosicionList] = useState([])
  const [deportePerfil, setDeportePerfil] = useState([])
  const [actualizarDeportes, setActualizarDeportes] = useState(false)
  const token = window.localStorage.getItem('accessToken');
  const { enqueueSnackbar } = useSnackbar();
  const [datosUsuario,setDatosUsuario] = useState({
      nombre: '',
      apellido: '',
      mail: '',
      telefono: '',
      domicilio:'',
      localidad: '',
      provincia: '',
      pais: '',
      dni:'',
      fechaDeNacimiento:''

  })

  const { user } = useAuth()
  const { userId } = useParams();
  const { t } = useTranslation();


  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };


  const llamadaUsuario = async(param) => {
        const result = await getUsuario(param,token)

        console.log('estos son los datos del user',result)
        setUsuario(result)
  }



  useMemo(()=>{

        if(usuario !== null){

            setDatosUsuario({
                nombre: usuario.persona && usuario.persona.nombre ? usuario.persona.nombre : 'No ingreso',
                apellido: usuario.persona && usuario.persona.apellido ? usuario.persona.apellido : 'No ingreso',
                mail:  usuario.persona && usuario.persona.correo ? usuario.persona.correo : 'No ingreso',
                telefono: usuario.persona && usuario.persona.telefono ? usuario.persona.telefono : 'No ingreso',
                domicilio: usuario.persona && usuario.persona.direccionPersona && usuario.persona.direccionPersona.calle   ? usuario.persona.direccionPersona.calle + ' ' + usuario.persona.direccionPersona.numero : 'No ingreso',
                localidad: usuario.persona && usuario.persona.direccionPersona &&  usuario.persona.direccionPersona.localidad ? usuario.persona.direccionPersona.localidad : 'No ingreso',
                dni: usuario.persona && usuario.persona.documento ? usuario.persona.documento  : 'No ingreso',
                fechaDeNacimiento: usuario.persona && usuario.persona.fechaNacimiento ? usuario.persona.fechaNacimiento : 'No ingreso' 
            })

        }

  },[usuario])
 

  useEffect(() => {




    if (user) {
        llamadaUsuario(user.userId)
    }


  }, []);



  const generandoFecha = (param) => {

    var formatted = moment(param).format('D MMMM YYYY');
    return formatted

  }


console.log('datooooooos',datosUsuario)
  return (
    <div className={classes.container}>
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
          <div className={classes.paperModal}>

            <DialogTitle disableTypography>
              <Typography variant="h3" gutterBottom py={1}>
                {t('Agregar un deporte')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Agregar un deporte'
                )}
              </Typography>
            </DialogTitle>
            <FormControl mt={4} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná un deporte</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná un deporte"
                name="sexo"
                onChange={(e) => setDisciplina(e.target.value)}

              >
                {deportes && deportes.length > 0 && deportes.map((val, i) => (

                  <MenuItem value={val.disciplinaId}   >{val.disciplina.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>


            <FormControl mt={1} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná una division</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná una division"
                name="sexo"
                onChange={(e) => setDivision(e.target.value)}
              >
                {divisionList && divisionList.map((val, i) => (

                  <MenuItem value={val.id}   >{val.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>


            <FormControl mt={1} variant="outlined" fullWidth className={classes.selectedPadding}>
              <InputLabel
                className={classes.selectedPadding}
                fullWidth
                id="demo-simple-select-outlined-label">Seleccioná una posicion</InputLabel>
              <Select

                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"

                label="Seleccioná una division"
                name="sexo"
                onChange={(e) => setPosicion(e.target.value)}
              >
                {posicionList && posicionList.posiciones && posicionList.posiciones.map((val, i) => (

                  <MenuItem value={val.id}   >{val.nombre}</MenuItem>

                ))}
              </Select>
            </FormControl>

            <Grid xs={12} p={3} display="flex" justifyContent="flex-end" mt={3}>
              <Button variant="contained" color="primary"
                p={3}
                onClick={() => agregarDeporte()}
                disabled={bloquearBtn === true ? true : false}
              >
                Agregar un deporte

              </Button>

              <Button p={3}
                variant="outlined" color="secondary" className={classes.cancelar} onClick={handleClose}>
                Cancelar
              </Button>

            </Grid>

          </div>
        </Fade>
      </Modal>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"

      >
        <Grid item xs={12} md={1.5}>


          <AvatarWrapper>
            <Avatar
              variant="rounded"
              className={classes.avatar}
            />
            <ButtonUploadWrapper>
              <Input
                accept="image/*"
                id="icon-button-file"
                name="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file"   >
                <IconButton component="span" color="primary">
                  <PublishIcon />
                </IconButton>
              </label>
            </ButtonUploadWrapper>
          </AvatarWrapper>

        </Grid>

    

      </Grid>

      <Box m={5} />
      


      <Box m={3} />



      <Grid container
        xs={12}
        spacing={2}
        mt={3}
      >


    



        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
          spacing={3}
          item
          xs={12}
        >
          <Grid item

            xs={12}>

            <Card>


              <Box
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <CardHeader

                  title={t('Informacion del usuario')}
                  subheader="10 saved addresses"
                />


              </Box>

              <Divider />
              <CardContent

              >

                   <Box xs={12} p={0} mb={1}>
                  <p className={classes.parrafoInformacion} ><span className={classes.titleInformacion}>Nombre:</span> {datosUsuario.nombre}</p>
                </Box>

                <Box xs={12} p={0} mb={1}>
                  <p className={classes.parrafoInformacion} ><span className={classes.titleInformacion}>Apellido:</span> {datosUsuario.apellido}</p>
                </Box>

               
                <Box xs={12} p={0} mb={1}>
                  <p className={classes.parrafoEmail} ><span className={classes.titleInformacion}>Mail:</span> {datosUsuario.mail}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Telefono:</span> {datosUsuario.telefono}</p>
                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Domicilio:</span> {datosUsuario.domicilio}</p>
                  {/* <p className={classes.parrafoInformacion2}>< span>        </span>{usuario && usuario.usuario.persona.direccionPersona.provincia ?  usuario.usuario.persona.direccionPersona.provincia.nombre + ' , ' + usuario.usuario.persona.direccionPersona.localidad   : 'No ingreso'}</p> */}
                  {/* <p className={classes.parrafoInformacion2}>< span>        </span>{usuario && usuario.usuario.persona.direccionPersona.provincia ?  usuario.usuario.persona.direccionPersona.provincia.country.nombre  : 'No ingreso'}</p> */}

                </Box>

                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Localidad:</span> {datosUsuario.localidad}</p>
               </Box>


                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>DNI:</span>{datosUsuario.dni}</p>
                </Box>


                <Box xs={12} mb={1}>
                  <p className={classes.parrafoInformacion}><span className={classes.titleInformacion}>Fecha de nacimiento:</span>{ generandoFecha(datosUsuario.fechaDeNacimiento)}</p>
                </Box>


              </CardContent>
            </Card>
          </Grid>

        </Grid>



      </Grid>

 

      <Box m={8} />


 
    </div>
  );
}

export default Profile;
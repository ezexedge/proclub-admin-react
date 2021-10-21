import React,{useState, useCallback, useEffect,useMemo } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import useAuth from 'src/hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import {getDeportesIDXClubID} from 'src/api/deportes'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import EditIcon from '@material-ui/icons/Edit';
import {getDeporteAdmin,crearDivision} from 'src/api/deportes'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {getDivisionXClubXDisciplina} from 'src/api/division'
import {crearPosicionesAdmin,modificarPosicion} from 'src/api/posiciones'
import TextFieldd from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import ActivityTab from './ActivityTab';
import EditProfileTab from './EditProfileTab';
import NotificationsTab from './NotificationsTab';
import SecurityTab from './SecurityTab';
import Results from './Results'
import CircularProgress from '@material-ui/core/CircularProgress';
import { iconos} from 'src/iconos'
import {getDisciplinaXClub} from 'src/api/club'

import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  CardHeader,
  Checkbox,
  Slide,
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
  Zoom,
  InputLabel,
  Select,
  MenuItem

} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSnackbar } from 'notistack';
import {getPosicionXDivision,getPosicionesAdmin} from 'src/api/posiciones'

function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


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


const LinearProgressWrapper = experimentalStyled(LinearProgress)(
    ({ theme }) => `
          flex-grow: 1;
          margin-right: ${theme.spacing(1)};
  `
  );
  
 // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
 
]

const useStyles = makeStyles((theme) => ({
    modified: {
    height: '50px!important',
    width: '190px!important',
    marginLeft: '10px!important'
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
    titulo: {

fontFamily: 'Roboto!important',
fontStyle: 'normal!important',
fontWeight: 'bold!important',
fontSize: '30px!important',
lineHeight:'35px!important',
color: '#223354!important',
marginLeft: '40px!important',
marginTop: '0px!important'
        
    },
    card:{
        marginTop: '41px!important',
        background: '#FFFFFF',
        boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        border: '6px'

    },

  imageCard:{
      backgroundColor: 'white!important',
  
      height: '88px!important',
    width: '88px!important',
    borderRadius: '6px!important',
    padding: '20px!important'
  },
  container:{
      width: '100%!important',
      heigth: 'auto!important',
      padding: '34px!important'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
cardTitle:{
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
cardSubtitle:{

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
cardSubtitle2:{

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
    boxIcon:{
      /* Rectangle 67 */


background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
borderRadius: '6px',
height: '88px',
width: '88px',
left: '0px',
textAlign:'center!important',
borderRadius: '6px',
paddingTop: '20px'

    },
    iconoStyle:{
      fontSize: '42px!important',
      marginLeft: '24px!important'

    },
    headerTap:{
      backgroundColor: '#F6F8FB!important',
      boxShadow: '0px 0px!important',
    
      
    },
    contenidoTap:{
      marginBottom: '40px!important'
    },
    editIcon: {
      marginTop: '27px!important',
      with:'18px!important',
      height:'18px!important'
  },
  editText:{
      color: '#6B64F8!important',
      marginTop: '27px!important',
      marginRight: '15px!important',
      marginLeft: '3px!important',
      cursor: 'pointer!important'
  
  },
  resetPadding: {
    padding: '0px!important'
  },
  titleInformacion: {
    /* Mail: Teléfono: Dirección: */
  display: 'flex!important',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '150%',
  /* or 34px */
  marginRight: '5px',
  
  /* Color States/Common/Black */
  color: '#223354',
  opacity: '0.5'
  
  },
  parrafoInformacion:{
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '28px',
  letterSpacing: '0em'
  
  }
  ,
  parrafoEmail:{
  
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  lineHeight: '19px',
  /* identical to box height */
  display: 'flex',
  alignItems: 'center',
  
  /* Color States/Common/Black */
  color: 'black'
  
  
  },
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '30px',
    zIndex: '100!important',
    width: '50%'

  },
  cancelar: {
    marginLeft: '20px!important'
  }
  }));


const Deporte = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const token = window.localStorage.getItem('accessToken');

    const isMountedRef = useRefMounted();

    const [bloquearPosicionBtn,setBloquearPosicionBtn] = useState(false)
    const [actualizarPosicion,setActualizarPosicion] = useState(false)
    const [actualizarDivision,setActualizarDivision] = useState(false)
    const [deporte,setDeporte] = useState(null)
    const [divisionxposicion,setDivisionxposicion] = useState(null)
    const [deporteAdmin,setDeporteAdmin] = useState(null)
    const [divisiones,setDivisiones] = useState(null)
    const [posiciones,setPosiciones] = useState(null)
    const [posicion,setPosicion] = useState(null)
    const [valueDivisiones,setValueDivisiones] = useState(null)
    const [division,setDivision] = useState(null)
    const [value, setValue] = React.useState(0);
    const [openPosicion,setOpenPosicion] = useState(false)
    const  [openModificarPosicion,setOpenModificarPosicion] = useState(false)
    const [newPosicion,setNewposicion] = useState([])
    const [totalPosiciones,setTotalPosiciones] = useState([])
    const [posicionModificada,setPosicionModificada] = useState('')
    const [posicionModificadaId,setPosicionModificadaId] = useState(null)
    const [cantidad,setCantidad] = useState([])
    const { user } = useAuth();
const [tabs,setTabs] = useState([])
    // @ts-ignore
    const { userId } = useParams();


    const { t } = useTranslation();
  
    const [currentTab, setCurrentTab] = useState('');
  
   


    const llamadaDeportesClub = async(param) => {
      const result = await getDisciplinaXClub(param,token)
      console.log(result)

      setCantidad(result)

    }


  
    const handleTabsChange = (event, value) => {
      console.log('.....vvxxx',value)
      setCurrentTab(value);
    };



    const onchangePosicion = (data) => {

      setActualizarPosicion(data)
     
  }

const onchangeModificar = (data) => {

   
    if(data.data === true){
      setPosicionModificadaId(data.id)
      setPosicionModificada(data.name)
      setOpenModificarPosicion(true)
    }else{
      handleCloseModificarPosicion()
    }
     
}



    const llamadaDeporteAdmin = async(club,disciplina) => {
      const result = await getDeporteAdmin(club,disciplina,token)
      console.log('deportes admin',result)
      setDeporteAdmin(result)
    }

    
    const llamadaId = async (club,user) => {
      const result = await getDeportesIDXClubID(club,user,token)
      console.log('resultadoo',result[0])
      setDeporte(result[0])
    }


    const llamadaDivisiones = async (club,disciplina) =>{
      const result =  await getDivisionXClubXDisciplina(club,disciplina,token)
      console.log('todas las divsiones',result)
      setDivisiones(result)
    }

    const llamadaPosicion = async(param) => {
      const result = await getPosicionXDivision(param,token)
      console.log('posicion llamada posicion',result)
      return result

    }

     const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleOpenModificarPosicion = () => {
      setOpenModificarPosicion(true)
    }

    const handleCloseModificarPosicion = () => {
      setOpenModificarPosicion(false)
    }

    const handleOpenPosicion = () => {
      setNewposicion([])
      setDivisionxposicion(null)
      setOpenPosicion(true)
    }

    const handleClosePosicion = () => {
      setOpenPosicion(false)
    }

    useMemo(()=>{

      setPosiciones(deporteAdmin)

      setValueDivisiones(divisiones)

    },[deporteAdmin,divisiones])
    

    useEffect(() => {
      

    if(user){
      llamadaDeportesClub(user.clubId)
    }
    
    llamadaId(user.clubId,userId)
    llamadaDeporteAdmin(user.clubId,userId)
    llamadaDivisiones(user.clubId,userId)


  
   

    }, []);


//      { value: 'edit_profile', label: t('Division 1') }


const cargandoPosiciones = async() => {
  
   

    const result = await getPosicionesAdmin(user.clubId,userId,token)
   console.log('respuesta',result)
      setTotalPosiciones(result)

    

  

}

    useEffect(()=>{

  

        if(divisiones){

          cargandoPosiciones()


        let arr = []

        for(let val of divisiones){
          let obj = {
            value: val.nombre,
            label: val.nombre,
            id: val.id
          }
          arr.push(obj)
        }
          setTabs(arr)
        }

    },[divisiones])
  

    useEffect(()=>{

      if(actualizarDivision === true){
       

        llamadaDivisiones(user.clubId,userId)

        setActualizarDivision(false)

      }

    },[actualizarDivision])

    useEffect(()=>{

      if(tabs && tabs.length > 0){

          setCurrentTab(tabs[0].value)
          setPosicion(tabs[0].id)
      }

    },[tabs])

    useEffect(()=>{

      if(actualizarPosicion === true){

        cargandoPosiciones()

        setActualizarPosicion(false)
      }

    },[actualizarPosicion])


    console.log('ttabss',tabs)

  const crearNuevaDivision = async() => {
    console.log('aqui la division ',division)

    setBloquearPosicionBtn(true)

    const obj = {
      nombre: division
    }

let result  = await crearDivision(user.clubId,userId,obj,token)

if(result.error){
       handleClose()

   enqueueSnackbar(t(result.error), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          TransitionComponent: Zoom
        });


}else{

    setActualizarDivision(true)

     handleClose()
     enqueueSnackbar(t(result.message), {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            TransitionComponent: Zoom
          });


}

setBloquearPosicionBtn(false)


  }





  const modificarPosicionFunc = async() => {
    setBloquearPosicionBtn(true)

       
      const obj = {
        nombre : posicionModificada
      }

      console.log('psocioo',posicionModificada)
    
     const result = await modificarPosicion(posicionModificadaId,obj,token)

     console.log('modificado...',result)

     if(result.error){
      handleCloseModificarPosicion()
  enqueueSnackbar(t(result.error), {
         variant: 'error',
         anchorOrigin: {
           vertical: 'top',
           horizontal: 'right'
         },
         TransitionComponent: Zoom
       });

}else{

    setActualizarPosicion(true)
    handleCloseModificarPosicion()

    enqueueSnackbar(t(result.message), {
           variant: 'success',
           anchorOrigin: {
             vertical: 'top',
             horizontal: 'right'
           },
           TransitionComponent: Zoom
         });



}


setBloquearPosicionBtn(false)




  }

  const crearNuevaPosicion = async() => {

    setBloquearPosicionBtn(true)
    console.log('aca estan las posicoones',newPosicion)

     let arr = []

     for(let val of newPosicion){

      let obj = {
        nombre: val
      }

      arr.push(obj)

     }


     const obj = {
       posiciones: arr
     }


     const result = await crearPosicionesAdmin(user.clubId,userId,divisionxposicion,obj)

     console.log('aca va el resultado......',result)

     setOpenPosicion(false)

     if(result.error){
      handleClose()

  enqueueSnackbar(t(result.error), {
         variant: 'error',
         anchorOrigin: {
           vertical: 'top',
           horizontal: 'right'
         },
         TransitionComponent: Zoom
       });

}else{

    setActualizarPosicion(true)
  
    enqueueSnackbar(t(result.message), {
           variant: 'success',
           anchorOrigin: {
             vertical: 'top',
             horizontal: 'right'
           },
           TransitionComponent: Zoom
         });



}

setBloquearPosicionBtn(false)

  }
   

  


  const renderTabs = (tabs) => {

    tabs.map((tab)=>(
      <>
     {currentTab === tab.value &&   <EditProfileTab />}
     </>
    ))

  }

  const funcTabs = (params) => {
      return params 
  }

  console.log('total//////',totalPosiciones)


   
  const imageDeporte = (param) => {
    let result = iconos.find(val => val.nombre === param)

    return( 
    <img style={{ maxWidth: 70,paddingLeft: 14.5,paddingBottom: 15}} src={result.icono} />
    )
   }



   const buscarCantidadUsuario = () => {
        const result = cantidad.find(val => val.disciplinaId === Number(userId))

        if(result){
          return result.cantitdadUsuarios 

        }

   }

   const buscarCantidadDivision = () => {
    const result = cantidad.find(val => val.disciplinaId === Number(userId))

    if(result){

      return result.cantidadDivision

    }

}

   console.log('cantidad de cantides',cantidad)

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

           <TextField
          fullWidth
          id="outlined-required"
          label="agregar nueva division"
          placeholder="agregar..."
          variant="outlined"
          onChange={e => setDivision(e.target.value)}
        />
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={3}>
       <Button variant="contained" color="primary" 
       onClick={crearNuevaDivision}
       disabled={bloquearPosicionBtn === true ? true : false}
        >
          {!bloquearPosicionBtn ? 'Agregar Division'  :  <CircularProgress/>  }

</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={handleClose}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>




            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModificarPosicion}
        onClose={handleCloseModificarPosicion}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModificarPosicion}>
          <div className={classes.paperModal}>

           <TextField
          fullWidth
          id="outlined-required"
          label="modificar posicion"
          placeholder="modificar..."
          variant="outlined"
          value={posicionModificada}
          onChange={e => setPosicionModificada(e.target.value)}
        />
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={3}>
       <Button variant="contained" color="primary" 
       onClick={modificarPosicionFunc}
       disabled={bloquearPosicionBtn === true ? true : false}
        >
          {!bloquearPosicionBtn ? 'Modificar posicion'  :  <CircularProgress/>  }

</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={handleCloseModificarPosicion}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>








                   <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openPosicion}
        onClose={handleClosePosicion}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openPosicion}>
          <div className={classes.paperModal}>

          <InputLabel id="demo-simple-select-outlined-label">Divisiones</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="pais"
          label="Pais"
          onChange={e => setDivisionxposicion(e.target.value)}
    
        >
          <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                 {valueDivisiones !== null  && valueDivisiones.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.nombre}</MenuItem> 
                ))}

        </Select>

        <Grid xs={12}  mt={3}>
              <Autocomplete
                   onChange={(event, value) => setNewposicion(value) } 

        multiple
        id="tags-filled"
               options={top100Films.map((option) => option.title)}

        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} 
            
         
            />
          ))
        }
        renderInput={(params) => (
          <TextFieldd {...params} 
          
          fullWidth
          name="posicion"
          
          label={t('Posicion')}
          placeholder={t('Posicion...')}
          />
        )}
      />
        </Grid>
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={3}>
       <Button variant="contained" color="primary" 
       onClick={crearNuevaPosicion}
       disabled={divisionxposicion !== null  && newPosicion.length > 0 && !bloquearPosicionBtn ? false : true}
        >

          {!bloquearPosicionBtn ? 'Agregar posicion'  :  <CircularProgress/>  }
</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={handleClosePosicion}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>

            <Grid
  container
  direction="row"
  justifyContent="space-between"

  alignItems="flex-start"
>

 

  <Box className={classes.boxIcon} display="flex">

  {deporte && imageDeporte(deporte.disciplina.icono)}               
  
  <p className={classes.titulo}>{deporte && deporte.disciplina.nombre}</p>


  </Box>

     

  <Box display="flex">

  <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        onClick={handleOpen}
      >
      Agregar División
      </Button>
      <Button
        
        variant="contained"
        color="secondary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
        onClick={handleOpenPosicion}
      >
      Agregar Posición
      </Button>
      </Box>
    </Grid>

    <Box m={3} />
    <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  spacing={3}
>

<Grid item xs={6}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
>
<Avatar variant="square" src='/static/images/placeholders/covers/7.png' />

<Box m={1} />
<Typography className={classes.cardTitle}>
                  Socios vinculados
              </Typography>

              <Box m={0.5} />
    <div className={classes.cardSubtitle}>{ buscarCantidadUsuario()}</div>
  
  
    

    </Grid>
 
          </Paper>
</Grid>
<Grid item xs={6}>
          <Paper className={classes.paper}>
          <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
>
<Avatar variant="square" src='/static/images/placeholders/covers/7.png' />

<Box m={1} />
<Typography className={classes.cardTitle}>
                  Divisiones vinculadas
              </Typography>

              <Box m={0.5} />
    <div className={classes.cardSubtitle}>{ buscarCantidadDivision()}</div>
  
    </Grid>

          </Paper>
</Grid>


        

</Grid>

 

          <Grid item xs={12}  mt={4} >
                <Results users={totalPosiciones ? totalPosiciones : []} tabs={tabs ? tabs : []} onchangePosicion={(e)=> {onchangePosicion(e)}} onchangeModificar={(e)=>{onchangeModificar(e)}}  />
          </Grid>


      </div>
     );
}
 
export default Deporte;
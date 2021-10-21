import React, {useEffect,useState} from  'react';
import {
    Grid,
    Typography,
    CardContent,
    Card,
    Box,
    Divider,
    Button,
    Modal,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel
  } from '@material-ui/core';
  import { useTranslation } from 'react-i18next';
  import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
  import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
  import Text from 'src/components/Text';
  import Label from 'src/components/Label';
  import { makeStyles } from '@material-ui/core/styles';
  import Backdrop from '@material-ui/core/Backdrop';
  import Fade from '@material-ui/core/Fade';
 import {getProvincias} from 'src/api/provincia'
 import { useParams } from 'react-router-dom';
 import { useSnackbar } from 'notistack';


  const useStyles = makeStyles((theme) => ({
    searchBox:{
        maxWidth: '231px!important',
        height: '36px!important',
        padding: '6px, 9px, 6px, 8px!important'
    },
    searchIcon:{
      color: '#6B64F8!important'
    },
    avatar:{
      width: '24px!important',
      height: '24px!important'
    },
    deporte: {
     fontWeight: '700!important',
     fontSize: '14px!important',
     color: 'black!important',
     
    },
    ver:{
      color: '#0061F4!important'
    },
    editar:{
      color: '#6B64F8!important'
   
    },
    eliminar:{
   color: '#FF1A43!important'
    },
    iconoFontSize:{
     fontSize: '50px!important' 
    },
    ver:{
      color: '#0061F4!important'
    },
    editar:{
      color: '#6B64F8!important'
   
    },
    eliminar:{
   color: '#FF1A43!important'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: '30px',
      zIndex: '100!important',
      width: '50%'
  
    },
    cancelar: {
      marginLeft: '20px!important'
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: '100%!important',
      }
    
  }));
  

  function Informacion({datos,actualizarClub}) {
    const { t } = useTranslation();
    const classes = useStyles();
    const token = window.localStorage.getItem('accessToken');
    const { userId } = useParams();
  const { enqueueSnackbar } = useSnackbar()

  const [openModificar,setOpenModificar] = useState(false)
  const [nuevosValores,setNuevosValores] = useState({
      nombre: '',
      cuit: '',
      calle: '',
      numero:'',
      provincia:''
  })
  const [nuevoNombre,setNuevoNombre] = useState(null)
  const [modificarNombre,setModificarNombre] = useState(null)
  const [bloquearBtn,setBloquearBtn] = useState(false)
  const [modificarId,setModificaId] = useState(null)
  const [provincias,setProvincias] = useState([])
  



  const handleChangeInformacion = (e) => {
    
    
    setNuevosValores({
      ...nuevosValores,
      [e.target.name]: e.target.value
    });
  }
    const handleChangeNombre = (e) => {
        setNuevoNombre(e.target.value);
      }
    
      const handleOpen = (param) => {
        console.log(param)
    //    setModificarNombre(param.nombre)
      //  setModificaId(param.id)
        setOpenModificar(true);
      };
    
      const handleClose = () => {
        setOpenModificar(false);
        setNuevoNombre(null)
        setModificarNombre(null)
      };
    
      const llamadaProvincias = async() =>{

        const result = await getProvincias(token)
        setProvincias(result)

        
      }

      useEffect(()=>{

        llamadaProvincias()


        
      console.log('id del club',userId)
     
        
      },[])


      useEffect(()=>{
        setNuevosValores({
        ...nuevosValores
        ,
        nombre: datos && datos.nombre,
        cuit: datos && datos.cuit,
        calle: datos && datos.direccion && datos.direccion.calle,
        numero:  datos && datos.direccion && datos.direccion.numeros ,
        provincia: datos && datos.direccion && datos.direccion.provinciaId 
    })


      },[datos])


      const agregar = async() => {
    
        setBloquearBtn(true)
        
        const val = {
            nombre: nuevosValores && nuevosValores.nombre,
            descripcion: datos && datos.descripcion,
            colorPrimario: datos && datos.colorPrimario,
            colorSecundario: datos && datos.colorSecundario,
            colorTextoPrimario: datos && datos.colorTextoPrimario,
            colorTextoSecundario: datos && datos.colorTextoPrimario,
            nombre_visible: datos && datos.nombre_visible,
            email:  datos && datos.email,
            telefono: datos && datos.telefono,
            cuit: nuevosValores && nuevosValores.cuit,
            instagram:  datos && datos.instagram,
            facebook: datos && datos.facebook,
            twitter: datos && datos.twitter,
            cp: datos && datos.cp,
            direccion: {
              calle: nuevosValores && nuevosValores.calle,
              numero: nuevosValores && nuevosValores.numero,
              localidad: datos && datos.direccion && datos.direccion.localidad,
              provinciaId: nuevosValores && nuevosValores.provincia
            }
           
          }

          //aca termina val
          var myHeaders = new Headers();
          myHeaders.append("Accept", "application/json");
          myHeaders.append("Authorization", "Bearer " + token)

          var formdata = new FormData();
          
          let parseVal = JSON.stringify(val)
          //A LA HORA DE AGREGAR UNA IMAGEN SETEAR
          formdata.set("imagen",null);
          
          formdata.set("data",parseVal);
          
          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };


          const result = await fetch(`https://secure-temple-46604.herokuapp.com/api/clubs/${userId}`, requestOptions)
          const resultFinal = await result.json()
           console.log(resultFinal)



            if(resultFinal.error){

                enqueueSnackbar(resultFinal.error, {
                    variant: 'error',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right'
                    }
                  });

            }else{

                actualizarClub(true)

                enqueueSnackbar(resultFinal.message, {
                    variant: 'success',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right'
                    }
                  });
            }

          
            handleClose()


    

            setBloquearBtn(false)
      }
  
    return (
      <Grid container spacing={3} >
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModificar}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModificar}>
          <div className={classes.paper}>


            <Grid xs={12}>
          <TextField  id="outlined-basic" fullWidth label="Nombre" name="nombre" defaultValue={datos && datos.nombre}  onChange={handleChangeInformacion} variant="outlined" />

            </Grid>
            
            <Grid xs={12} mt={3}>
          <TextField  id="outlined-basic" fullWidth name="cuit" label="Cuit" defaultValue={datos && datos.cuit} onChange={handleChangeInformacion} variant="outlined" />

            </Grid>

            <Grid xs={12} mt={3}>
          <TextField  id="outlined-basic" fullWidth label="calle" name="calle" defaultValue={datos && datos.direccion && datos.direccion.calle } onChange={handleChangeInformacion} variant="outlined" />

            </Grid>

            <Grid xs={12} mt={3}>
          <TextField  id="outlined-basic" fullWidth name="numero" label="numero" defaultValue={datos && datos.direccion && datos.direccion.numero } onChange={handleChangeInformacion} variant="outlined" />

            </Grid>

            <Grid xs={12} mt={3}>
       
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Provincia</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="provincia"
          label="Provincias"
          onChange={handleChangeInformacion}
            defaultValue={datos && datos.direccion && datos.direccion.provinciaId }
        
        >
                <MenuItem value="">
            <em>Elegir</em>
          </MenuItem>
        
                {provincias && provincias.length && provincias.map((val,i)=>(
                  <MenuItem value={val.id} index={i}>{val.nombre}</MenuItem> 
                ))}
        </Select>
      </FormControl>

            </Grid>

       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={5}>
       <Button variant="contained"  disabled={bloquearBtn === false ?  false : true} onClick={agregar} color="primary" >
  Modificar informacion
</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={()=>setOpenModificar(false)}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>
        <Grid item xs={12}>
          <Card>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  {t('Información del club')}
                </Typography>
      
              </Box>
              <Button variant="text" startIcon={<EditTwoToneIcon />} onClick={()=>handleOpen()}>
                {t('Edit')}
              </Button>
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle2">
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      {t('Nombre')}:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{datos && datos.nombre}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      {t('Cuit')}:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{datos && datos.cuit}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      {t('Direcccion')}:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                      <Text color="black">
                      <b>{datos && datos.direccion.calle} {datos && datos.direccion.numero}</b>

                      </Text>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      {t('Provincia')}:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                      <Text color="black">
                      <b>{datos && datos.direccion.provincia.nombre}</b>

                      </Text>
                    </Box>
                  </Grid>
               
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      
      
      </Grid>
    );
  }
  
  export default Informacion;
  
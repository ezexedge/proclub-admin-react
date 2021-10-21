import React,{useEffect,useState} from 'react';

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
    FormControl,
    InputLabel,
    Select,
    MenuItem

  } from '@material-ui/core';
  import { useTranslation } from 'react-i18next';
  import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
  import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
  import Text from 'src/components/Text';
  import Label from 'src/components/Label';
  import  { ChromePicker,CirclePicker } from 'react-color'
  import { makeStyles } from '@material-ui/core/styles';
  import styled from 'styled-components'
  import Backdrop from '@material-ui/core/Backdrop';
  import Fade from '@material-ui/core/Fade';
  import {getProvincias} from 'src/api/provincia'
  import { useSnackbar } from 'notistack';
  import { useParams } from 'react-router-dom';


  const useStyles = makeStyles((theme) => ({
    modified: {
      height: '50px!important',
      width: '208px!important'
    },
    avatar:{
        backgroundColor:'red'
    },
    divcolor:{
        width: '90px',
        borderRadius: '100px',
        backgroundColor:'red',
        height:'90px'
    },
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
,
      anchoPicker:{
          width: '89%!important'
      }

  }))





  const Circulo = styled.div`
  width: 90px;
  border-radius: 100px;
  background-color: ${props => props.color ? props.color : "red"};
  height:90px;
  box-shadow: 0px 10px 15px -4px rgba(0,0,0,0.75);
`

  function Configuracion({datos,actualizarClub}) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { userId } = useParams();
  const { enqueueSnackbar } = useSnackbar()
    const token = window.localStorage.getItem('accessToken');

  const [openModificar,setOpenModificar] = useState(false)

  const [nuevoNombre,setNuevoNombre] = useState(null)
  const [modificarNombre,setModificarNombre] = useState(null)
  const [bloquearBtn,setBloquearBtn] = useState(false)
  const [modificarId,setModificaId] = useState(null)
  const [  provincias,setProvincias] = useState([])
  const [colorPrimario,setColorPrimario] = useState("#fff")
  const [colorSecundario,setColorSecundario] = useState("#0C0409")
  const [textoPrimario,setTextoPrimario] = useState('#fff')
  const [textoSecundario,setTextoSecundario] = useState('#fff')

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


        
      
     
        
      },[])


      useEffect(()=>{

        if(datos){
            setColorPrimario(datos.colorPrimario)
            setTextoPrimario(datos.colorTextoPrimario)
            setColorSecundario(datos.colorSecundario)
            setTextoSecundario(datos.colorTextoSecundario)
        }        


      },[datos])


      const agregar = async() => {
    
        setBloquearBtn(true)
        
        const val = {
            nombre: datos && datos.nombre,
            descripcion: datos && datos.descripcion,
            colorPrimario: colorPrimario,
            colorSecundario: colorSecundario,
            colorTextoPrimario: textoPrimario,
            colorTextoSecundario: textoSecundario,
            nombre_visible: datos && datos.nombre_visible,
            email:  datos && datos.email,
            telefono: datos && datos.telefono,
            cuit: datos && datos.cuit,
            instagram:  datos && datos.instagram,
            facebook: datos && datos.facebook,
            twitter: datos && datos.twitter,
            cp: datos && datos.cp,
            direccion: {
              calle: datos && datos.calle,
              numero: datos && datos.numero,
              localidad: datos && datos.direccion && datos.direccion.localidad,
              provinciaId: datos && datos.provincia
            }
           
          }

          console.log('valores',val)


          
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
      <Grid container spacing={3} mt={1}>
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



          <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
       



          <Grid display="flex" mt={2} justifyContent="space-between" xs={9}>
                     
                     <Box>

<Typography align="center" p={1} color="secondary"  variant="h5">Color Primario</Typography>
 <ChromePicker
  className={classes.anchoPicker}
color={colorPrimario}
onChange={updateColor => setColorPrimario(updateColor.hex ? updateColor.hex : updateColor)}
/>

</Box>
                         
     
<Box>

<Typography align="center" p={1} color="secondary"  variant="h5">Color texto primario</Typography>
 <ChromePicker
 className={classes.anchoPicker}
 color={textoPrimario}
 onChange={updateColor => setTextoPrimario(updateColor.hex ? updateColor.hex : updateColor)}

/>

</Box>
                         
                          </Grid>

                          <Grid display="flex" mt={2} justifyContent="space-between" xs={9}>
                     
                     <Box>

<Typography align="center" p={1} color="secondary"  variant="h5">Color secundario</Typography>
 <ChromePicker
  className={classes.anchoPicker}
    color={colorSecundario}

  onChange={updateColor => setColorSecundario(updateColor.hex ? updateColor.hex : updateColor)}

/>

</Box>
                         
     
<Box>

<Typography align="center" p={1} color="secondary"  variant="h5">Color texto secundario</Typography>
 <ChromePicker
  className={classes.anchoPicker}
  color={textoSecundario}

  onChange={updateColor => setTextoSecundario(updateColor.hex ? updateColor.hex : updateColor)}


/>

</Box>
                         
                          </Grid>
                          </Grid>

       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={5}>
       <Button variant="contained"  disabled={bloquearBtn === false ?  false : true} onClick={agregar} color="primary" >
  Modificar configuracion
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
                  {t('Datos de contacto')}
                </Typography>
              </Box>
              <Button variant="text" startIcon={<EditTwoToneIcon />} onClick={()=>handleOpen()}>
                {t('Edit')}
              </Button>
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle2">
                <Grid container
                 direction="row"
             
                 justifyContent="center"
                 alignItems="center"
                spacing={0}>
                  
                     <Grid display="flex" justifyContent="space-between" xs={6}>

                    
                     <Box align="center" >

<Typography  p={1} color="secondary"  variant="h5">Color primario</Typography>

                    <Circulo color={datos && datos.colorPrimario} />

                    </Box>

                    <Box align="center">

<Typography align="start" p={1} color="secondary"  variant="h5">Color texto primario</Typography>

                    <Circulo color={datos && datos.colorTextoPrimario} />
               
</Box>
                 


                     </Grid>




                     
               
                    
                   
                </Grid>
                <Grid container
                 direction="row"
                mt={5}
                 justifyContent="center"
                 alignItems="center"
                spacing={0}
                mb={2}
                >

<Grid display="flex" justifyContent="space-between" xs={6}>

                    
<Box align="center" >

<Typography  p={1} color="secondary"  variant="h5">Color secundario</Typography>

<Circulo color={datos && datos.colorSecundario} />

</Box>

<Box align="center">

<Typography align="start" p={1} color="secondary"  variant="h5">Color texto secundario</Typography>

<Circulo color={datos && datos.colorTextoSecundario} />

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
  
  export default Configuracion;
  




import React, { useState,useEffect,useMemo} from 'react';
import PageHeader from './PageHeader'
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ContentWrapper from 'src/components/ContentWrapper';
import {Grid ,Card,Container,Typography,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { experimentalStyled } from '@material-ui/core/styles';
import { modificarEspacio } from 'src/api/espacio'
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router-dom';
import {getEspacioById,getConfiguracionByEspacio} from 'src/api/espacio'
import { useSnackbar } from 'notistack';
import AddIcon from '@material-ui/icons/Add';
import {getReservaBloqueadoByEspacio,eliminarReserva } from 'src/api/reservas'
import CircularProgress from '@material-ui/core/CircularProgress';
import {getConfiguracionId,eliminarConfiguracion} from 'src/api/configuracion'


import {

    ListItem,
    List,
    ListItemText,
    Divider,
    Switch,
    Button,
    TextField
  } from '@material-ui/core';

  import { useTranslation } from 'react-i18next';
  import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
      },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardPadding:{
      padding: '21px 22px!important',
      marginTop: '24px!important'
  },
  cardPaddingConfig: {
    marginTop: '24px!important'

  },
  texto: {
    color: '#223354!important',
    marginTop: '4px!important',
    fontSize: '15px!important',
    fontWeight: '400!important',
    opacity: '70%'
  },
  formText: {
    'fontFamily': 'Roboto',
    'fontSize': '13px!important',
    'fontStyle': 'normal',
    'fontWeight': '400!important',
    'lineHeight': '16px',
    'text-align': 'left'
    
  },
  cardText: {
      padding: '30px 27px!important',
      marginTop: '24px!important'

  },
  btnModified: {
      padding: '13px!important'
  },
  btnDanger : {
      backgroundColor: '#FF395C!important',
      padding: '13px!important'

  }
}));


const EditorWrapper = experimentalStyled(Box)(
    ({ theme }) => `
  
      .ql-editor {
        min-height: 100px;
      }
  
      .ql-snow .ql-picker {
        color: ${theme.colors.alpha.black[100]};
      }
  
      .ql-snow .ql-stroke {
        stroke: ${theme.colors.alpha.black[100]};
      }
  
      .ql-toolbar.ql-snow {
        border-top-left-radius: ${theme.general.borderRadius};
        border-top-right-radius: ${theme.general.borderRadius};
      }
  
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: ${theme.colors.alpha.black[30]};
      }
  
      .ql-container.ql-snow {
        border-bottom-left-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
      }
  
      &:hover {
        .ql-toolbar.ql-snow,
        .ql-container.ql-snow {
          border-color: ${theme.colors.alpha.black[50]};
        }
      }
  `
  );


const Configuracion = () => {
  const token = window.localStorage.getItem('accessToken');

    const classes = useStyles();

   const {userId} = useParams()
console.log('userId',userId)
    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();
    const [activarPadding,setActivarPadding] = useState(false)
    const [eliminarSemana,setEliminarSemana] = useState(false)

    const [domingoPrimer,setDomingoPrimer] = useState(
      {
        id: -1,
        pertenece: 'primerdomingo',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )

    const [lunesPrimer,setLunesPrimer] = useState(
      {
        id: -1,
        pertenece: 'primerlunes',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )
    const [martesPrimer,setMartesPrimer] = useState(
      {
        id: -1,
        pertenece: 'primermartes',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )
    const [miercolesPrimer,setMiercolesPrimer] = useState(
      {
        id: -1, 
        pertenece: 'primermiercoles',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )

    const [juevesPrimer,setJuevesPrimer] = useState(
      {
        id: -1,
        pertenece: 'primerjueves',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )

    const [viernesPrimer,setViernesPrimer] = useState(
      {
        id: -1,
        pertenece: 'primerviernes',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )

    const [sabadoPrimer,setSabadoPrimer] = useState(
      {
        id: -1,
        pertenece: 'primersabado',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
      }
    )

    
    const [form,setForm] = useState([

      {
        nombre: '',
        fechaInicio:  '',
        desde: '',
        fechaFin: '',
        hasta: ''
        },
     
  

    ])

    const [formSemana,setFormSemana] = useState([

      {
        id: '',
        pertenece: '',
        lunes: '',
        martes: '',
        miercoles: '',
        jueves: '',
        viernes: '',
        sabado: '',
        domingo: '',
        espacioId: '',
        desde: '',
        hasta: ''
        },
       
       
  

    ])


    const [bloquear,setBloquear] = useState(false)
    const [state, setState] = useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false
    });


    const [desdeHasta,setDesdeHasta] = useState({

      lunesDesde: null,
      lunesHasta: null,
      martesDesde: null,
      martesHasta: null,
      miercolesDesde: null,
      miercolesHasta: null,
      juevesDesde: null,
      juevesHasta: null,
      viernesDesde: null,
      viernesHasta: null,
      sabadoDesde: null,
      sabadoHasta: null,
      domingoDesde: null,
      domingoHasta: null

    })


    const [dias,setDias] = useState({
      lunes: null,
      martes: null,
      miercoles: null,
      jueves: null,
      viernes: null,
      sabado: null,
      domingo: null,
      multiplesReservasEnUnHorario: null,
      LimitarAUnSoloEventoAprobado: null,
      ProhibirMasDeUnaReservaPendiente: null,
      ReservaAmpliada: null
     
    })

    const [descripcion,setDescripcion] = useState('')
    const [maxReserva,setMaxReserva] = useState({
      dia: null,
      semana: null,
      mes: null,
      año: null
    })

    const [duracion,setDuracion] = useState({
      duracion: '00:00',
      intervalo: '00:00',
      anticipacion: '00:00'

    })
    const [valor,setValor] = useState(null)
    const [espacio,setEspacio] = useState(null)
    const [configuracion ,setConfiguracion] = useState(null)
    const [valuesEspacio,setValuesEspacio] = useState(null)
    const [erroresSubmit,setErroresSubmit] = useState(false)

    const [eliminarReservaBtn,setEliminarReservaBtn] = useState(false)
  

    const llamadaEspacio = async(param) => {
      const result = await getEspacioById(param,token)
      const resultConfig = await getConfiguracionByEspacio(param,token)
      if(resultConfig){
        setDias({
          lunes: resultConfig.lunes === 1 ? true : false,
          martes: resultConfig.martes === 1 ? true : false,
          miercoles: resultConfig.miercoles === 1 ? true : false,
          jueves: resultConfig.jueves === 1 ? true : false,
          viernes: resultConfig.viernes === 1 ? true : false,
          sabado: resultConfig.sabado === 1 ? true : false,
          domingo: resultConfig.domingo === 1 ? true : false,
          multiplesReservasEnUnHorario: result.multiplesReservasEnUnHorario === 1 ? true : false  ,
          LimitarAUnSoloEventoAprobado: result.LimitarAUnSoloEventoAprobado === 1 ? true : false,
          ProhibirMasDeUnaReservaPendiente: result.ProhibirMasDeUnaReservaPendiente === 1 ? true : false,
          ReservaAmpliada: result.ReservaAmpliada === 1 ? true : false
      
        })

        setDesdeHasta({
          lunesDesde: resultConfig.lunesDesde,
          lunesHasta: resultConfig.lunesHasta,
          martesDesde: resultConfig.martesDesde,
          martesHasta: resultConfig.martesHasta,
          miercolesDesde: resultConfig.miercolesDesde,
          miercolesHasta: resultConfig.miercolesHasta,
          juevesDesde: resultConfig.juevesDesde,
          juevesHasta: resultConfig.juevesHasta,
          viernesDesde: resultConfig.viernesDesde,
          viernesHasta: resultConfig.viernesHasta,
          sabadoDesde: resultConfig.sabadoDesde,
          sabadoHasta: resultConfig.sabadoHasta,
          domingoDesde: resultConfig.domingoDesde,
          domingoHasta: resultConfig.domingoHasta
        })


      }
      
      console.log('espacio',result)
      setEspacio(result)
    }



    console.log('diass',dias)


    useMemo(()=>{

      if(espacio !== null ){
        
        
        setValor(espacio.valor)
      
        setDuracion({
          duracion:   espacio.DuracionDeTurnos,
          intervalo: espacio.intervaloEntreTurnos,
          anticipacion: espacio.tiempoDeAnticipacion
        })


        setDescripcion(espacio.descripcion)


        setMaxReserva({
          dia: espacio.maxReservasDia,
          semana: espacio.maxReservasSem,
          mes: espacio.maxReservasMes,
          año: espacio.maxReservasAno
        })





      }

    },[espacio,configuracion])



    console.log('form cantidad',form)


    console.log('max reserva',maxReserva)

    const llamadaBloqueado = async(param) => {
      const result =  await getReservaBloqueadoByEspacio(param,token)
      console.log('bloqueaa',result)

      if(result && result.length > 0){
        setForm(result)
      }
    }


    const llamadaConfiguracion = async(param) => {
      const result =  await getConfiguracionId(param,token)
      console.log('configuracion......',result)
      setFormSemana([...formSemana,...result])

       if(result.length > 0){
          for(let val of result){

             if(val.pertenece === 'primerdomingo'){
               setDomingoPrimer(val)
             }

             if(val.pertenece === 'primerlunes'){
              setLunesPrimer(val)
            }

            if(val.pertenece === 'primermartes'){
              setMartesPrimer(val)
            }

            if(val.pertenece === 'primermiercoles'){
              setMiercolesPrimer(val)
            }
             

            if(val.pertenece === 'primerjueves'){
              setJuevesPrimer(val)
            }

          
            if(val.pertenece === 'primerviernes'){
              setViernesPrimer(val)
            }


            if(val.pertenece === 'primersabado'){
              setSabadoPrimer(val)
            }
       }
  
  
    }
  }


    useEffect(()=>{

      if(userId){
       llamadaEspacio(userId)

       llamadaBloqueado(userId)


       llamadaConfiguracion(userId)



      }

   
     

    },[])


    console.log('.....ver',formSemana)

    useEffect(()=>{


      if(espacio !== null){
        if(espacio.descripcion){
          setDescripcion(espacio.descripcion)
        }
     }

    },[espacio])

    useEffect(()=>{


     if(form.length > 1){
      setActivarPadding(true)
     }else{
       setActivarPadding(false)
     }

    },[form] )


 

console.log('result final',lunesPrimer,martesPrimer,miercolesPrimer,juevesPrimer,viernesPrimer,sabadoPrimer,domingoPrimer)

    const handleAddLink = (e,valor) => {
      e.preventDefault()
  
      console.log('valorrrrrr',valor)
      const inputState = {
        fechaInicio:  '',
        desde: '',
        fechaFin: '',
        hasta: ''
        }
  
  
        setForm((prev)=> [...prev,inputState])
  
    }


    const handleAddLinkSemana = (e,valor) => {
      e.preventDefault()
  
      console.log('valorrrrrr',valor)
      const inputState = {
        id: -1,
        pertenece: valor,
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        espacioId: Number(userId),
        desde: '00:00',
        hasta: '00:00'
        }
  
  
        setFormSemana((prev)=> [...prev,inputState])
  
    }
  
    const handleRemoveFieldSemana = async(e,index) => {
      setEliminarSemana(true)
      e.preventDefault()
      console.log('eliminar...esto',formSemana[index])


      if(formSemana[index].id > 0){
        await eliminarConfiguracion(formSemana[index].id,token)
      }


      setFormSemana((prev)=> prev.filter((item)=> item !== prev[index]))
      
      setEliminarSemana(false)
    }


    const handleCheckedSemana=(index,event) => {
      event.preventDefault();
      event.persist()
      
      setFormSemana((prev)=>{
       return prev.map((item,i)=>{
          if(i !== index){
            return item
          }
          return {
            ...item,
            [event.target.name]: event.target.checked
          }
        })
      })
    }

  

    const handleRemoveField = async(e,index) => {



        e.preventDefault()

        setEliminarReservaBtn(true)
        console.log('eliminado',form[index])

        const id = form[index]

        if(id.id){

        
      const result = await eliminarReserva(id.id,token)

      console.log('////',result)
        
        setForm((prev)=> prev.filter((item)=> item !== prev[index]))
    
        setEliminarReservaBtn(false)

        }else{
   
          setForm((prev)=> prev.filter((item)=> item !== prev[index]))
    
        }
     
      
      }
  
    const onChange=(index,event) => {
      event.preventDefault();
      event.persist()
      
      setForm((prev)=>{
       return prev.map((item,i)=>{
          if(i !== index){
            return item
          }
          return {
            ...item,
            [event.target.name]: event.target.value
          }
        })
      })
    }


    const onChangeSemana=(index,event) => {
      event.preventDefault();
      event.persist()
      
      setFormSemana((prev)=>{
       return prev.map((item,i)=>{
          if(i !== index){
            return item
          }
          return {
            ...item,
            [event.target.name]: event.target.value
          }
        })
      })
    }
  
    const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked
      });
    };

    const handleChangeReserva = (event) => {
      setMaxReserva({
        ...maxReserva,
        [event.target.name]: event.target.value
      });

      
    };



    const handleChangeDesdeHasta = (event) => {
      setDesdeHasta({
        ...desdeHasta,
        [event.target.name]: event.target.value
      });
    };


    const handleChangeDuracion = (event) => {
      setDuracion({
        ...duracion,
        [event.target.name]: event.target.value
      });
    };


    const handleChangeDia = (event) => {
      setDias({
        ...dias,
        [event.target.name]: event.target.checked
      });
    };


   


 


const guardar = async () => {


     

   


      
      setBloquear(true)


    const val = formSemana.slice(1)
    
    val.push(lunesPrimer) 
    val.push(martesPrimer)

    val.push(miercolesPrimer)

    val.push(juevesPrimer)

    val.push(viernesPrimer)

    val.push(sabadoPrimer)

    val.push(domingoPrimer)


    let array = []
      for(let valor of val){
            
          if(valor.lunes === true || valor.martes === true || valor.miercoles === true || valor.jueves === true || valor.viernes === true  || valor.sabado === true || valor.domingo === true ||  valor.id > 0){
            array.push(valor)
          }

      }
 

    console.log('arregloooo',array)
    
    const obj = {
      maxReservasDia: maxReserva.dia,
      maxReservasSem: maxReserva.semana,
      maxReservasAno: maxReserva.año,
      maxReservasMes: maxReserva.mes,
      valor: valor,
      descripcion: descripcion,
      DuracionDeTurnos: duracion.duracion,
      tiempoDeAnticipacion: duracion.anticipacion,
      intervaloEntreTurnos: duracion.intervalo,
      lunes: dias.lunes === true ? 1 : 0,
      martes: dias.martes === true ? 1 : 0,
      miercoles: dias.miercoles === true ? 1 : 0,
      jueves: dias.jueves === true ? 1 : 0,
      viernes: dias.viernes === true ? 1 : 0,
      sabado: dias.sabado === true ? 1 : 0,
      domingo: dias.domingo === true ? 1 : 0,
      multiplesReservasEnUnHorario: dias.multiplesReservasEnUnHorario  === true ? 1 : 0 ,
      LimitarAUnSoloEventoAprobado: dias.LimitarAUnSoloEventoAprobado  === true ? 1 : 0 ,
      ProhibirMasDeUnaReservaPendiente:  dias.ProhibirMasDeUnaReservaPendiente  === true ? 1 : 0 ,
      ReservaAmpliada: dias.ReservaAmpliada  === true ? 1 : 0,
      reservas: form,
      config: array
      
    }



    console.log('eeee',obj)

    const result = await modificarEspacio(userId,obj,token)



    if(result && result.message){
      enqueueSnackbar(t(result.message), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      });
    }

    if(result && result.error){

      enqueueSnackbar(t(result.error), {
    variant: 'error',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  });
    }


    setBloquear(false)
    }


/////////handle dias

    const handleDomingo = (event) => {
      setDomingoPrimer({
        ...domingoPrimer,
        [event.target.name]: event.target.checked
      });
    };


    const handleChangeDuracionDomingo = (event) => {
      setDomingoPrimer({
        ...domingoPrimer,
        [event.target.name]: event.target.value
      });
    };


  ////////lunes

  const handleLunes = (event) => {
    setLunesPrimer({
      ...lunesPrimer,
      [event.target.name]: event.target.checked
    });
  };


  const handleChangeDuracionLunes = (event) => {
    setLunesPrimer({
      ...lunesPrimer,
      [event.target.name]: event.target.value
    });
  };

/////Martes



const handleMartes = (event) => {
  setMartesPrimer({
    ...martesPrimer,
    [event.target.name]: event.target.checked
  });
};


const handleChangeDuracionMartes = (event) => {
  setMartesPrimer({
    ...martesPrimer,
    [event.target.name]: event.target.value
  });
};


//Miercoles


const handleMiercoles = (event) => {
  setMiercolesPrimer({
    ...miercolesPrimer,
    [event.target.name]: event.target.checked
  });
};


const handleChangeDuracionMiercoles = (event) => {
  setMiercolesPrimer({
    ...miercolesPrimer,
    [event.target.name]: event.target.value
  });
};



//Jueves


const handleJueves = (event) => {
  setJuevesPrimer({
    ...juevesPrimer,
    [event.target.name]: event.target.checked
  });
};


const handleChangeDuracionJueves = (event) => {
  setJuevesPrimer({
    ...juevesPrimer,
    [event.target.name]: event.target.value
  });
};


//viernes



const handleViernes = (event) => {
  setViernesPrimer({
    ...viernesPrimer,
    [event.target.name]: event.target.checked
  });
};


const handleChangeDuracionViernes = (event) => {
  setViernesPrimer({
    ...viernesPrimer,
    [event.target.name]: event.target.value
  });
};


//sabado



const handleSabado = (event) => {
  setSabadoPrimer({
    ...sabadoPrimer,
    [event.target.name]: event.target.checked
  });
};


const handleChangeDuracionSabado = (event) => {
  setSabadoPrimer({
    ...sabadoPrimer,
    [event.target.name]: event.target.value
  });
};




console.log('reservasss',form)
 
console.log('ver error',erroresSubmit)


    return ( 
        <>
        <ContentWrapper title="Usuarios" >
           <PageTitleWrapper>
        <PageHeader />

        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3"> Configuración </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card className={classes.cardPaddingConfig}>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('¿Permitir múltiples reservas en un mismo horario?')}
                secondary={t('Permite realizar múltiples reservas en el mismo horario.')}
              />
              <Switch
                color="primary"
                
                checked={dias.multiplesReservasEnUnHorario}
                onChange={handleChangeDia}
                name="multiplesReservasEnUnHorario"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('Limitar a sólo un evento aprobado')}
                secondary={t(
                  'Una vez aprobado un evento no es posible realizar una nueva reserva hasta pasada la fecha del evento aprobado.'
                )}
              />
              <Switch
                color="primary"
                checked={dias.LimitarAUnSoloEventoAprobado}
                onChange={handleChangeDia}
                name="LimitarAUnSoloEventoAprobado"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('¿Prohibir más de una reserva pendiente?')}
                secondary={t(
                  'Establece si un residente puede tener más de una reserva pendiente.'
                )}
              />
              <Switch
                color="primary"
                checked={dias.ProhibirMasDeUnaReservaPendiente}
                onChange={handleChangeDia}
                name="ProhibirMasDeUnaReservaPendiente"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('¿Permitir realizar una reserva ampliada?')}
                secondary={t(
                  'Permitir una reserva que abarque varios turnos, el límite será igual a la cantidad de reservas máximas permitidas en un día.'
                )}
              />
              <Switch
                color="primary"
                checked={dias.ReservaAmpliada}
                onChange={handleChangeDia}

                name="ReservaAmpliada"
              />
            </ListItem>
          </List>
            </Card>
        </Grid>

        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3"> Máximo de reserva </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card  className={classes.cardPaddingConfig}>
    <Grid container spacing={3} className={root} p={4}  display="flex">
        <Grid xs={6}
         p={3}
        >
        <TextField
       
          fullWidth
          id="outlined-number"
          label="Máximo de reservas en un día"
          type="number"
          
          error={ erroresSubmit === true &&  maxReserva.dia === null || maxReserva.dia === '' ? true : false}
          key={espacio &&  espacio.maxReservasDia}
          defaultValue={ espacio && espacio.maxReservasDia ? espacio.maxReservasDia  : null }
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChangeReserva}
          name="dia"
        />
            <FormHelperText  className={classes.formText} id="component-helper-text">Cantidad máxima de reservas pendientes o aprobadas que una persona puede tener por día.</FormHelperText>

        </Grid>
        <Grid xs={6}
         p={3}
        >
        <TextField
          error={ erroresSubmit === true &&  maxReserva.semana === null || maxReserva.semana === '' ? true : false}

          fullWidth
          id="outlined-number"
          label="Máximo de reservas en una semana"
          type="number"
          key={ espacio && espacio.maxReservasSem}
          defaultValue={ espacio &&  espacio.maxReservasSem ? espacio.maxReservasSem : null}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChangeReserva}
          name="semana"
        />
           <FormHelperText className={classes.formText}  id="component-helper-text">Cantidad máxima de reservas pendientes o aprobadas que una persona puede tener por semana.</FormHelperText>

     
        </Grid>



    </Grid>

    <Grid container spacing={3} className={root} px={4}  display="flex">
        <Grid xs={6}
         p={3}
        >
        <TextField
                 error={ erroresSubmit === true &&  maxReserva.mes === null || maxReserva.mes === '' ? true : false}

          fullWidth
          id="outlined-number"
          label="Máximo de reservas en un mes"
          type="number"
          key={ espacio && espacio.maxReservasMes}
          defaultValue={ espacio &&  espacio.maxReservasMes ? espacio.maxReservasMes : null}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChangeReserva}
          name="mes"
        />
    <FormHelperText className={classes.formText}   id="component-helper-text">Cantidad máxima de reservas pendientes o aprobadas que una persona puede tener por mes.</FormHelperText>

        </Grid>
        <Grid xs={6}
         p={3}
        >
        <TextField
          error={ erroresSubmit === true &&  maxReserva.año === null || maxReserva.año === '' ? true : false}

          fullWidth
          id="outlined-number"
          label="Máximo de reservas en un año"
          type="number"
          key={ espacio &&  espacio.maxReservasAno}
          defaultValue={espacio &&  espacio.maxReservasAno ? espacio.maxReservasAno  : null }
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChangeReserva}
          name="año"
        />
            <FormHelperText className={classes.formText}  id="component-helper-text">Cantidad máxima de reservas pendientes o aprobadas que una persona puede tener por año.</FormHelperText>

        </Grid>



    </Grid>

    </Card>
        </Grid>






        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3"> Tiempos </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card  className={classes.cardPaddingConfig}>
   

    <Grid container spacing={3} className={root} p={4} >
        <Grid xs={12}
         p={3}
        >
          <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label="Duracion de turno"
        type="time"
        defaultValue="00:00"
        name="duracion"
        onChange={handleChangeDuracion}
        key={espacio && espacio.DuracionDeTurnos}
        defaultValue={espacio && espacio.DuracionDeTurnos}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
     
        </Grid>

        <Grid xs={6}
                 px={3}

        >

<form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label="Intervalo entre turnos"
        placeholder="Intervalo entre turnos"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        name="intervalo"
        onChange={handleChangeDuracion}
        key={espacio && espacio.intervaloEntreTurnos}
        defaultValue={espacio && espacio.intervaloEntreTurnos}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>

        </Grid>

        <Grid xs={6}
                 px={3}

        >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label="Tiempo de anticipacion"
        placeholder="Intervalo entre turnos"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        name="anticipacion"
        key={espacio && espacio.tiempoDeAnticipacion}
        defaultValue={espacio && espacio.tiempoDeAnticipacion}
        onChange={handleChangeDuracion}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>

        </Grid>

        <Grid xs={12}
         pt={3}
         px={3}
        >
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Es posible editar los eventos</InputLabel>
        <Select
          native
          fullWidth
          label="Es posible editar los eventos"
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="si">SI</option>
          <option value="no">NO</option>
     
        </Select>
        <FormHelperText className={classes.formText}  id="component-helper-text">Tiempo de cada turno</FormHelperText>

      </FormControl>
     
        </Grid>
    </Grid>




    </Card>
        </Grid>




        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3">Seleccioná días y horarios </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card  className={classes.cardText} >
    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
          <Grid xs={1}
          mr={2}
          >
          Domingo:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
      <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        type="time"
        disabled={domingoPrimer.domingo === false || domingoPrimer.domingo === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionDomingo}

        key={desdeHasta && desdeHasta.domingoDesde}
        defaultValue={domingoPrimer.desde}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
          <form className={classes.container} noValidate>
      <TextField
         fullWidth
         id="time"
         type="time"
         disabled={domingoPrimer.domingo === false || domingoPrimer.domingo === 0 ? true : false}
 
         name="hasta"
 
         onChange={handleChangeDuracionDomingo}
 
         key={desdeHasta && desdeHasta.domingoDesde}
         defaultValue={domingoPrimer.hasta}
         className={classes.textField}
         InputLabelProps={{
           shrink: true,
         }}
         inputProps={{
           step: 300, // 5 min
         }}
         />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
                color="primary"
                checked={domingoPrimer.domingo}
                onChange={handleDomingo}
                name="domingo"
              />
</Grid>

 <Grid xs={3}>
 <Button onClick={(e)=>handleAddLinkSemana(e,'domingo')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>


 </Grid>




    </Grid>





    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'domingo' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
domingo:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"
defaultValue={item.desde}
disabled={item.domingo === 0 || item.domingo === false ? true : false}

name="desde"
onChange={(event)=>onChangeSemana(index,event)}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>

<TextField
fullWidth
id="time"
type="time"
disabled={item.domingo === 0 || item.domingo === false ? true : false}

name="hasta"
defaultValue={item.hasta}

onChange={(event)=>onChangeSemana(index,event)}



className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
      color="primary"
      checked={item.domingo}
    
      onChange={(event)=>handleCheckedSemana(index,event)}



      name="domingo"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}







    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Lunes:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        disabled={lunesPrimer.lunes === false || lunesPrimer.lunes === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionLunes}

        key={desdeHasta && desdeHasta.lunesDesde}
        defaultValue={lunesPrimer.desde}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
      
        disabled={lunesPrimer.lunes === false || lunesPrimer.lunes === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionLunes}

        key={desdeHasta && desdeHasta.lunesHasta}
        defaultValue={lunesPrimer.hasta}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
               color="primary"
               checked={lunesPrimer.lunes}
               onChange={handleLunes}
               name="lunes"
              />
</Grid>


<Grid xs={3}>

<Button onClick={(e)=>handleAddLinkSemana(e,'lunes')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    </Grid>



    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'lunes'   ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Lunes:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"
disabled={item.lunes === false || item.lunes === 0 ? true : false}
name="desde"
onChange={(event)=>onChangeSemana(index,event)}

key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={item.desde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"
disabled={item.lunes === false || item.lunes === 0 ? true : false}

name="hasta"
onChange={(event)=>onChangeSemana(index,event)}

key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={item.hasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.lunes}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="lunes"
    />
</Grid>





<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}



    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Martes:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        defaultValue={martesPrimer.desde}
     
        disabled={martesPrimer.martes === false || martesPrimer.martes === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionMartes}

        key={desdeHasta && desdeHasta.martesDesde}
        defaultValue={martesPrimer.desde}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        type="time"
     
     
        disabled={martesPrimer.martes === false || martesPrimer.martes === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionMartes}

     
        key={desdeHasta && desdeHasta.martesHasta}
        defaultValue={martesPrimer.hasta}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
           
           color="primary"
           checked={martesPrimer.martes}
           onChange={handleMartes}
           name="martes"
              />

              
</Grid>
<Grid xs={3}>
<Button onClick={(e)=>handleAddLinkSemana(e,'martes')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    </Grid>



    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'martes' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Martes:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"
disabled={item.martes === false || item.martes === 0 ? true : false}


name="desde"

onChange={(event)=>onChangeSemana(index,event)}

key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={item.desde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"

disabled={item.martes === false || item.martes === 0 ? true : false}


name="hasta"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={item.hasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.martes}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="martes"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}







    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Miercoles:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
  

        disabled={miercolesPrimer.miercoles === false || miercolesPrimer.miercoles === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionMiercoles}

        key={desdeHasta && desdeHasta.miercolesDesde}
        defaultValue={miercolesPrimer.desde}


        className={classes.textField}

        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        
        className={classes.textField}
     


        disabled={miercolesPrimer.miercoles === false || miercolesPrimer.miercoles === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionMiercoles}


        key={desdeHasta && desdeHasta.miercolesHasta}
        defaultValue={miercolesPrimer.hasta}

        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
               color="primary"
               checked={miercolesPrimer.miercoles}
               onChange={handleMiercoles}
               name="miercoles"
              />
</Grid>

<Grid xs={3}>
<Button onClick={(e)=>handleAddLinkSemana(e,'miercoles')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    </Grid>



    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'miercoles' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Miercoles:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"

disabled={item.miercoles === false || item.miercoles === 0 ? true : false}


name="desde"

onChange={(event)=>onChangeSemana(index,event)}

key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={desdeHasta && desdeHasta.domingoDesde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"

disabled={item.miercoles === false || item.miercoles === 0 ? true : false}


name="hasta"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={desdeHasta && desdeHasta.domingoHasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.miercoles}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="miercoles"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}




    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Jueves:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
       
   
        disabled={juevesPrimer.jueves === false || juevesPrimer.jueves === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionJueves}

       


        key={desdeHasta && desdeHasta.juevesDesde}
        defaultValue={juevesPrimer.desde}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
      

        disabled={juevesPrimer.jueves === false || juevesPrimer.jueves === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionJueves}


        key={desdeHasta && desdeHasta.juevesHasta}
        defaultValue={juevesPrimer.hasta}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
               color="primary"
               checked={juevesPrimer.jueves}
               onChange={handleJueves}
               name="jueves"
              />
</Grid>
    
<Grid xs={3}>
<Button onClick={(e)=>handleAddLinkSemana(e,'jueves')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    
    </Grid>




    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'jueves' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Jueves:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"

disabled={item.jueves === false || item.jueves === 0 ? true : false}

name="desde"

onChange={(event)=>onChangeSemana(index,event)}

key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={item.desde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"


disabled={item.jueves === false || item.jueves === 0 ? true : false}

name="hasta"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={item.hasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.jueves}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="jueves"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}




    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Viernes:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
      
        disabled={viernesPrimer.viernes === false || viernesPrimer.viernes === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionViernes}



        key={desdeHasta && desdeHasta.viernesDesde}
        defaultValue={viernesPrimer.desde}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        


        disabled={viernesPrimer.viernes === false || viernesPrimer.viernes === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionViernes}


        key={desdeHasta && desdeHasta.viernesHasta}
        defaultValue={viernesPrimer.hasta}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
                 
               color="primary"
               checked={viernesPrimer.viernes}
               onChange={handleViernes}
               name="viernes"
              />
</Grid>
<Grid xs={3}>
<Button onClick={(e)=>handleAddLinkSemana(e,'viernes')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    </Grid>





    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'viernes' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Viernes:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"

disabled={item.viernes === false || item.viernes === 0 ? true : false}

name="desde"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={item.desde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"

disabled={item.viernes === false || item.viernes === 0 ? true : false}

name="hasta"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={item.hasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.viernes}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="viernes"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}



    <Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="center"> 
          <Grid xs={1}
          mr={2}
          >
          Sabado:
          </Grid>
          <Grid xs={2}
            mr={2}
          >
        <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        
   
        disabled={sabadoPrimer.sabado === false || sabadoPrimer.sabado === 0 ? true : false}

        name="desde"

        onChange={handleChangeDuracionSabado}


        key={desdeHasta && desdeHasta.sabadoDesde}
        defaultValue={sabadoPrimer.desde}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
          <Grid xs={2}
        mr={2}

          >
       <form className={classes.container} noValidate>
      <TextField
      fullWidth
        id="time"
        label=""
        type="time"
        
  
        disabled={sabadoPrimer.sabado === false || sabadoPrimer.sabado === 0 ? true : false}

        name="hasta"

        onChange={handleChangeDuracionSabado}

        key={desdeHasta && desdeHasta.sabadoHasta}
        defaultValue={sabadoPrimer.hasta}

        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
          </Grid>
      
        <Grid xs={3}
                

        >
      <span p={3}>deshabilitar/habilitar</span>
<Switch
               
               color="primary"
               checked={sabadoPrimer.sabado}
               onChange={handleSabado}
               name="sabado"
           
              />
</Grid>
<Grid xs={3}>
<Button onClick={(e)=>handleAddLinkSemana(e,'sabado')} variant="outlined" color="secondary" className="add">
        <AddIcon />
        </Button>



</Grid>
    </Grid>








    {formSemana.map((item,index)=>(

<>
{item.pertenece === 'sabado' ? 
 
<Grid container spacing={3} className={root} p={4}  display="flex"  alignItems="end"> 
<Grid xs={1}
mr={2}
>
Sabado:
</Grid>
<Grid xs={2}
  mr={2}
>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
type="time"

disabled={item.sabado === false || item.sabado === 0 ? true : false}

name="desde"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoDesde}
defaultValue={item.desde}
className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>
<Grid xs={2}
mr={2}

>
<form className={classes.container} noValidate>
<TextField
fullWidth
id="time"
label=""
type="time"
disabled={item.sabado === false || item.sabado === 0 ? true : false}

name="hasta"

onChange={(event)=>onChangeSemana(index,event)}


key={desdeHasta && desdeHasta.domingoHasta}
defaultValue={item.hasta}


className={classes.textField}
InputLabelProps={{
shrink: true,
}}
inputProps={{
step: 300, // 5 min
}}
/>
</form>
</Grid>

<Grid xs={3}
      

>
<span p={3}>deshabilitar/habilitar</span>
<Switch
     
     color="primary"
      checked={item.sabado}
      onChange={(event)=>handleCheckedSemana(index,event)}
      name="sabado"
    />
</Grid>

<Grid xs={3}>

<Button disabled={eliminarSemana} onClick={(e)=>handleRemoveFieldSemana(e,index)} variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
        </Button>


</Grid>




</Grid>
 : null}
</>
))}


    </Card>

        </Grid>










        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3"> Bloqueos en calendarios</Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
<Card className={classes.cardPaddingConfig}>


{form.map((item,index)=>(
<>
<Grid xs={12} mt={1}  px={5} py={2}>
<TextField
       
       fullWidth
       id="outlined-number"
       label="Ingrese nombre"
       placeholder="Ingrese nombre"
             type="text"
             variant="outlined"
             name="nombre"
             value={item.nombre}
             onChange={(e)=>onChange(index,e)}
     />
        </Grid>

<Grid  container px={5}  xs={12} display="flex">

  <Grid xs={5}>
    <Typography variant="h4" component="h4">
    <h4>Fecha de inicio</h4>
</Typography>
  </Grid>

  <Grid xs={7}>
  <Typography variant="h4" component="h4">
    <h4>Fecha de fin</h4>
</Typography>
  </Grid>
</Grid>

<Grid container  className={root}  display="flex"  px={4}  alignItems="center"> 
  





 
    


    
      <Grid xs={12} key={index} pt={activarPadding === true ? 2 : 0}  display="flex" >
     
     
     

     <Grid xs={5} display="flex">

        <Grid xs={6}
        mr={1}
        p={1}
        >
        <form className={classes.container} noValidate>
        <TextField
        id="date"
        fullWidth
        label="Seleccionar una fecha"
        type="date"
        placeholder="Seleccionar una fecha"
        name="fechaInicio"
        value={item.fechaInicio}
        onChange={(e)=>onChange(index,e)}
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
        </form>
        </Grid>


        <Grid xs={6}
        mr={2}
        p={1}
        >


        <form className={classes.container} noValidate>
        <TextField
        fullWidth
        id="time"
        label="Seleccionar hora"
        type="time"
        name="desde"
        value={item.desde}
        onChange={(e)=>onChange(index,e)}
        className={classes.textField}
        placeholder="Seleccionar una hora"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        inputProps={{
        step: 300, // 5 min
        }}
        />
        </form>
        </Grid>
        </Grid>



        <Grid xs={7}


        display="flex"
        >

        <Grid xs={4}
        mr={1}
        p={1}
        >
            <form className={classes.container} noValidate>
        <TextField
        id="date"
        fullWidth
        label="Seleccionar una fecha"
        type="date"
        placeholder="Seleccionar una fecha"
        className={classes.textField}
        name="fechaFin"
        value={item.fechaFin}
        onChange={(e)=>onChange(index,e)}
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
        </form>
        </Grid>
        <Grid xs={4}
        mr={2}
        p={1}
        >
        <form className={classes.container} noValidate>
        <TextField
        fullWidth
        id="time"
        label="Seleccionar hora"
        defaultValue="00:00"
        type="time"
        name="hasta"
        value={item.hasta}
        onChange={(e)=>onChange(index,e)}
        className={classes.textField}
        placeholder="Seleccionar una hora"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        inputProps={{
        step: 300, // 5 min
        }}
        />


        </form>


        </Grid>




        <Grid xs={3} mt={1} >




        { form.length  &&  
<>
        <Button  disabled={eliminarReservaBtn} onClick={(e)=>handleRemoveField(e,index)} variant="outlined" color="secondary" className="garbage">

     
            

            <DeleteIcon />

        

        </Button>
</>
        }
            </Grid>

        </Grid>

        </Grid>
           



        








 




         
         
         
     
        
</Grid>


</>
))}


<Grid xs={12} mt={1} px={1} pt={2} pb={3}>
        <Button variant="contained" fullWidth color="primary"  onClick={(e)=>handleAddLink(e,'pepa')}>
        Agregar bloqueo en calendario
              </Button>
        </Grid>
</Card>
  
   </Grid> 


        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3">Agregar descripción </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card  className={classes.cardText} >
        <EditorWrapper>
            <ReactQuill
         
             value={descripcion} onChange={setDescripcion}   
            />
        </EditorWrapper>
    </Card>

        </Grid>



        










        <Grid item lg={12} xs={12} mt={4}>
<Typography variant="h3">Valor de la reserva </Typography>
<div className={classes.texto}>{'Choose what notifications you want to receive'}</div>
    

    <Card  className={classes.cardPaddingConfig}>
    <Grid container  className={root} p={4}  display="flex">
        <Grid xs={6}
         p={3}
        >
        <TextField
          key={espacio && espacio.valor}
          fullWidth
          id="outlined-number"
          label="Costo de la reserva por turno"
          defaultValue={espacio && espacio.valor}
                    type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => setValor(e.target.value)}
          variant="outlined"
        />

        </Grid>

        <Grid xs={6}
         py={4} px={3}
        >
        <Box>
       
        <Typography color="secondary"   className={classes.formText}>Cantidad máxima de reservas pendientes o aprobadas que una persona puede tener por día.</Typography>

        </Box>

        </Grid>

        </Grid>
        </Card>
        </Grid>


        

        <Grid xs={12} mt={4}>
        <Button disabled={bloquear}
        
          
        onClick={guardar} variant="contained" fullWidth color="primary">
        Guardar cambios
      </Button>
        </Grid>



        
      
      </PageTitleWrapper>
      <Container maxWidth="lg">
        
 
     </Container>
    </ContentWrapper>
        </>
     );
}
 
export default Configuracion
import { useState,useEffect,useContext } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  TextField,
  Grid,
  CardHeader,
  Tab,
  Box,
  Tabs,
  Typography,
  Divider,
  FormControl,
  Tooltip,
  InputAdornment,
  FormControlLabel,
  IconButton,
  InputLabel,
  Select,
  Card,
  Button
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import {getDeportes} from 'src/api/deportes'
import {getClubs,getDisciplinaXClub, getClubXUsuarioById,getUsuariosXClub,getUsuariosXClubAll } from 'src/api/club'
import {getDivisionXClubXDisciplina} from 'src/api/division'
import {getPosicionFiltro} from 'src/api/posiciones'
import {getFiltroUsuario,getUsuarios} from 'src/api/usuarios'
import AuthContext from 'src/contexts/JWTAuthContext';
import {getFiltroUsuarioXclubXDeporte,getFiltroUsuarioXclubXDeporteXDiv,getFiltroUsuarioXclubXDeporteXDivXPos} from 'src/api/filtro'
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const TabsContainerWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
  `
);

function AdditionalInfo(props) {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const token = window.localStorage.getItem('accessToken');

  const [deportes,setDeportes] = useState(null)
  const [clubs,setClubs] = useState(null)
  const [clubsId,setClubsId] = useState(null)
  const [deporteId,setDeporteId] = useState(null)
  const [categorias,setCategorias] = useState(null)
  const [posiciones,setPosiciones] = useState(null)
  const [usuarios,setUsuarios] = useState(null)
  const [categoriaId,setCategoriaId] = useState(null)
  const [resultUsuarios, setResultUsuarios] = useState([])
  const [guardandoDeportesClub, setGuardandoDeportesClub] = useState({
    deporte: '',
    club: '',
    division: ''
  })

///filtros



  ///////////

  const llamadaDeportes = async(param) => {
    const result = await getDisciplinaXClub(param,token)
    const resultUsuario = await  getUsuariosXClub(param,token)

    console.log('deportesssss',result)
    console.log('usuarios',resultUsuario)
    setDeportes(result)
    setResultUsuarios(resultUsuario)
  }

  const llamadaCategorias = async(param) => {
    console.log('son deporte',param)

    const resultClubDeporte = await getFiltroUsuarioXclubXDeporte(param.clubId,param.id,token)
    setResultUsuarios(resultClubDeporte)

    setGuardandoDeportesClub({
      deporte: param.id,
      club: param.clubId
    })
    const result = await getDivisionXClubXDisciplina(param.clubId,param.disciplinaId,token)
   console.log('son divisiones',result)
    setCategorias(result)
  }
  


  ////kkk
  const llamadaUsuarios = async(param) => {


  const resultFinal = await getFiltroUsuarioXclubXDeporteXDivXPos(guardandoDeportesClub.club,guardandoDeportesClub.deporte,guardandoDeportesClub.division,param.disciplinaxclubxposId,token)

  console.log('usuarios con las posicones',resultFinal)
  setResultUsuarios(resultFinal)


   const result = await getFiltroUsuario(param.disciplinaxclubxposId,param.disxclubxdivId,token)
    setUsuarios(result)
 

  }

  const renderUsuario = async(id) => {
    console.log('id de usuario',id)
    
    const resultUsuario = await  getClubXUsuarioById(id,token)
    let arr = []
    arr.push(resultUsuario)
    setResultUsuarios(arr)
    
  }
  

  const llamadaClubs = async() => {
    const result = await getClubs(token)

    setClubs(result)
}

const llamarPosicion = async(param) => {
const resultFinal =  await  getFiltroUsuarioXclubXDeporteXDiv(guardandoDeportesClub.club,guardandoDeportesClub.deporte,param.id,token)
  //console.log('303030',resultFinal)  
  setGuardandoDeportesClub({
    ...guardandoDeportesClub,
    division: param.id
  })
  setResultUsuarios(resultFinal)

const result = await getPosicionFiltro(param.id,token)
 //  console.log('hola resultado posiciones',result)
   
    setPosiciones(result)
}


const getTodos = async(param) => {
  
  let parseParam = Number(param)

  if(parseParam === 0 ){
    const result = await  getUsuariosXClubAll(token)

    const resultFinal = result.filter(val => val.id !== user.userId)
    setResultUsuarios(resultFinal)

    console.log('usariosss',resultFinal)

  }else{
    const result = await  getUsuariosXClub(parseParam,token)
    const resultFinal = result.filter(val => val.rol.nombre.toLowerCase() !== 'superadmin')
  
    console.log('todooos',resultFinal)
    setResultUsuarios(resultFinal)
  }
 
}

  useEffect(()=>{


    llamadaClubs()   

  },[])


  useEffect(()=>{

  props.onchangeResult(resultUsuarios)    

  },[resultUsuarios])


    useEffect(()=>{
    console.log('acaaa eliminar id en addi',props.eliminarId)

      console.log('result final',resultUsuarios)
 
    if(Array.isArray(props.eliminarId)){
      let arr = []
      for(let val of resultUsuarios ){

        if(!props.eliminarId.includes(val.id)){
            arr.push(val)
        }

      }

      setResultUsuarios(arr)

    }else{
  let filterResult = resultUsuarios.filter(val => val.usuario.id !== props.eliminarId)
setResultUsuarios(filterResult)

    }
 


  },[props.eliminarId])
  
//{id: 72, activo: 1, clubId: 135, disciplinaId: 185, disciplina: {…}}
  console.log('rrrrr',resultUsuarios)


 
  const [currentTab, setCurrentTab] = useState('general');

  const tabs = [
    { value: 'general', label: 'Enviar a:' },
    { value: 'inventory', label: 'Enviar a todos:' },
 
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <CardHeader title={t('Elegir a quien enviar')}></CardHeader>
      <Divider />
      <TabsContainerWrapper>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))} 
        </Tabs>
      </TabsContainerWrapper>
      <Divider />
      <Box p={3}>
        {currentTab === 'general' && (

          <>


          <Grid   display="flex"  >

       
         
            <Grid item xs={12} md={3}>
            <Typography align="center" variant="h6">Club</Typography>

              <FormControl fullWidth variant="outlined">
                <InputLabel>{t('Todos')}</InputLabel>
                <Select
                
                  label={t('Club')}
                  placeholder="Club..."
                onChange={event => llamadaDeportes( event.target.value )}
                >
                  

                  {clubs && clubs.map((val) => (
                    <MenuItem key={val.id} value={val.id}>
                      {val.nombre} 
                    </MenuItem>
                  ))}
             
                </Select>
              </FormControl>
              

                  


            </Grid>
            <ArrowForwardIosIcon className="icon-flecha-notificaciones" />

            <Grid item xs={12} md={3}>
            <Typography align="center" variant="h6" >Disciplinas</Typography>

              <FormControl fullWidth variant="outlined">
                <InputLabel>{t('Todos')}</InputLabel>
                <Select
                
                  label={t('Disciplina')}
                  placeholder="Disciplina..."
                  onChange={event => llamadaCategorias( event.target.value )}

                >
                  

                  {deportes && deportes !== null ? deportes.map((val) => (
                    <MenuItem key={val.id} value={val}>
                      {val.disciplina.nombre}
                    </MenuItem>
                  )) : 
                  <MenuItem key='0' value='0'>
                  
                  {'No contiene disciplinas'}
                </MenuItem>
                  }
             
                </Select>
              </FormControl>
              

                  


            </Grid>
            <ArrowForwardIosIcon className="icon-flecha-notificaciones" />
        
            <Grid item xs={12} md={3}>
              <Typography align="center" variant="h6" >Division</Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tax_class">{t('Todos')}</InputLabel>
                <Select
                      label={t('Todos')}
                      placeholder="Division..."
                      onChange={event => llamarPosicion( event.target.value )}

                >
                  

                  {categorias && categorias.length > 0 ? categorias.map((val) => (
                    <MenuItem key={val.id} value={val}>
                      {val.nombre}
                    </MenuItem>
                  )): 
                  <MenuItem key='0' value='0'>
                  {'No contiene categorias'}
                </MenuItem>
                  
                  }

                </Select>
              </FormControl>
            </Grid>
            <ArrowForwardIosIcon className="icon-flecha-notificaciones" />

            <Grid item xs={12} md={3}>
            <Typography align="center" variant="h6">Posición</Typography>

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tax_status">{t('Todos')}</InputLabel>
                <Select
                  
                  label={t('Posicion')}
                  placeholder="Posicion..."
                  onChange={event => llamadaUsuarios( event.target.value )}

              
                >
                    {posiciones && posiciones.length > 0 ? posiciones.map((val) => (
                    <MenuItem key={val.id} value={val}>
                      {val.nombre}
                    </MenuItem>
                  )) :
                  <MenuItem key='0' value='0'>
                  {'No contiene posiciones'}
                </MenuItem>
                
                }

                </Select>
              </FormControl>
            </Grid>
         
        
          </Grid>
          </>
          
        )}
        {currentTab === 'inventory' && (
          <Grid container spacing={3}
          display="flex"
          justifyContent="center">
          

            <Grid item xs={12} md={12}
          mb={3}
            >
              <FormControl fullWidth variant="outlined">
                <InputLabel>{t('Todos')}</InputLabel>
                <Select
                
                  label={t('Todos')}
                  placeholder="Selecciona..."
                onChange={event => getTodos( event.target.value )}
                >
                    <MenuItem key="0" value="0">
                      Todos Los usuarios
                    </MenuItem>

                  {clubs && clubs.map((val) => (
                    <MenuItem key={val.id} value={val.id}>
                      {`Todos los usuarios del club ${val.nombre}`} 
                    </MenuItem>
                  ))}
             
                </Select>
              </FormControl>
              

                  


            </Grid>
          </Grid>
        )}
        {currentTab === 'shipping' && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                  fullWidth
                  name="weight"
                  value={12}
                  variant="outlined"
                  label={t('Weight')}
                  placeholder={t('Write weight ...')}
                />
                <Tooltip
                  arrow
                  placement="top"
                  title={t(
                    'Your have the weight units set to kilograms in your app settings'
                  )}
                >
                  <IconButton size="small" sx={{ ml: 1 }} color="primary">
                    <HelpOutlineTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">CM</InputAdornment>
                  )
                }}
                fullWidth
                name="length"
                variant="outlined"
                label={t('Length')}
                placeholder={t('Write length ...')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">CM</InputAdornment>
                  )
                }}
                fullWidth
                name="width"
                variant="outlined"
                label={t('Width')}
                placeholder={t('Write width ...')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="shipping_class">
                  {t('Shipping class')}
                </InputLabel>
                <Select
                  native
                  label={t('Shipping class')}
                  inputProps={{
                    name: 'shipping_class'
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>{t('No shipping class')}</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
            <Button
        fullWidth
       
        variant="outlined"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        
      >
         Añadir segmentación
      </Button>
      </Box>
    </Card>
  );
}

export default AdditionalInfo;

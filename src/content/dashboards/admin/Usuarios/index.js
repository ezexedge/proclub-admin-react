import { useState, useEffect, useCallback } from 'react';


import axios from 'src/utils/axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import ContentWrapper from 'src/components/ContentWrapper';
import {Grid ,Container,Typography,Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import useRefMounted from 'src/hooks/useRefMounted';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import jwtDecode from 'jwt-decode';
import {getUsuariosXClub} from 'src/api/club'

import Results from './Results'

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

    }
  }));

 //All aspects related to the app users can be managed from this page

const Usuarios = () => {
    const classes = useStyles();
    const token = window.localStorage.getItem('accessToken');

    const isMountedRef = useRefMounted();
    const [users, setUsers] = useState([]);
    const [usuarios,setUsuarios] = useState([])
    const [actualizar,setActualizar] = useState(false)

    const getUsers = useCallback(async () => {
      try {
        const response = await axios.get('/api/users');
  
        if (isMountedRef.current) {
          setUsers(response.data.users);
        }
      } catch (err) {
        console.error(err);
      }
    }, [isMountedRef]);
 
    const accessToken = window.localStorage.getItem('accessToken');
    const usuario = jwtDecode(accessToken);

    console.log('respuestaaaaa',usuario)

    const llamadaUsuarioXClub = async(param) => {
      const result =  await getUsuariosXClub(param,token)
      console.log('usuagiroxclub',result)


      if(result){
        let arr = []
        for(let val of result){

          let obj = {
            usuarioId: val.usuarioId,
            nombre: `${val.usuario !== null && val.usuario.persona !== null ? val.usuario.persona.nombre : ''} ${val.usuario !== null && val.usuario.persona !== null ? val.usuario.persona.apellido : ''}`,
            rol: val.rol !== null ? val.rol.nombre : 'No tiene rol' ,
            documento: val.usuario.persona.documento ? val.usuario.persona.documento : 'No ingreso',
            telefono: val.usuario !== null && val.usuario.persona !== null ? val.usuario.persona.telefono  : 'No ingreso',
            estado: val.estado.id === 3 ?  'pendiente' : 'aprobado',
            deportes: val.deportes

          }
          arr.push(obj)
        }
        setUsuarios(arr)

      }

    }


    const actualizarChange = (newName)=>{
      setActualizar(newName);
   };
    
    useEffect(() => {
  
      if(usuario.clubId){
        llamadaUsuarioXClub(usuario.clubId)

      }


    }, []);

    console.log('usuarioooss',usuarios)

    useEffect(() => {
  
      
      if(actualizar === true){
        llamadaUsuarioXClub(usuario.clubId)
        setActualizar(false)
      }


    }, [actualizar]);


    return ( 
        <ContentWrapper title="Usuarios" >
           <PageTitleWrapper   >
        <PageHeader actualizarChange={(e)=>{actualizarChange(e)}} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
  

      <Card className={classes.card}>
      <Results users={usuarios} actualizarChange={(e)=>{actualizarChange(e)}}  />
        </Card>
        <Box m={5} /> 
     </Container>
    </ContentWrapper>
     );
}
 
export default Usuarios;
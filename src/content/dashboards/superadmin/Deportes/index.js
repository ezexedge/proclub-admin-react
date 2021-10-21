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
import {getDeportes} from 'src/api/deportes'
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

const Deportes = () => {
    const classes = useStyles();
    const [deportes,setDeportes] = useState([]) 
    const token = window.localStorage.getItem('accessToken');

    const isMountedRef = useRefMounted();
    const [users, setUsers] = useState([]);
    const [actualizar,setActualizar] = useState(false)
  
    const getUsers = useCallback(async () => {
      try {
        const response = await axios.get('/api/deportes');
  
        if (isMountedRef.current) {
          setUsers(response.data.users);
        }
      } catch (err) {
        console.error(err);
      }
    }, [isMountedRef]);
  
    const llamadaDeportes = async() => {
      const result = await getDeportes(token)
      console.log(result)
      setDeportes(result)
    }
    const onchange = (data) => {
      setActualizar(data)
  }

    useEffect(() => {

   

      llamadaDeportes()
      getUsers();
    }, []);

    useEffect(() => {
      

      if(actualizar === true){

        llamadaDeportes()


        setActualizar(false)
      }
      
          }, [actualizar]);



    return ( 
        <ContentWrapper title="Clubs" >
           <PageTitleWrapper>
        <PageHeader  onchange={(e) => { onchange(e) }}/>
      </PageTitleWrapper>
      <Container maxWidth="lg">
  

      <Card className={classes.card}>
      <Results users={deportes} onchange={(e) => { onchange(e) }}/>
        </Card>
        <Box m={5} /> 
     </Container>
    </ContentWrapper>
     );
}
 
export default Deportes;
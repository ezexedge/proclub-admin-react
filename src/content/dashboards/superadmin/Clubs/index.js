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
import {getClubs} from 'src/api/club'
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

const Club = () => {
    const classes = useStyles();

    const [clubs,setClubs]= useState([])

    const isMountedRef = useRefMounted();
    const [users, setUsers] = useState([]);
  
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
  
    useEffect(() => {


      const llamadaClubs = async () => {
        const result =  await getClubs()
        console.log('club',result)
        setClubs(result)
        
      }

      llamadaClubs()

      getUsers();
    }, []);


    return ( 
        <ContentWrapper title="Clubs" >
           <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
  

      <Card className={classes.card}>
      <Results users={clubs} />
        </Card>
        <Box m={5} /> 
     </Container>
    </ContentWrapper>
     );
}
 
export default Club;
import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid , Box,
Button,
Typography
} from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';


const useStyles = makeStyles((theme) => ({

    avatar: {
        height: '109px!important',
        width: '109px!important'
    },
    modified: {

height: '50px',
width: '256px',

borderRadius: '6px',
padding: '22px, 32px, 22px, 32px',
color: 'white',
backgroundColor: '#44D600!important',
marginLeft: '13px!important'


    }
    
    ,
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
marginLeft: '17px!important'
        
    },
    card:{
        marginTop: '41px!important',
        background: '#FFFFFF',
        boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        border: '6px'

    },

  
  container:{
      width: '100%!important',
      heigth: 'auto!important',
      padding: '34px!important'
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
    textEnd:{
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
color: '#223354'


    },
    headerStyle:{
  
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
    headerHelp:{
  
        with: '16px!important',
        height: '16px!important',
        /* Color States/Common/Black */
        color: '#223354',
        marginTop: '2px!important',
        opacity: '0.5'
        
            },
       textCard:{
     
fontFamily: 'Roboto!important',
fontStyle: 'normal!important',
fontWeight: 'normal!important',
fontSize: '22px!important',
lineHeight: '26px!important',

/* Color States/Common/Black */
color: '#223354!important'


       },

       subTitle:{

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '15px',
lineHeight: '150.6%',
color: '#223354',
opacity: '0.8',

       }

  }));


function ManagementProjects() {
    const classes = useStyles();

  const isMountedRef = useRefMounted();
  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get('/api/projects');

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <ContentWrapper title="Projects - Management">
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
     
 

    </ContentWrapper>
  );
}

export default ManagementProjects;

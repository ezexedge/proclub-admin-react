import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import ContentWrapper from 'src/components/ContentWrapper';
import {Grid ,Container,Typography,Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';


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
        fontWeight: '700!important'
        
    },
    card:{
        marginTop: '41px!important'
    }
  }));

 //All aspects related to the app users can be managed from this page

const Dashboard = () => {
    const classes = useStyles();
    return ( 
      <ContentWrapper title="Clubs" >
      <PageTitleWrapper>
   <PageHeader />
 </PageTitleWrapper>
 <Container maxWidth="lg">


 <Card className={classes.card}>

   </Card>
   <Box m={5} /> 
</Container>
</ContentWrapper>
     );
}
 
export default Dashboard;
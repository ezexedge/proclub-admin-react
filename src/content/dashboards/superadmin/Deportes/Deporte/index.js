import {useState, useCallback, useEffect } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import {getDeporteID} from 'src/api/deportes'
import {
  Avatar,
  Box,
  LinearProgress,
  Card,
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
  Zoom
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


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
paddingTop: '24px'

    },
    iconoStyle:{
      fontSize: '42px!important'
      

    }
  }));


const Deporte = () => {
    const classes = useStyles();

    const isMountedRef = useRefMounted();
    const [user, setUser] = useState(null);
    const [deporte,setDeporte] = useState()
    // @ts-ignore
    const { userId } = useParams();
    const { t } = useTranslation();
  
    const [currentTab, setCurrentTab] = useState('activity');
  
    const tabs = [
      { value: 'activity', label: t('Activity') },
      { value: 'edit_profile', label: t('Edit Profile') },
      { value: 'notifications', label: t('Notifications') },
      { value: 'security', label: t('Passwords/Security') }
    ];
  
    const handleTabsChange = (event, value) => {
      setCurrentTab(value);
    };
  
    const getUser = useCallback(async () => {
      try {
        const response = await axios.get('/api/deporte', {
          params: {
            userId
          }
        });
        if (isMountedRef.current) {
          setUser(response.data.user);
        }

        console.log(response)
      } catch (err) {
        console.error(err);
      }
    }, [userId, isMountedRef]);
  
    useEffect(() => {
      

    const llamadaId = async () => {
      const result = await getDeporteID(userId)
      console.log(result)
      setDeporte(result)
    }

    llamadaId()
 

    }, []);
  
  

    

    return ( 
        <div className={classes.container}>
            <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
>

  <Box className={classes.boxIcon}>

  <span className="material-icons-outlined"  >
      <span className={classes.iconoStyle}> {deporte && deporte.icono}</span>
   </span>
                            

  </Box>

<p className={classes.titulo}>{deporte && deporte.nombre}</p>

    </Grid>

    <Box m={3} />
    <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  spacing={3}
>

<Grid item xs={3}>
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
                  Clubes vinculados
              </Typography>

              <Box m={0.5} />
    <div className={classes.cardSubtitle}>{'4500'}<span className={classes.cardSubtitle2}>{'/1000'}</span></div>
  
  
    

    </Grid>
    <Box m={2} />
    <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />

          </Paper>
</Grid>
<Grid item xs={3}>
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
    <div className={classes.cardSubtitle}>{'4500'}<span className={classes.cardSubtitle2}>{'/1000'}</span></div>
  
  
    

    </Grid>
    <Box m={2} />
    <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />

          </Paper>
</Grid>
        
<Grid item xs={3}>
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
                  Manager vinculados
              </Typography>

              <Box m={0.5} />
    <div className={classes.cardSubtitle}>{'4500'}<span className={classes.cardSubtitle2}>{'/1000'}</span></div>
  
  
    

    </Grid>
    <Box m={2} />
    <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />

          </Paper>
</Grid>
</Grid>
      </div>
     );
}
 
export default Deporte;
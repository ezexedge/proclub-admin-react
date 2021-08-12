import React,{useState, useCallback, useEffect } from 'react';
import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import {getDeportesIDXClubID} from 'src/api/deportes'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import EditIcon from '@material-ui/icons/Edit';


import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  CardHeader,
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


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
marginLeft: '40px!important',
marginTop: '0px!important'
        
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
      fontSize: '42px!important',
      marginLeft: '24px!important'

    },
    headerTap:{
      backgroundColor: '#F6F8FB!important',
      boxShadow: '0px 0px!important',
    
      
    },
    contenidoTap:{
      marginBottom: '40px!important'
    },
    editIcon: {
      marginTop: '27px!important',
      with:'18px!important',
      height:'18px!important'
  },
  editText:{
      color: '#6B64F8!important',
      marginTop: '27px!important',
      marginRight: '15px!important',
      marginLeft: '3px!important',
      cursor: 'pointer!important'
  
  },
  resetPadding: {
    padding: '0px!important'
  },
  titleInformacion: {
    /* Mail: Teléfono: Dirección: */
  display: 'flex!important',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '150%',
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
  color: 'black'
  
  
  }
  }));


const Deporte = () => {
    const classes = useStyles();

    const isMountedRef = useRefMounted();
    const [user, setUser] = useState(null);
    const [deporte,setDeporte] = useState(null)
    const [value, setValue] = React.useState(0);

    // @ts-ignore
    const { userId } = useParams();

    console.log('///////////////////soy el id del deportes',userId)

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
      

    const llamadaId = async (club,user) => {
      const result = await getDeportesIDXClubID(club,user)
      console.log('resultadoo',result[0])
      setDeporte(result[0])
    }

    llamadaId(135,userId)
 

    }, []);
  
  

    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return ( 
        <div className={classes.container}>
            <Grid
  container
  direction="row"
  justifyContent="space-between"

  alignItems="flex-start"
>

  <Box className={classes.boxIcon} display="flex">

  <span className="material-icons-outlined"  >
      <span className={classes.iconoStyle}> {deporte && deporte.disciplina.icono}</span>
   </span>
     
<p className={classes.titulo}>{deporte && deporte.disciplina.nombre}</p>
                       

  </Box>

  <Box display="flex">
  <Button variant="outlined" color="secondary" className="garbage">
        <DeleteIcon />
      </Button>
  <Button
        
        variant="contained"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        className={classes.modified}
      
      >
        Añadir  una división
      </Button>
      </Box>
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

<Box  mt={10}/>

<div>
<AppBar position="static" className={classes.headerTap}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  className={classes.contenidoTap} >
          <Tab label="Division A" {...a11yProps(0)} />
          <Tab label="División B" {...a11yProps(1)} />
          <Tab label="Ingresos" {...a11yProps(2)} />
          <Tab label="Notificaciones" {...a11yProps(3)} />
          <Tab label="Configuracion" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Card>
      <TabPanel value={value} index={0}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
               <CardHeader
        title={'Division A'}
        subheader="Manage informations related to your personal details"

      />
      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>
      </Box>
      <Divider />

      <Box ml={15} mt={5}>
      <Box xs={12}  display="flex" >
             <p  className={classes.titleInformacion}>En construccion</p>
         </Box>
        </Box>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
               <CardHeader
        title={'Division B'}
        subheader="Manage informations related to your personal details"

      />
      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>
      </Box>
      <Divider />

      <Box ml={15} mt={5}>
      <Box xs={12}  display="flex" >
             <p  className={classes.titleInformacion}>En construccion</p>
         </Box>
        </Box>
        
      </TabPanel>
   
      <TabPanel value={value} index={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
               <CardHeader
        title={'Ingresos'}
        subheader="Manage informations related to your personal details"

      />
      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>
      </Box>
      <Divider />

      <Box ml={15} mt={5}>
      <Box xs={12}  display="flex" >
             <p  className={classes.titleInformacion}>En construccion</p>
         </Box>
        </Box>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
               <CardHeader
        title={'Notificaciones'}
        subheader="Manage informations related to your personal details"

      />
      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>
      </Box>
      <Divider />

      <Box ml={15} mt={5}>
      <Box xs={12}  display="flex" >
             <p  className={classes.titleInformacion}>En construccion</p>
         </Box>
        </Box>
        
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        >
               <CardHeader
        title={'Configuraciones'}
        subheader="Manage informations related to your personal details"

      />
      <div>
      <Box
        display="flex"
    
        >
     

      <EditIcon color="primary"  className={classes.editIcon}/>
      <p color="primary" className={classes.editText}>Editar</p>
      </Box>
      </div>
      </Box>
      <Divider />

      <Box ml={15} mt={5}>
      <Box xs={12}  display="flex" >
             <p  className={classes.titleInformacion}>En construccion</p>
         </Box>
        </Box>
        
      </TabPanel>
      </Card>
</div>
      </div>
     );
}
 
export default Deporte;
import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Card,CardHeader,Divider} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { getDisciplinaXClub } from 'src/api/club'
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

export default function Results({user}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [deportes,setDeportes] = useState([])

  useEffect(()=>{

     const llamadaDeportes = async (param) => {

   
        const result =  await getDisciplinaXClub(param)
        console.log('resultad',result)
        setDeportes(result)
      

      }


      if(user && user.id) llamadaDeportes(user.id)
    
      console.log('deportes',deportes)
  },[user])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerTap}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  className={classes.contenidoTap} >
          <Tab label="Turnos" {...a11yProps(0)} />
          <Tab label="Documentos" {...a11yProps(1)} />
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
      <TabPanel value={value} index={1}>
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
   
      <TabPanel value={value} index={2}>
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
      <TabPanel value={value} index={3}>
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
  );
}

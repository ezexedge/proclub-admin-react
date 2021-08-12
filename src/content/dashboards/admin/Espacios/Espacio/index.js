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
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import PrintIcon from '@material-ui/icons/Print';
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import TurnoHeader from './TurnoHeader'
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
  Zoom,
  
  CardContent
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Label from 'src/components/Label';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';

const Span = styled.span`

font-size: 33px!important;
`


  

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

  
  const AvatarWrapper = experimentalStyled(Box)(
    ({ theme }) => `
  
      position: relative;
  
      .MuiAvatar-root {
        width: ${theme.spacing(16)};
        height: ${theme.spacing(16)};
       
      }
  `
  );
  
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
    width: '177px!important'
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
marginLeft: '18px!important',
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


height: '88px',

left: '0px',
borderRadius: '6px',


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
  
  
  },
  black:{
    backgroundColor: 'black!important',
    color: 'white',
    marginRight: '10px!important'
  },
  iconPadding: {
      padding: '5px!important'
  },
  titleSports:{
    marginTop: '1px',
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left'

  },
  subTitleSports:{

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '14px',
lineHeight: '8px',
paddingLeft: '10px',
/* Color States/Common/Black */
color: '223354',

opacity: '0.5'

  },
  ver:{
    color: '#0061F4!important'
  },
  editar:{
    color: '#6B64F8!important'
 
  },
  eliminar:{
 color: '#FF1A43!important'
  },
 
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

  <Box className={classes.boxIcon} display="flex" xs={6}>

  <AvatarWrapper >
                        <Avatar
                        className="iconEspacioSingle"
                          variant="rounded"
                     
                        />
                      
                         
                      </AvatarWrapper>
     <Box>
<p className={classes.titulo}>Cancha de tenis 4</p>
<Button className="btnEspacioSingle" variant="contained" color="primary" disableElevation>
Público
    </Button>

  <EditTwoToneIcon className="iconEspacioEdit"/>

</Box>             

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
        Sacar turno
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
  mt={3}
>
<Grid item xs={4}>
<Card className="cardLayout">
      <CardHeader
        title={t('Codigo QR de ingreso')}
        subheader={'10 saved addresses'}
        action={
          <PrintIcon className="iconPrint"/>
        }
      />
      <Divider />
      <CardContent className="cardContentEspacio">
        <img
        className="cardContentEspacio"
        className="qrEspacio" src="https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"/>
      </CardContent>
  </Card>
</Grid>
<Grid item xs={8}>
<Card  className="cardLayout">
      <CardHeader
        title={t('Deportes')}
     
        action={
          <Button 
          startIcon={<AddTwoToneIcon />}
          variant="outlined" size="small">
          {t('Agregar un deporte')}
        </Button>
        }
      />
      <Divider />
      <CardContent>
      <CardContent 
     
     >
      
      <Grid 
      
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    
      xs={12}>

    
       <Grid
       xs={4}
       display="flex"
       >

           <Box >
           <Span className="material-icons-outlined ">
           sports_soccer
</Span>
           </Box>
           <Box  >
               <p className={classes.titleSports}>Futbol</p>
               <p className={classes.subTitleSports}>Primera A > Arquero</p>
               <p className={classes.subTitleSports}>Segunda C > x</p>
           </Box>
       </Grid>
       <Grid
       xs={4}
       display="flex"
       >

           <Box >
           <Span className="material-icons-outlined ">
           sports_tennis
</Span>
           </Box>
           <Box >
               <p className={classes.titleSports}>Tennis</p>
               <p className={classes.subTitleSports}>Primera A > Arquero</p>
               <p className={classes.subTitleSports}>Segunda C > x</p>
           </Box>
       </Grid>
       <Grid
       xs={4}
       display="flex"
       >

           <Box >
           <Span className="material-icons-outlined ">
           sports_soccer
</Span>
           </Box>
           <Box >
               <p className={classes.titleSports}>Futbol</p>
               <p className={classes.subTitleSports}>Primera A > Arquero</p>
               <p className={classes.subTitleSports}>Segunda C > x</p>
           </Box>
       </Grid>


     </Grid>

   </CardContent>
      </CardContent>
  </Card>
</Grid>


</Grid>

<Box mb={3} mt={3}>
<TurnoHeader/>
</Box>
<Box />



<div>
<Card className="alturaTable">
          <Box 
          >
<TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                     
                      <TableCell className="colorBlack">{t('Turno')}</TableCell>
                      <TableCell className="colorBlack">{t('Hora')}</TableCell>
                      <TableCell className="colorBlack">{t('Espacio')}</TableCell>
                      <TableCell className="colorBlack" align="center">{t('Otro dato')}</TableCell>
                      <TableCell className="colorBlack" align="center">{t('Estado')}</TableCell>
                      <TableCell className="colorBlack" align="center">{t('Acciones')}</TableCell>
                 
                    </TableRow>
                  </TableHead>
                  <TableBody>
     
   
                        <TableRow >
                          
                          <TableCell>
                            <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                            
                              <Typography variant="p">Lunes 14 de marzo 2021</Typography>
                            
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                            
                              <Typography variant="p">18:00 hs.</Typography>
                            
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                            
                              <Typography variant="p">Cancha tenis 3</Typography>
                            
                            </Box>
                          </TableCell>
                          <TableCell>
            
                          <Typography className={classes.deporte} ml={3} >18:00 hs.</Typography>
                            
                          
                          </TableCell>
                          <TableCell >
                          <Box ml={2} fontWeight={700}>
                    
                      <Label color="success"  >ACTIVO</Label>
                    </Box>
                          </TableCell>
                      
                          <TableCell align="center">
                            <Typography noWrap>
                              <Tooltip title={t('Ver')} arrow>
                                <IconButton
                                  component={RouterLink}
                                  to="/admin/dashboard/deporte/1"
                                  className={classes.ver}
                                >
                                  <LaunchTwoToneIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            

                              <Tooltip title={t('Eliminar')} arrow>
                                <IconButton
                                  className={classes.eliminar}
                                >
                                  <DeleteTwoToneIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Typography>
                          </TableCell>
                        </TableRow>
                  
                  </TableBody>
                </Table>
              </TableContainer>
              </Box>
              </Card>
</div>
      </div>
     );
}
 
export default Deporte;
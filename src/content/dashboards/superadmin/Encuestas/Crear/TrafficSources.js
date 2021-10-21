import React,{ useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import numeral from 'numeral';
import Backdrop from '@material-ui/core/Backdrop';

import Divider from '@material-ui/core/Divider';
import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Menu,
  MenuItem,
  CardActions,
  Grid,
  Typography,
  Hidden,
  Tabs,
  Tab,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Tooltip,
  IconButton,
  TableFooter,
  lighten,
  Modal,
  Fade


} from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { makeStyles } from '@material-ui/core/styles';

import TrafficSourcesChart from './TrafficSourcesChart';
import { experimentalStyled } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    zIndex: '1000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconSize:{
    fontSize: '60px!important'
  },
  text:{
    paddingTop: '20px!important'
  },
  circle:{
    color: 'white!important'
  },
  searchBox:{
    maxWidth: '231px!important',
    height: '36px!important',
    padding: '6px, 9px, 6px, 8px!important'
},
searchIcon:{
  color: '#6B64F8!important'
},
avatar:{
  width: '24px!important',
  height: '24px!important'
},
deporte: {
 fontWeight: '700!important',
 fontSize: '14px!important',
 color: 'black!important',
 
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
iconoFontSize:{
 fontSize: '50px!important' 
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
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: '30px',
  zIndex: '100!important',
  width: '50%'

},
cancelar: {
  marginLeft: '20px!important'
}
}));

const CardActionsWrapper = experimentalStyled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: 0;
      display: block;
`
);

const TrafficSourcesChartWrapper = experimentalStyled(TrafficSourcesChart)(
  ({ theme }) => `
        height: 250px;
`
);

const IconButtonError = experimentalStyled(IconButton)(
    ({ theme }) => `
       background: ${theme.colors.error.lighter};
       color: ${theme.colors.error.main};
       padding: ${theme.spacing(0.5)};
  
       &:hover {
        background: ${lighten(theme.colors.error.lighter, 0.4)};
       }
  `
  );
  

const TabsContainerWrapper = experimentalStyled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const EmptyResultsWrapper = experimentalStyled('img')(
  ({ theme }) => `
      max-width: 100%;
      width: ${theme.spacing(66)};
      height: ${theme.spacing(34)};
`
);

function TrafficSources() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [openModificar,setOpenModificar] = useState(false)
  const [open, setOpen] = React.useState(false);
  const token = window.localStorage.getItem('accessToken');
  const [modificarNombre,setModificarNombre] = useState(null)
  const [pregunta,setPregunta] = useState('')
  const [tabs,setTabs] = useState([
    { value: 'referral', label: 'Pregunta 1' }
  ])
  const itemsList = [
    {
      id: 1,
      name: 'Design services for March',
      quantity: 1,
      price: 8945,
      currency: '$'
    }
  ];
  const [items] = useState(itemsList);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  
  };



  const [currentTab, setCurrentTab] = useState('referral');

 

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const generic = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };

  const handleChangePregunta = (e) => {
    setPregunta(e.target.value);
  }

  const agregar = () => {
    

      setTabs([
        ...tabs,
        {value: pregunta,label:pregunta}
      ])

      setPregunta('')
      handleClose()
  }

  console.log('tabss',tabs)

  return (
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

          <TextField id="outlined-basic" fullWidth label="Agregar pregunta" defaultValue={modificarNombre} onChange={handleChangePregunta}  variant="outlined" />
  
       <Grid xs={12} display="flex"  justifyContent="flex-end" mt={5}>
       <Button variant="contained" color="primary" onClick={agregar} >
  Agregar pregunta
</Button>
<Button variant="outlined" color="secondary"  className={classes.cancelar} onClick={()=>handleClose()}>
  Cancelar
</Button>

       </Grid>

          </div>
        </Fade>
      </Modal>


    <Card>

      <CardHeader
       
        title={t('Preguntas')}
      />
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
                      
                      <Button style={{marginLeft: '10px'}} onClick={()=>handleOpen()}  variant="outlined"  color="secondary" >
        +  Agregar pregunta
        </Button>

        </Tabs>

   

      </TabsContainerWrapper>
      <Hidden smDown>
        <Divider />
      </Hidden>
      <CardContent sx={{ p: { xs: 0, sm: 3 } }}>
        <Box sx={{ mt: { xs: 0, sm: 3 } }}>
          {currentTab === 'direct' && (
            <Box sx={{ textAlign: 'center', my: 4 }}>
             
             <Grid xs={6.7}>
             <TextField fullWidth id="outlined-basic" label="Pregunta 1" placeholder="Escribe la pregunta" variant="outlined" />

             <Box pt={4}>
              <TableContainer >
                <Table>
                  <TableHead>
                    <TableRow>
                    <TableCell>{t('#')}</TableCell>

                      <TableCell>{t('OPCIONES de respuestas')}</TableCell>
                      <TableCell>{t(' ')}</TableCell>
                     
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Typography >1</Typography>
                        </TableCell>
                        <TableCell>Blanco</TableCell>
                       
                        <TableCell>
                          <Tooltip arrow title={t('Delete')}>
                            <IconButtonError>
                              <DeleteTwoToneIcon fontSize="small" />
                            </IconButtonError>
                          </Tooltip>
                        </TableCell>
                        

                      </TableRow>
                      
                    ))}

                        <TableRow key="2">
                        <TableCell>
                          <Typography noWrap>{' '}</Typography>
                        </TableCell>
                        <TableCell>
                        <TextField id="outlined-basic" placeholder="Escribir opción..." variant="outlined" />

                        </TableCell>
                       
                        <TableCell>
                            {''}
                        </TableCell>
                        

                      </TableRow>
                  </TableBody>



                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={0}>
                        <Button
                          startIcon={<AddTwoToneIcon />}
                          variant="outlined"
                        >
                          {t('Agregar opción')}
                        </Button>
                      </TableCell>
                      <TableCell colSpan={4} align="right">
                     
                     
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
         </Box>
             </Grid>
             

            </Box>
          )}
          {currentTab === 'referral' && (
      
      <Box sx={{ textAlign: 'center', my: 4 }}>
             
      <Grid xs={6.7}>
      <TextField fullWidth id="outlined-basic" label="Pregunta 1" placeholder="Escribe la pregunta" variant="outlined" />

      <Box pt={4}>
       <TableContainer >
         <Table>
           <TableHead>
             <TableRow>
             <TableCell>{t('#')}</TableCell>

               <TableCell>{t('OPCIONES de respuestas')}</TableCell>
               <TableCell>{t(' ')}</TableCell>
              
             </TableRow>
           </TableHead>
           <TableBody>
             {items.map((item) => (
               <TableRow key={item.id}>
                 <TableCell>
                   <Typography >1</Typography>
                 </TableCell>
                 <TableCell>Blanco</TableCell>
                
                 <TableCell>
                   <Tooltip arrow title={t('Delete')}>
                     <IconButtonError>
                       <DeleteTwoToneIcon fontSize="small" />
                     </IconButtonError>
                   </Tooltip>
                 </TableCell>
                 

               </TableRow>
               
             ))}

                 <TableRow key="2">
                 <TableCell>
                   <Typography noWrap>{' '}</Typography>
                 </TableCell>
                 <TableCell>
                 <TextField id="outlined-basic" placeholder="Escribir opción..." variant="outlined" />

                 </TableCell>
                
                 <TableCell>
                     {''}
                 </TableCell>
                 

               </TableRow>
           </TableBody>



           <TableFooter>
             <TableRow>
               <TableCell colSpan={0}>
                 <Button
                   startIcon={<AddTwoToneIcon />}
                   variant="outlined"
                 >
                   {t('Agregar opción')}
                 </Button>
               </TableCell>
               <TableCell colSpan={4} align="right">
              
              
               </TableCell>
             </TableRow>
           </TableFooter>
         </Table>
       </TableContainer>
  </Box>
      </Grid>
      

     </Box>
        
          )}
          {currentTab === 'organic' && (
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

              <Typography
                align="center"
                variant="h2"
                fontWeight="normal"
                color="text.secondary"
                sx={{ mt: 3 }}
                gutterBottom
              >
                There are no charts generated for <b>Organic</b> traffic
                sources!
              </Typography>
              <Button variant="contained" sx={{ mt: 4 }}>
                Generate Chart
              </Button>
            </Box>
          )}
          {currentTab === 'social' && (
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

              <Typography
                align="center"
                variant="h2"
                fontWeight="normal"
                color="text.secondary"
                sx={{ mt: 3 }}
                gutterBottom
              >
                There are no charts generated for <b>Social</b> traffic sources!
              </Typography>
              <Button variant="contained" sx={{ mt: 4 }}>
                Generate Chart
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>
   
    </Card>
    </>
  );
}

export default TrafficSources;

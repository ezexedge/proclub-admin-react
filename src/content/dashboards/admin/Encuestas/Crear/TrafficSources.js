import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import numeral from 'numeral';

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



} from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

import TrafficSourcesChart from './TrafficSourcesChart';
import { experimentalStyled } from '@material-ui/core/styles';

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

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const data = {
    users: 2.593,
    pagesSession: 2.66,
    newSessions: '82.05%',
    avgSessionDuration: '00:03:56',
    bounceRate: '49.75%',
    sessions: 9.381
  };

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

  const referrals = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
  };

  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState('Select period');

  const [currentTab, setCurrentTab] = useState('referral');

  const tabs = [
    { value: 'referral', label: t('Pregunta 1') }
  ];

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

  const addPregunta = () => {
      alert('agrega otro input')
  }

  return (
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
                      
                      <Button style={{marginLeft: '10px'}} onClick={addPregunta}  variant="outlined"  color="secondary" >
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
  );
}

export default TrafficSources;

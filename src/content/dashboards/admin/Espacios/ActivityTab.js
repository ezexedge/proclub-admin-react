import React,{useState, useCallback, useEffect,useMemo } from 'react';
import { Container, Tabs, Tab, Grid, TableFooter } from '@material-ui/core';
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
import {getEspacioById,getEspacioByDisciplinaXClub} from 'src/api/espacio'
import {getDisciplinaXClub} from 'src/api/club'
import {agregarDisciplina} from 'src/api/espacio'
import { upperFirts } from 'src/utils/text'
import useAuth from 'src/hooks/useAuth';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSnackbar } from 'notistack';
import {getReservasByEspacio} from 'src/api/espacio'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useTheme } from '@material-ui/core/styles';


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
  InputLabel,
  Select,
  MenuItem,
  CardContent,
  CardActions
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Label from 'src/components/Label';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';

const Span = styled.span`

font-size: 33px!important;
`


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

  

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
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

function ActivityTab({reservas}) {
  const { t } = useTranslation();
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reservas.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(()=>{

  },[])


  return (
    <Card>
                <Box 
          >
<TableContainer>
                <Table>
                    {reservas && reservas.length === 0  ? <caption>No posee turnos</caption> : null  }  
                  <TableHead>
                    <TableRow>
                     
                      <TableCell className="colorBlack">{t('Turno')}</TableCell>
                      <TableCell className="colorBlack">{t('Hora')}</TableCell>
                      <TableCell className="colorBlack">{t('Espacio')}</TableCell>
                     <TableCell className="colorBlack">{t('Estado')}</TableCell>
                 
                    </TableRow>
                  </TableHead>
                  <TableBody>
     
   



                  {(rowsPerPage > 0
            ? reservas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : reservas
          ).map((reserva) => (
                        
                        <TableRow >
                          
                        <TableCell>
                          <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                          
                            <Typography variant="p">{reserva.fechaInicio}</Typography>
                          
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                          
                            <Typography variant="p">{reserva.desde}</Typography>
                          
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" className={classes.iconoFontSize}>
                          
                            <Typography variant="h5" color="primary">{reserva.espacio && reserva.espacio.nombre}</Typography>
                          
                          </Box>
                        </TableCell>
                       <TableCell >
                        <Box  fontWeight={700}>
                  
                    <Label color={reserva.estadoreservaId && reserva.estadoreservaId === 1 ? 'success' : 'error' }  >

                        {reserva.estadoreservaId && reserva.estadoreservaId === 1 ? 'activo' : 'eliminado'}

                    </Label>
                  </Box>
                        </TableCell>
                    
                 
                      </TableRow>
                   


                   ))}

{emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}

                     
                  </TableBody>
                  <TableFooter>
                  <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={reservas.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            
              </Box>
    </Card>
  );
}

export default ActivityTab;

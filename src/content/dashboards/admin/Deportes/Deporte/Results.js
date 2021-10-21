import { useState, forwardRef,useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
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
  Tab,
  Tabs,
  TextField,
  Button,
  Typography,
  Dialog,
  Zoom
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { experimentalStyled } from '@material-ui/core/styles';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import Label from 'src/components/Label';
import BulkActions from './BulkActions';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import GridViewTwoToneIcon from '@material-ui/icons/GridViewTwoTone';
import TableRowsTwoToneIcon from '@material-ui/icons/TableRowsTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import {deletePosicion} from 'src/api/posiciones'


const useStyles = makeStyles((theme) => ({
    searchBox: {
      maxWidth: '231px!important',
      height: '36px!important',
      padding: '6px, 9px, 6px, 8px!important'
    },
    searchIcon: {
      color: '#6B64F8!important'
    },
    ver: {
      color: '#0061F4!important'
    },
    editar: {
      color: '#6B64F8!important'
  
    },
    eliminar: {
      color: '#FF1A43!important'
    },
    nombre: {
  
      color: 'black!important'
    },
  
    deportesFont: {
      margin: '2px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      display: 'flex',
      alignItems: 'center',
  
      /* Color States/Primary/Primary Light */
      color: '#3987FF'
  
  
    },
    deporte: {
      fontWeight: '700!important',
      fontSize: '14px!important',
      color: 'black!important',
  
    },
  }));

const DialogWrapper = experimentalStyled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarError = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const CardWrapper = experimentalStyled(Card)(
  ({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
    transition: ${theme.transitions.create(['box-shadow'])};
  }
      
    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.colors.primary.main};
    }
  `
);

const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const TabsWrapper = experimentalStyled(Tabs)(
  ({ theme }) => `

    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



const applyFilters = (users, query, filters) => {
  return users.filter((user) => {
    let matches = true;

    if (query) {
      const properties = ['email', 'name', 'username'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (user[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && user.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && user[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (users, page, limit) => {
  return users.slice(page * limit, page * limit + limit);
};

const Results = ({ users,tabs,onchangePosicion,onchangeModificar, ...rest }) => {
  const [selectedItems, setSelectedUsers] = useState([]);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const tabsDefecto = (tabs) => {
    let result = ''  
    if(tabs.length > 0){
        result = tabs[0].value
      }

      return result
  }

  const token = window.localStorage.getItem('accessToken');

  const [eliminarId,setEliminarId] = useState(null)
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    role: ''
  });
  const handleTabsChange = (event, tabsValue) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      role: value
    }));

    setSelectedUsers([]);
  };

  useEffect(()=>{

    if(tabs && tabs.length > 0 ){
        setFilters({
            role: tabs[0].value
        })
    }

  },[tabs])


  const dispararActualizacion = (val) => {
    onchangePosicion(val)
  }


  const dispararModificacion = (val,name,id) => {
    let obj = {
      data : val,
      name: name,
      id: id
    }
      onchangeModificar(obj)
  }


  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllUsers = (event) => {
    setSelectedUsers(event.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectOneUser = (event, userId) => {
    if (!selectedItems.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, query, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeUsers =
    selectedItems.length > 0 && selectedItems.length < users.length;
  const selectedAllUsers = selectedItems.length === users.length;

  const [toggleView, setToggleView] = useState('table_view');

  const handleViewOrientation = (event, newValue) => {
    setToggleView(newValue);
  };

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = (param) => {
    setOpenConfirmDelete(true);

    setEliminarId(param)

  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = async() => {
    setOpenConfirmDelete(false);



   const result = await deletePosicion(eliminarId.id,token)

   if(result && result.message){

    dispararActualizacion(true)

    enqueueSnackbar( result.message, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });

   }else{
    enqueueSnackbar(result.error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
   }


  };

  return (
    <>

    {tabs && tabs.length > 0 ?    
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
      >
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={ filters.role || tabsDefecto(tabs) }
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </TabsWrapper>
  
      </Box>

        :     

            <Typography 
            mb={4}
            sx={{ py: 10 }}
            variant="p"
            fontWeight="normal"
            color="text.secondary"
            align="left"
            >
                No hay divisiones
            </Typography>

            }
      {toggleView === 'table_view' && (
        <Card mt={2}>
       

          {paginatedUsers.length === 0 ? (
            <>
              <Typography
                sx={{ py: 10 }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t("No hay posiciones")}
              </Typography>
            </>
          ) : (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                   
                      <TableCell align="center">{t('Name')}</TableCell>
                      <TableCell align="center">{t('SOCIOS VINCULADOS')}</TableCell>
               
                      <TableCell align="center">{t('Actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsers.map((user) => {
                      const isUserSelected = selectedItems.includes(user.id);
                      return (
                        <TableRow hover key={user.id} selected={isUserSelected}>
                     
                      
                          <TableCell align="center">
                              
                                <Typography noWrap
                                >
                                  {user.name}
                                </Typography>
                         
                            
                          </TableCell>

                          <TableCell align="center">
                              <Typography noWrap>
                              <Label color="success" >{user.cantidadUsuarios}</Label>
                                </Typography>
                          </TableCell>
                       
                         
                        
                          <TableCell align="center">
                            <Typography noWrap>
                            <Tooltip title={t('Editar')} arrow>
                                <IconButton
                                 className={classes.editar}
                                 onClick={()=>dispararModificacion(true,user.name,user.id)}

                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title={t('Delete')} arrow>
                                <IconButton
                                  onClick={()=>handleConfirmDelete(user)}
                                  className={classes.eliminar}

                                >
                                  <DeleteTwoToneIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={2}>
                <TablePagination
                  component="div"
                  count={filteredUsers.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Box>
            </>
          )}
        </Card>
      )}
      {toggleView === 'grid_view' && (
        <>
          <Card sx={{ p: 2, mb: 3 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {paginatedUsers.length !== 0 && (
                <>
                  <Box display="flex" alignItems="center">
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Select all users')}
                    >
                      <Checkbox
                        checked={selectedAllUsers}
                        indeterminate={selectedSomeUsers}
                        onChange={handleSelectAllUsers}
                      />
                    </Tooltip>
                  </Box>
                  {selectedBulkActions && (
                    <Box flex={1} pl={2}>
                      <BulkActions />
                    </Box>
                  )}
                </>
              )}
              {!selectedBulkActions && (
                <TextField
                  sx={{ my: 0, ml: paginatedUsers.length !== 0 ? 2 : 0 }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleQueryChange}
                  placeholder={t('Search by name, email or username...')}
                  value={query}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
              )}
            </Box>
          </Card>
          {paginatedUsers.length === 0 ? (
            <Typography
              sx={{ py: 10 }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              {t("We couldn't find any users matching yocriteriaur search ")}
            </Typography>
          ) : (
            <>
              <Grid container spacing={3}>
                {paginatedUsers.map((user) => {
                  const isUserSelected = selectedItems.includes(user.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                      <CardWrapper
                        className={clsx({
                          'Mui-selected': isUserSelected
                        })}
                      >
                        <Box sx={{ position: 'relative', zIndex: '2' }}>
                          <Box
                            px={2}
                            pt={2}
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="space-between"
                          >
                            <IconButton color="primary" sx={{ p: 0.5 }}>
                              <MoreVertTwoToneIcon />
                            </IconButton>
                          </Box>
                          <Box p={2} display="flex" alignItems="flex-start">
                            <Avatar
                              sx={{ width: 50, height: 50, mr: 2 }}
                              src={user.avatar}
                            />
                            <Box>
                              <Box>
                                <Link
                                  variant="h5"
                                  component={RouterLink}
                                  to={'/preview/management/user/' + user.id}
                                >
                                  {user.name}
                                </Link>{' '}
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ({user.username})
                                </Typography>
                              </Box>
                              <Typography sx={{ pt: 0.3 }} variant="subtitle2">
                                {user.jobtitle}
                              </Typography>
                              <Typography sx={{ pt: 1 }} variant="h6">
                                {user.email}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Box
                            pl={2}
                            py={1}
                            pr={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography>
                              <b>{user.posts}</b> {t('posts')}
                            </Typography>
                            <Checkbox
                              checked={isUserSelected}
                              onChange={(event) =>
                                handleSelectOneUser(event, user.id)
                              }
                              value={isUserSelected}
                            />
                          </Box>
                        </Box>
                      </CardWrapper>
                    </Grid>
                  );
                })}
              </Grid>
              <Card
                sx={{
                  p: 2,
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Typography component="span" variant="subtitle1">
                    {t('Showing')}
                  </Typography>{' '}
                  <b>{limit}</b> {t('of')} <b>{filteredUsers.length}</b>{' '}
                  <b>{t('users')}</b>
                </Box>
                <TablePagination
                  component="div"
                  count={filteredUsers.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  labelRowsPerPage=""
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Card>
            </>
          )}
        </>
      )}
      {!toggleView && (
        <Card sx={{ textAlign: 'center', p: 3 }}>
          <Typography
            align="center"
            variant="h4"
            fontWeight="normal"
            color="text.secondary"
            sx={{ my: 5 }}
            gutterBottom
          >
            {t(
              'Choose between table or grid views for displaying the users list.'
            )}
          </Typography>
        </Card>
      )}

      <DialogWrapper
        open={openConfirmDelete}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography align="center" sx={{ py: 4, px: 6 }} variant="h2">
            {t('Are you sure you want to permanently delete this user account')}
            ?
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{ mx: 1 }}
              onClick={closeConfirmDelete}
            >
              {t('Cancel')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{ mx: 1, px: 3 }}
              variant="contained"
            >
              {t('Delete')}
            </ButtonError>
          </Box>
        </Box>
      </DialogWrapper>
    </>
  );
};

Results.propTypes = {
  users: PropTypes.array.isRequired
};

Results.defaultProps = {
  users: []
};

export default Results;

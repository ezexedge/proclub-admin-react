import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Autocomplete,
  Box,
  Card,
  Checkbox,
  Grid,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment,
  MenuItem,
  Link,
  Alert,
  AvatarGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  LinearProgress,
  TextField,
  Button,
  Typography,
  Dialog,
  FormControl,
  Select,
  InputLabel,
  Zoom,
  CardMedia,
  lighten
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

import TimerIcon from '@material-ui/icons/Timer';
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
import { formatDistance, format } from 'date-fns';
import Text from 'src/components/Text';
import { Link as RouterLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  
    ver:{
      color: '#0061F4!important'
    },
    editar:{
      color: '#6B64F8!important'
   
    },
    eliminar:{
   color: '#FF1A43!important'
    },
    reloj:{
        color: '#223354!import',
        opacity: '20%!important',
        margin: '-2px 0px!important',
        with: '17px!important',
        height: '17px!important'

    },
    textReloj: {
        /* hace 2 semanas */
fontFamily: 'Roboto!important',
fontStyle: 'normal!important',
fontWeight: 'normal!important',
fontSize: '13px!important',
lineHeight: '15px!important',
/* Color States/Common/Black */
color: '#223354!important'


    },
timeReloj:{
    /* Enviado: 12 Feb 2021 */

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '12px',
lineHeight: '135.9%',
/* Color States/Common/Black 50 */
color: 'rgba(34, 51, 84, 0.5)!important'


}
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

const IconButtonError = experimentalStyled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.75)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getProjectStatusLabel = (projectStatus) => {
  const map = {
    not_started: {
      text: 'ALERTA',
      color: 'error'
    },
    in_progress: {
      text: 'In progress',
      color: 'info'
    },
    completed: {
      text: 'COMPLETO',
      color: 'success'
    }
  };

  const { text, color } = map[projectStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (projects, query, filters) => {
  return projects.filter((project) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (project[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && project.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && project[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (projects, page, limit) => {
  return projects.slice(page * limit, page * limit + limit);
};




const Results = ({ projects, ...rest }) => {
  const [selectedItems, setSelectedProjects] = useState([]);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();


  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    status: null
  });

  const projectTags = [
    { title: 'Development' },
    { title: 'Design Project' },
    { title: 'Marketing Research' },
    { title: 'Software' }
  ];

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'not_started',
      name: t('Not started')
    },
    {
      id: 'completed',
      name: t('Completed')
    },
    {
      id: 'in_progress',
      name: t('In Progress')
    }
  ];

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllProjects = (event) => {
    setSelectedProjects(
      event.target.checked ? projects.map((project) => project.id) : []
    );
  };

  const handleSelectOneProject = (event, projectId) => {
    if (!selectedItems.includes(projectId)) {
      setSelectedProjects((prevSelected) => [...prevSelected, projectId]);
    } else {
      setSelectedProjects((prevSelected) =>
        prevSelected.filter((id) => id !== projectId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProjects = applyFilters(projects, query, filters);
  const paginatedProjects = applyPagination(filteredProjects, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeProjects =
    selectedItems.length > 0 && selectedItems.length < projects.length;
  const selectedAllProjects = selectedItems.length === projects.length;

  const [toggleView, setToggleView] = useState('table_view');

  const handleViewOrientation = (event, newValue) => {
    setToggleView(newValue);
  };

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('The projects has been deleted successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  return (
    <>
      <Card sx={{ p: 1, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box p={1}>
              <TextField
                sx={{ m: 0 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  )
                }}
                onChange={handleQueryChange}
                placeholder={t('Search by project name...')}
                value={query}
                fullWidth
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box p={1}>
              <Autocomplete
                multiple
                sx={{ m: 0 }}
                limitTags={2}
                options={projectTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    label={t('Categoría')}
                    placeholder={t('Categoría...')}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box p={1}>
            <TextField
                    
                    fullWidth
                    variant="outlined"
                    label={t('Subcategoria')}
                    placeholder={t('Subcategoria...')}
                  />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box p={1}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>{t('Estado')}</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label={t('Status')}
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-end' }}
          >
        
          </Grid>
        </Grid>
      </Card>

      {toggleView === 'table_view' && (
        <Card>
          {selectedBulkActions && (
            <Box p={2}>
              <BulkActions />
            </Box>
          )}
          {!selectedBulkActions && (
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography component="span" variant="subtitle1">
                  {t('Showing')}:
                </Typography>{' '}
                <b>{paginatedProjects.length}</b> <b>{t('projects')}</b>
              </Box>
              <TablePagination
                component="div"
                count={filteredProjects.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
              />
            </Box>
          )}
          <Divider />

          {paginatedProjects.length === 0 ? (
            <>
              <Typography
                sx={{ py: 10 }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t(
                  "We couldn't find any projects matching your search criteria"
                )}
              </Typography>
            </>
          ) : (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                   
                      <TableCell>{t('NOMBRE')}</TableCell>
                      <TableCell>{t('CATEGORIA')}</TableCell>
                      <TableCell noWrap>{t('SUB CATEGORIA')}</TableCell>
                      <TableCell>{t('Fecha de Recepción')}</TableCell>
                      <TableCell>{t('ESTADO')}</TableCell>
                      <TableCell align="center">{t('ACCIONES')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedProjects.map((project) => {
                      const isProjectSelected = selectedItems.includes(
                        project.id
                      );
                      return (
                        <TableRow
                          hover
                          key={project.id}
                          selected={isProjectSelected}
                        >
                         
                          <TableCell>
                          <Typography noWrap>
                          <Box display="flex" alignItems="center">
                              <Avatar sx={{ mr: 1 }} src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                              <Box  className={classes.deporte} variant="h5">
                              <Typography  variant="h5">
                           {'Carla ornis'}
                           </Typography>
                                
                              </Box>
                            </Box>
                            </Typography>
                          </TableCell>
                          <TableCell>
                          <Typography  variant="h5">
                           {'Autorizaciones'}
                           </Typography>
                          </TableCell>
                          <TableCell>
                          <Typography variant="h5">
                            Salida grupal
                        </Typography>
                          </TableCell>
                          <TableCell  noWrap variant="h6" gutterBottom>
                            <Typography
                              
                              variant="subtitle1"
                              color="text.primary"
                            >
                           

                                <TimerIcon className={classes.reloj}/>




                              <b   className={classes.textReloj}
                            >
                                {' '}
                                {formatDistance(
                                  project.startDate,
                                  project.dueDate,
                                  { addSuffix: true }
                                )}
                              </b>
                            </Typography>
                            <Typography noWrap color="text.secondary" className={classes.timeReloj}>
                              {t('Started')}:{' '}
                              {format(project.dueDate, 'MMMM dd yyyy')}
                              {'               '}
                            </Typography>
                           
                          </TableCell>
                            
                          <TableCell>
                          <Label color="success" >Enviado</Label>
                         
                          </TableCell>
                          <TableCell align="center">
                            <Typography noWrap>
                              <Tooltip title={t('View')} arrow>
                              <IconButton
                                  component={RouterLink}
 
                                  to={'/admin/dashboard/documentacion/1'}
                                  color="primary"

                                  className={classes.ver}
                                >
                                  <LaunchTwoToneIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title={t('Editar')} arrow>
                                <IconButton
                                  onClick={handleConfirmDelete}
                                  className={classes.editar}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title={t('Delete')} arrow>
                                <IconButton
                                  onClick={handleConfirmDelete}
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
                  count={filteredProjects.length}
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
          {paginatedProjects.length !== 0 && (
            <Card sx={{ p: 2, mb: 3 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <>
                  <Box display="flex" alignItems="center">
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Select all projects')}
                    >
                      <Checkbox
                        checked={selectedAllProjects}
                        indeterminate={selectedSomeProjects}
                        onChange={handleSelectAllProjects}
                      />
                    </Tooltip>
                  </Box>
                  {selectedBulkActions && (
                    <Box flex={1} pl={2}>
                      <BulkActions />
                    </Box>
                  )}
                  {!selectedBulkActions && (
                    <TablePagination
                      component="div"
                      count={filteredProjects.length}
                      onPageChange={handlePageChange}
                      onRowsPerPageChange={handleLimitChange}
                      page={page}
                      rowsPerPage={limit}
                      rowsPerPageOptions={[5, 10, 15]}
                    />
                  )}
                </>
              </Box>
            </Card>
          )}
          {paginatedProjects.length === 0 ? (
            <Typography
              sx={{ py: 10 }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              {t("We couldn't find any projects matching your search criteria")}
            </Typography>
          ) : (
            <>
              <Grid container spacing={3}>
                {paginatedProjects.map((project) => {
                  const isProjectSelected = selectedItems.includes(project.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={project.name}>
                      <CardWrapper
                        className={clsx({
                          'Mui-selected': isProjectSelected
                        })}
                      >
                        <Box sx={{ position: 'relative', zIndex: '2' }}>
                          <Box
                            pl={2}
                            py={1}
                            pr={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box>
                              <Typography component="span">
                                <b>{t('Tags')}:</b>{' '}
                              </Typography>
                              {project.tags.map((value) => {
                                return (
                                  <span key={value}>
                                    <Link href="#">{value}</Link>,{' '}
                                  </span>
                                );
                              })}
                            </Box>
                            <Checkbox
                              checked={isProjectSelected}
                              onChange={(event) =>
                                handleSelectOneProject(event, project.id)
                              }
                              value={isProjectSelected}
                            />
                          </Box>
                          <Divider />
                          <CardMedia
                            sx={{ minHeight: 180 }}
                            image={project.screenshot}
                          />
                          <Divider />
                          <Box p={2}>
                            {getProjectStatusLabel(project.status)}

                            <Typography
                              sx={{ mt: 2 }}
                              variant="h4"
                              gutterBottom
                            >
                              {project.name}
                            </Typography>

                            <Typography noWrap variant="subtitle2">
                              {project.description}
                            </Typography>
                          </Box>
                          <Box
                            px={2}
                            display="flex"
                            alignItems="flex-end"
                            justifyContent="space-between"
                          >
                            <Box>
                              <Typography variant="subtitle2">
                                {t('Started')}:{' '}
                              </Typography>
                              <Typography variant="h5">
                                {format(project.dueDate, 'MMMM dd yyyy')}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2">
                                {t('Due in')}:{' '}
                                <Text color="black">
                                  {formatDistance(
                                    project.startDate,
                                    project.dueDate,
                                    { addSuffix: true }
                                  )}{' '}
                                  days
                                </Text>
                              </Typography>
                            </Box>
                          </Box>

                          <Box px={2} pb={2} display="flex" alignItems="center">
                            <LinearProgress
                              sx={{ flex: 1, mr: 1 }}
                              value={project.progress}
                              color="primary"
                              variant="determinate"
                            />
                            <Typography variant="subtitle1">
                              {project.progress}%
                            </Typography>
                          </Box>
                          <Divider />
                          <Box
                            p={2}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box display="flex" justifyContent="flex-start">
                              {project.memberIds.length > 0 && (
                                <AvatarGroup max={4}>
                                  {project.memberIds.map((member) => (
                                    <Tooltip
                                      arrow
                                      placement="top"
                                      key={member.id}
                                      title={member.name}
                                    >
                                      <Avatar
                                        sx={{ width: 30, height: 30 }}
                                        key={member.id}
                                        src={member.avatar}
                                      />
                                    </Tooltip>
                                  ))}
                                </AvatarGroup>
                              )}
                            </Box>
                            <Box>
                              <Button
                                sx={{ mr: 1 }}
                                size="small"
                                variant="contained"
                                color="primary"
                              >
                                {t('Edit')}
                              </Button>
                              

                              
                              <Tooltip title={t('Delete')} arrow>
                                <IconButtonError
                                  onClick={handleConfirmDelete}
                                  color="primary"
                                >
                                  <DeleteTwoToneIcon fontSize="small" />
                                </IconButtonError>
                              </Tooltip>
                            </Box>
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
                  <b>{limit}</b> {t('of')} <b>{filteredProjects.length}</b>{' '}
                  <b>{t('projects')}</b>
                </Box>
                <TablePagination
                  component="div"
                  count={filteredProjects.length}
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
              'Choose between table or grid views for displaying the projects list.'
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

          <Typography align="center" sx={{ pt: 4, px: 6 }} variant="h1">
            {t('Do you really want to delete this project')}?
          </Typography>

          <Typography
            align="center"
            sx={{ pt: 2, pb: 4, px: 6 }}
            fontWeight="normal"
            color="text.secondary"
            variant="h3"
          >
            {t("You won't be able to revert after deletion")}
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
  projects: PropTypes.array.isRequired
};

Results.defaultProps = {
  projects: []
};

export default Results;

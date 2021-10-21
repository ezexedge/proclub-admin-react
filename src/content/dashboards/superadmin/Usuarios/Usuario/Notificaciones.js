import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import numeral from 'numeral';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  Link,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  TextField,
  Button,
  Typography,
  Dialog,
  useMediaQuery,
  useTheme,
  Zoom
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import Label from 'src/components/Label';
import BulkActions from './BulkActions';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import Text from 'src/components/Text';
import LocalFireDepartmentTwoToneIcon from '@material-ui/icons/LocalFireDepartmentTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';

const DialogWrapper = experimentalStyled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const ImgWrapper = experimentalStyled('img')(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: auto;
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

const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);


const useStyles = makeStyles((theme) => ({
    btnCustom: {
      color: 'white!important',
      backgroundColor: '#6E759F !important'
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
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const applyFilters = (products, query) => {
  return products.filter((product) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (product[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
};

const applyPagination = (products, page, limit) => {
  return products.slice(page * limit, page * limit + limit);
};

const Notificaciones = ({ products }) => {
  const [selectedItems, setSelectedProducts] = useState([]);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllProducts = (event) => {
    setSelectedProducts(
      event.target.checked ? products.map((product) => product.id) : []
    );
  };

  const handleSelectOneProduct = (event, productId) => {
    if (!selectedItems.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, query);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeProducts =
    selectedItems.length > 0 && selectedItems.length < products.length;
  const selectedAllProducts = selectedItems.length === products.length;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('You successfully deleted the product'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  const horarioModificado  = (param) => {
    if(param){
    let arr = param.split(':')
    let result = `${arr[0]}:${arr[1]} hs`

    return result
    }
  }





  return (
    <>
      <Card>
      

        {paginatedProducts.length === 0 ? (
          <Typography
            sx={{ py: 10 }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {t("No contiene notificaciones")}
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell>{t('titulo')}</TableCell>
                    <TableCell>{t('responsable')}</TableCell>
                    <TableCell >{t('fecha de envio')}</TableCell>
                    <TableCell >{t('acciones')}</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedProducts.map((product) => {
                    const isProductSelected = selectedItems.includes(
                      product.id
                    );
                    return (
                      <TableRow
                        hover
                        key={product.id}
                        selected={isProductSelected}
                      >
                  
                        <TableCell>
                      <Typography  noWrap>
                                {product.titulo}
                              </Typography>
                        
                        </TableCell>
                      
                    
                        <TableCell>
                        <Typography   noWrap>
                                {product.fecha}
                              </Typography>
                        </TableCell>
                     


                          <TableCell>
                            <Typography

                              variant="subtitle1"
                              color="text.primary"
                            >


                              <TimerIcon className={classes.reloj} />


                                {  `hora de envio ${product && product.hora}`}


                             
                            </Typography>
                            <Typography noWrap color="text.secondary" className={classes.timeReloj}>
                                {t('Fecha de envio')}:{' '}
                              {`${product && product.fecha}`}

                            </Typography>
                          </TableCell>


                          <TableCell >


                            
                          <Typography noWrap>
                            <Tooltip title={t('View')} arrow>
                              <IconButton
                                component={RouterLink}
                                to={
                                  '/superadmin/dashboard/notificacion/' +
                                  product.id
                                }
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
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
                count={filteredProducts.length}
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
            {t('Do you really want to delete this product')}?
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


export default Notificaciones;

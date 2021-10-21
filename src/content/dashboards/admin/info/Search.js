import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  FormControl,
  CardActions,
  Typography,
  Avatar,
  Divider,
  Link,
  Rating,
  OutlinedInput,
  Chip,
  Tooltip,
  AvatarGroup,
  Pagination,
  InputAdornment,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { formatDistance, subMonths, subDays } from 'date-fns';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';

const OutlinedInputWrapper = experimentalStyled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

function Search() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    enqueueSnackbar(t('You clicked on delete!'), {
      variant: 'error'
    });
  };

  const handleClick = () => {
    enqueueSnackbar(t('You clicked on the chip!'), {
      variant: 'success'
    });
  };

  const periods = [
    {
      value: 'popular',
      text: t('Most popular')
    },
    {
      value: 'recent',
      text: t('Recent tasks')
    },
    {
      value: 'updated',
      text: t('Latest updated tasks')
    },
    {
      value: 'oldest',
      text: t('Oldest tasks first')
    }
  ];

  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState(periods[0].text);

  return (
    <>
      <FormControl  fullWidth 
    
      >
        <OutlinedInputWrapper
                    className="buscadorInfo"

          type="text"
          
          endAdornment={
            <InputAdornment position="end"
            >
              <Button variant="contained" size="small">
                {t('Buscar')}
              </Button>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoToneIcon  className="iconoInfo"/>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            {t('Mostrando')}:{' '}
            <Text color="black">
              <b>10 páginas de información</b>
            </Text>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" sx={{ pr: 1 }}>
            {t('Ordenar por')}:
          </Typography>
          <Button
            
            variant="contained" 
            className="btnFilterDocumentacion"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon color="primary" fontSize="small" />}
          >
            {period}
          </Button>
          <Menu
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuPeriod(false)}
            open={openPeriod}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {periods.map((_period) => (
              <MenuItem
                key={_period.value}
                onClick={() => {
                  setPeriod(_period.text);
                  setOpenMenuPeriod(false);
                }}
              >
                {_period.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
        <Card>
            <CardContent>
              
              <Link href="#"  color="text.primary" className="titleCardInfo">
              Info util de prueba
              </Link>
              <Box display="flex" sx={{py:2}}>
              <Box sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo" >Categoría</Typography>
              </Box>
   
              <Box ml={1}  sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo2">Categoría</Typography>
              </Box>
            </Box>
            <Typography sx={{ pb: 2 }} color="text.secondary">
                Descripción de info util de prueba
              </Typography>
              <Button size="small" variant="contained">
                {t('Más info')}
              </Button>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card>
            <CardContent>
              
              <Link href="#"  color="text.primary" className="titleCardInfo">
              Info util de prueba
              </Link>
              <Box display="flex" sx={{py:2}}>
              <Box sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo" >Categoría</Typography>
              </Box>
   
              <Box ml={1}  sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo2">Categoría</Typography>
              </Box>
            </Box>
            <Typography sx={{ pb: 2 }} color="text.secondary">
                Descripción de info util de prueba
              </Typography>
              <Button size="small" variant="contained">
                {t('Más info')}
              </Button>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card>
            <CardContent>
              
              <Link href="#"  color="text.primary" className="titleCardInfo">
              Info util de prueba
              </Link>
              <Box display="flex" sx={{py:2}}>
              <Box sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo" >Categoría</Typography>
              </Box>
   
              <Box ml={1}  sx={{ py: 1 }}>
                <Typography variant="p" className="chipInfo2">Categoría</Typography>
              </Box>
            </Box>
            <Typography sx={{ pb: 2 }} color="text.secondary">
                Descripción de info util de prueba
              </Typography>
              <Button size="small" variant="contained">
                {t('Más info')}
              </Button>
            </CardContent>
           
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{ py: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="paginacion-documentacion"

      >
         <Pagination

count={5}
defaultPage={3}
siblingCount={0}
size="large"
shape="rounded"
color="primary"

/>
      </Box>
    </>
  );
}

export default Search;

import { useRef, useState } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';

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
  MenuItem,
  Container,
  Hidden,
  IconButton,
  Autocomplete,
 TextField
} from '@material-ui/core';
import PageHeader from './PageHeader';

import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { formatDistance, subMonths, subDays } from 'date-fns';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const OutlinedInputWrapper = experimentalStyled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);


const SearchIconWrapper = experimentalStyled(SearchTwoToneIcon)(
  ({ theme }) => `
        color: ${theme.colors.alpha.black[30]}
`
);


const IconButtonToggle = experimentalStyled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
  position: absolute;
  background: ${theme.colors.alpha.white[100]};
  z-index: 5;
  top: calc(${theme.header.height} + ${theme.spacing(4)});
`
);


function Beneficios() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const jobsTags = [
    { title: 'Developer' },
   
  ];
  
  const jobsLocations = [
    { title: 'Bucharest, Romania' },
    { title: 'San Francisco, USA' },
    { title: 'Madrid, Spain' },
    { title: 'Berlin, Germany' },
    { title: 'Paris, France' },
    { title: 'London, UK' }
  ];
  

  const actionRef1 = useRef(null);
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState(periods[0].text);

  return (
    <>
        <ContentWrapper title="Jobs Platform - Applications">
      <Container maxWidth="lg"                    className="field"
>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Box >
              <PageHeader />
            </Box>
            <Hidden mdUp>
              <IconButtonToggle
                color="primary"
                onClick={handleDrawerToggle}
                size="small"
              >
                <MenuTwoToneIcon />
              </IconButtonToggle>
            </Hidden>
          </Grid>
       </Grid>
       <Grid item xs={12} className="marginBuscador-documentacion">
            <Card
              sx={{
                pl: { xs: 1, lg: 3 },
                pr: 1,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Hidden lgDown>
                <SearchIconWrapper />
              </Hidden>
              <Grid
                alignItems="center"
                justify="start"
                container
                spacing={0}
              >
                <Hidden lgDown>
                  <Divider orientation="vertical" sx={{ height: 48, mx: 2 }} />
                </Hidden>
                <Grid item xs={12} lg={5} md={5}     >
                  <Autocomplete
                    multiple
                    sx={{ m: 2 }}
                    defaultValue={[jobsTags[0]]}
                    limitTags={2}
                    options={jobsTags}
                    getOptionLabel={(option) => option.title}
                  
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                     
                    
                      />
                    )}
                  />
                </Grid>
                <Hidden lgDown>
                  <Divider orientation="vertical" sx={{ height: 48, mx: 2 }} />
                </Hidden>
                <Grid item xs={12} lg={5} md={6}>
                
                </Grid>
              </Grid>
            </Card>
          </Grid>
      <Box
        className="marginFilter-documentacion"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            {t('Showing')}:{' '}
            <Text color="black">
              <b>45 open job positions</b>
            </Text>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" sx={{ pr: 1 }}>
            {t('Sort by')}:
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
            <CardContent className="cardContent-documentacion">
                  <div className="img-documentacion">
                    </div>
                    <Box>
              <p className="tituloDocumentacion">Titulo</p>
            </Box>
            <Box>
              <p className="descripcionDocumentacion">Descripcion</p>
            </Box>

            <Box>
              <p className="badgesDocumentacion">Indumentaria</p>
            </Box>


            </CardContent>
            
            <Divider />
            <CardActions
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button className="btn-documentacion" variant="outlined" color="primary">
        Editar
      </Button>
      <Button   className="btn-documentacion" variant="contained" color="primary">
      Ver beneficio
      </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card>
            <CardContent className="cardContent-documentacion">
                  <div className="img-documentacion">
                    </div>
                    <Box>
              <p className="tituloDocumentacion">Titulo</p>
            </Box>
            <Box>
              <p className="descripcionDocumentacion">Descripcion</p>
            </Box>

            <Box>
              <p className="badgesDocumentacion">Indumentaria</p>
            </Box>


            </CardContent>
            
            <Divider />
            <CardActions
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button className="btn-documentacion" variant="outlined" color="primary">
        Editar
      </Button>
      <Button   className="btn-documentacion" variant="contained" color="primary">
      Ver beneficio
      </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card>
            <CardContent className="cardContent-documentacion">
                  <div className="img-documentacion">
                    </div>
                    <Box>
              <p className="tituloDocumentacion">Titulo</p>
            </Box>
            <Box>
              <p className="descripcionDocumentacion">Descripcion</p>
            </Box>

            <Box>
              <p className="badgesDocumentacion">Indumentaria</p>
            </Box>


            </CardContent>
            
            <Divider />
            <CardActions
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button className="btn-documentacion" variant="outlined" color="primary">
        Editar
      </Button>
      <Button   className="btn-documentacion" variant="contained" color="primary">
      Ver beneficio
      </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        
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
      </Container>
      </ContentWrapper>
    </>
  );
}

export default Beneficios;

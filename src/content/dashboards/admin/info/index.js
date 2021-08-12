import { useRef, useState } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import Search from './Search'
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
      <Container 
      maxWidth="lg"                    className="field"
>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Box mt={3}>
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
       <Grid  xs={12} mt={4}>
              <Search />
            </Grid>
      </Container>
      </ContentWrapper>
    </>
  );
}

export default Beneficios;

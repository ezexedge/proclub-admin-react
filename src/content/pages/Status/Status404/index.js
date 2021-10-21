import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Grid
} from '@material-ui/core';
import ContentWrapper from 'src/components/ContentWrapper';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';

const MainContent = experimentalStyled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6B64F8!important;
    color: white!important;
`
);

const OutlinedInputWrapper = experimentalStyled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const useStyles = makeStyles((theme) => ({
  btnCustom:{
    color: '#6B64F8!important',
    backgroundColor: 'white!important',
    "&:hover":{
      opacity: '0.8'
    }
  }
}));


function Status404() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <ContentWrapper title="Status - 404">
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="404" height={180} src="/static/images/status/4042.svg" />
            <Typography variant="h1" mt={3} sx={{ my: 2 }}>
              {t("ERROR 404 la pagina no existe")}
            </Typography>
        
          </Box>
          <Container maxWidth="sm">

          <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
mt={5}
>
   <Button   href="/overview" className={classes.btnCustom} >
                {t('Ir a pagina de inicio')}
              </Button>
</Grid>
       
              
          </Container>
        </Container>
      </MainContent>
    </ContentWrapper>
  );
}

export default Status404;

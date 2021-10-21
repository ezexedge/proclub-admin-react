import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Hidden,
  Link,
  Tooltip,
  Typography,
  Container,
  Button,
  Alert
} from '@material-ui/core';
import ContentWrapper from 'src/components/ContentWrapper';
import useAuth from 'src/hooks/useAuth';

import JWTLogin from './LoginJWT';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/Logo';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { makeStyles } from '@material-ui/core/styles';
import imagen from 'src/img/Rectangle.png'


const useStyles = makeStyles((theme) => ({
 back:{
  marginLeft: '120px!important',
  display: 'flex!important',
  alignItems: 'center!important'

 
 },
 card:{
 minWidth: '542px!important',
 height: '500px!important'
 },
 svg:{
   display: 'flex!important',
  width: '100%!important',
  
  },
  btnGoogle:{
    width: '100%!important',
    height: '38px!important'
  },
  goolgleImg:{
    marginLeft: '8px!important'

  }

}));


const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg'
};

const Content = experimentalStyled(Box)(
  () => `
    display: flex;
    height: 100%;
    width: 100%;
    background-image: url(${imagen});
    background-size: 99.9% 99.9%;

`
);

const MainContent = experimentalStyled(Box)(
  () => `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    
`
);

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
`
);

const SidebarContent = experimentalStyled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: ${theme.spacing(6)};
`
);

const CardImg = experimentalStyled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};
  

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`
);

function CompleteRegister() {
  const { method } = useAuth();
  const { t } = useTranslation();
  const classes = useStyles();


  return (
    <ContentWrapper title="Complete Registration">
      <Content  >
       
        <MainContent  >
          <Container  className={classes.back}  >
            <Card sx={{ mt: 3, px: 4, py: 5 }}   className={classes.card} >
              <Box textAlign="left" >
                <Typography variant="h2" sx={{ mb: 1 }} >
                  {t('Completa el registro')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 3 }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
            
               
              </Box>
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              <Box mt={4} xs={12}
                  textAlign="center"
              >
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
              
                >
                  {t('Ya te registraste?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/login">
                  <b>inicia sesion</b>
                </Link>
              </Box>
            </Card>
            <Box xs={12} 
            className={classes.svg}
            justifyContent="center"
            >
            <svg  width="280" height="104"  viewBox="0 0 376 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd)">
<path d="M68.2101 16.6545V41.5965C68.2101 55.529 63.9442 66.4546 55.5443 74.0378C50.9069 78.2308 46.1737 80.2554 43.921 81.058C41.7521 80.2913 37.2346 78.3506 32.6931 74.3733C24.0535 66.79 19.6679 55.7566 19.6679 41.6084V16.6665H68.2101V16.6545ZM73.8779 11H14V41.6084C14 79.8361 43.933 87 43.933 87C43.933 87 73.8659 79.8361 73.8659 41.6084L73.8779 11Z" fill="white"/>
<path d="M39.9072 71.4024C30.5007 67.2933 25.3242 55.2775 25.3242 43.729V22.321H39.9072V71.4024Z" fill="white"/>
<path d="M47.9709 22.321V42.7826C47.9709 49.2157 45.5623 51.3362 45.5623 51.3362H53.0875C59.4863 51.3362 62.5539 48.2813 62.5539 41.8721V22.321H47.9709Z" fill="white"/>
<path d="M353.125 31.7014C353.125 29.2096 354.946 27.3767 357.283 27.3767C359.607 27.3767 361.441 29.1976 361.441 31.7014C361.441 34.1932 359.619 36.0261 357.283 36.0261C354.946 36.0142 353.125 34.1932 353.125 31.7014ZM360.722 31.929V31.4738C360.722 29.605 359.296 28.0356 357.283 28.0356C355.27 28.0356 353.844 29.605 353.844 31.4738V31.929C353.844 33.7979 355.27 35.3673 357.283 35.3673C359.296 35.3673 360.722 33.7979 360.722 31.929ZM356.444 33.9656H355.797V29.5451H357.606C358.445 29.5451 358.948 30.0243 358.948 30.8628C358.948 31.5816 358.565 32.0009 358.074 32.1207L359.116 33.9656H358.397L357.415 32.1806H356.444V33.9656ZM357.57 31.6535C358.026 31.6535 358.241 31.4618 358.241 31.0425V30.7071C358.241 30.2878 358.026 30.0722 357.57 30.0722H356.432V31.6415H357.57V31.6535Z" fill="white"/>
<path d="M102.66 49.8149V63.7354H101.186C98.6701 63.7354 96.621 61.6988 96.621 59.1711V28.1074H109.838C116.68 28.1074 121.198 32.7316 121.198 38.9611C121.198 45.2386 116.668 49.8149 109.838 49.8149H102.66ZM108.951 44.4958C112.774 44.4958 115.086 42.3874 115.086 39.021C115.086 35.6068 112.774 33.4384 108.951 33.4384H102.672V44.4958H108.951Z" fill="white"/>
<path d="M138.776 45.0469C138.117 44.9511 137.47 44.8912 136.871 44.8912C132.341 44.8912 130.28 47.5028 130.28 52.0791V63.7355H128.998C126.482 63.7355 124.445 61.6989 124.445 59.1831V39.2607H130.125V43.1781C131.275 40.5186 133.995 38.9612 137.218 38.9612C137.925 38.9612 138.525 39.057 138.776 39.1169V45.0469Z" fill="white"/>
<path d="M165.978 51.4795C165.978 59.0148 160.597 64.5016 153.264 64.5016C145.978 64.5016 140.598 59.0268 140.598 51.4795C140.598 43.9921 145.978 38.5174 153.264 38.5174C160.597 38.5054 165.978 43.9921 165.978 51.4795ZM160.094 51.4795C160.094 46.4001 156.883 43.7885 153.252 43.7885C149.681 43.7885 146.41 46.4001 146.41 51.4795C146.41 56.559 149.681 59.2664 153.252 59.2664C156.871 59.2664 160.094 56.6069 160.094 51.4795Z" fill="white"/>
<path d="M174.653 51.4803C174.653 56.404 177.816 59.1713 181.495 59.1713C185.317 59.1713 187.079 56.5118 187.63 54.6429L192.758 56.4998C191.608 60.3214 187.929 64.4903 181.495 64.4903C174.305 64.4903 168.829 58.9077 168.829 51.4683C168.829 43.933 174.305 38.5061 181.351 38.5061C187.941 38.5061 191.56 42.6272 192.567 46.5446L187.342 48.4494C186.791 46.293 185.125 43.8731 181.411 43.8731C177.816 43.885 174.653 46.5565 174.653 51.4803Z" fill="white"/>
<path d="M196.69 59.1712V27.3528H202.525V63.7355H201.267C198.739 63.7355 196.69 61.6989 196.69 59.1712Z" fill="white"/>
<path d="M217.203 64.4423C211.368 64.4423 207.952 60.1176 207.952 54.6908V39.2607H213.788V53.6365C213.788 56.6554 215.19 59.2191 218.713 59.2191C222.08 59.2191 223.842 56.9549 223.842 53.7443V39.2607H229.677V59.267C229.677 61.2797 229.833 62.837 229.929 63.7355H224.345C224.249 63.1845 224.141 62.0224 224.141 61.0161C222.931 63.2324 220.067 64.4423 217.203 64.4423Z" fill="white"/>
<path d="M235.358 59.1712V27.3528H241.085V42.2796C242.188 40.3749 245.004 38.6138 248.778 38.6138C256.112 38.6138 260.09 44.1964 260.09 51.3843C260.09 58.7759 255.716 64.3465 248.575 64.3465C245.112 64.3465 242.439 62.837 241.037 60.477V63.7475H239.923C237.407 63.7355 235.358 61.6989 235.358 59.1712ZM247.628 43.7891C243.913 43.7891 241.037 46.5564 241.037 51.4322C241.037 56.2601 243.901 59.1712 247.628 59.1712C251.45 59.1712 254.218 56.2601 254.218 51.4322C254.218 46.5564 251.498 43.7891 247.628 43.7891Z" fill="white"/>
<path d="M285.854 54.7987H270.767L267.448 63.7476H261.061L274.937 28.1196H281.923L295.799 63.7476H289.209L285.854 54.7987ZM272.876 49.2161H283.733L278.304 34.6367L272.876 49.2161Z" fill="white"/>
<path d="M299.022 68.683V39.2605H304.654V42.579C305.864 40.4705 308.68 38.7095 312.443 38.7095C319.68 38.7095 323.754 44.2322 323.754 51.48C323.754 58.8116 319.285 64.3463 312.239 64.3463C308.716 64.3463 306.056 62.8368 304.798 60.98V73.2952H303.623C301.083 73.2833 299.022 71.2227 299.022 68.683ZM311.34 43.8848C307.518 43.8848 304.75 46.9037 304.75 51.468C304.75 56.1401 307.518 59.159 311.34 59.159C315.211 59.159 317.931 56.1401 317.931 51.468C317.919 46.9037 315.259 43.8848 311.34 43.8848Z" fill="white"/>
<path d="M327.793 68.683V39.2605H333.425V42.579C334.635 40.4705 337.451 38.7095 341.213 38.7095C348.451 38.7095 352.525 44.2322 352.525 51.48C352.525 58.8116 348.056 64.3463 341.01 64.3463C337.487 64.3463 334.827 62.8368 333.568 60.98V73.2952H332.394C329.854 73.2833 327.793 71.2227 327.793 68.683ZM340.111 43.8848C336.289 43.8848 333.52 46.9037 333.52 51.468C333.52 56.1401 336.289 59.159 340.111 59.159C343.981 59.159 346.702 56.1401 346.702 51.468C346.69 46.9037 344.029 43.8848 340.111 43.8848Z" fill="white"/>
</g>
<defs>
<filter id="filter0_dd" x="0" y="0" width="375.441" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="6"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.458824 0 0 0 0 1 0 0 0 0.35 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.458824 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

              </Box>
   
          </Container>
        </MainContent>
      </Content>
    </ContentWrapper>
  );
}

export default CompleteRegister

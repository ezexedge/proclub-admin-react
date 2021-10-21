import React ,{useState} from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import {
  
    Container,
    Grid,
    TextField,
    Card,
    CardHeader,
    Divider,
    Box,
    Avatar,
    Typography,
    Button,
    FormControlLabel,
    Switch,
    List,
    ListItem,
    ListItemText,
    Checkbox

  } from '@material-ui/core';
  import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

  import { useDropzone } from 'react-dropzone';
  import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
  import { useTranslation } from 'react-i18next';
  import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import PageHeader from './PageHeader'
import GeneralSection from './GeneralSection'
import { experimentalStyled, useTheme } from '@material-ui/core/styles';


const DotLegend = experimentalStyled('span')(
    ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.5)};
      height: ${theme.spacing(1.5)};
      display: inline-block;
      margin-right: ${theme.spacing(0.5)};
  `
  );

  
const AvatarWrapper = experimentalStyled(Avatar)(
    ({ theme }) => `
      background: transparent;
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
  `
  );
const BoxUploadWrapper = experimentalStyled(Box)(
    ({ theme }) => `
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(2)};
      background: ${theme.colors.alpha.black[5]};
      border: 1px dashed ${theme.colors.alpha.black[30]};
      outline: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: ${theme.transitions.create(['border', 'background'])};
  
      &:hover {
        background: ${theme.colors.alpha.white[50]};
        border-color: ${theme.colors.primary.main};
      }
  `
  );
  
const Crear = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
      };
    
      const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
      };
    
      const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
      };
    
      const [productTags, setProductTags] = useState([
        { key: 0, label: 'new' },
        { key: 1, label: 'fresh' },
        { key: 2, label: 'electronics' },
        { key: 3, label: 'computer' },
        { key: 4, label: 'software' }
      ]);
    
      const handleDelete = (productTagToDelete) => () => {
        setProductTags((productTags) =>
          productTags.filter(
            (productTag) => productTag.key !== productTagToDelete.key
          )
        );
      };
    
      const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Subcategoría 1"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Subcategoría 2"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        
        </Box>
      );

      
    const {
        acceptedFiles,
        isDragActive,
        isDragAccept,
        isDragReject,
        getRootProps,
        getInputProps
      } = useDropzone({
        accept: 'image/jpeg, image/png'
      });

      const files = acceptedFiles.map((file, index) => (
        <ListItem disableGutters component="div" key={index}>
          <ListItemText primary={file.name} />
          <b>{file.size} bytes</b>
          <Divider />
        </ListItem>
      ));
    
    return ( 
        <>
            <ContentWrapper title="Jobs Platform - Applications">
      <Container maxWidth="lg"             className="field"
>

       
        
        <PageHeader/>
    <Grid xs={12} display="flex">
    <Grid  xs={8.8} >
    <Grid xs={12} mt={3} pr={3}>
    <GeneralSection/>
  
    </Grid>
    <Grid xs={12} mt={3} pr={3} mb={5}>
    <Card>
      <CardHeader title={'Seleccionar imagen'}></CardHeader>
      <Divider />
      <Box p={2}>
          <BoxUploadWrapper {...getRootProps()} className="uploadBeneficio">
            <input {...getInputProps()} />
            {isDragAccept && (
              <>
                <AvatarSuccess variant="rounded">
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography  className="tipografiaBeneficio">
                  {t('arrastrar y soltar archivos aquí')}
                </Typography>
              </>
            )}
            {isDragReject && (
              <>
                <AvatarDanger variant="rounded">
                  <CloseTwoToneIcon />
                </AvatarDanger>
                <Typography >
                  {t('arrastrar y soltar archivos aquí')}
                </Typography>
              </>
            )}
            {!isDragActive && (
              <>
                <AvatarWrapper variant="rounded" >
                  <PublishTwoToneIcon  />
                </AvatarWrapper>
                <Typography  className="tipografiaBeneficio">
                  {t('arrastrar y soltar archivos aquí')}
                </Typography>
              </>
            )}
          </BoxUploadWrapper>
        </Box>
     
    </Card>
    </Grid>
  </Grid>
  <Grid  xs={3.2}  >
   
    <Grid xs={12} mt={3} >
    <Card>
        <CardHeader
          // action={
          //   <Button
          //     size="small"
          //     variant="outlined"
          //     startIcon={<EditTwoToneIcon />}
          //   >
          //     {t('Edit')}
          //   </Button>
          // }
          title={t('Publicar')}
        />
    
        {/* <Box pl={2}>
          <FormControlLabel
            control={<Switch color="primary" defaultChecked />}
            label={t('Virtual Product')}
          />
        </Box> */}
        
        {/* <List dense sx={{ p: 1 }}>
          <ListItem disableGutters>
            <ListItemText
              sx={{ width: 110, flex: 'initial' }}
              primary={t('Status')}
            />
            <b>Draft</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{ width: 110, flex: 'initial' }}
              primary={t('Visibility')}
            />
            <b>Visible</b>
          </ListItem>
     
        </List> */}
      
        <Box p={3}>
          <Grid container spacing={2}>
           
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                {t('Publicar ahora')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    
    </Grid>
    <Grid xs={12} mt={3} mb={3}>
    <Card>
        <CardHeader
          action={
            <Button size="small" variant="outlined">
              {t('Añadir categoría')}
            </Button>
          }
          title={t('Categorías')}
        />
        <Divider />
        <Box p={2}>
            
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
              
            }
            label="Categoría 1"
          />
          
          {children}

          <FormControlLabel control={<Checkbox />} label="Categoría 3" />
          <FormControlLabel
            control={<Checkbox />}
            label="Categoría 2"
          />
        </Box>
      </Card>

    </Grid>
    
    </Grid>
    </Grid>

    </Container>
    </ContentWrapper>
        </>
     );
}
 
export default Crear;
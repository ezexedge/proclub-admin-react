import React ,{useState,useEffect} from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import phone from 'src/img/phone.png'
import AdditionalInfo from './AdditionalInfo';
import  Results from './Results'

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
import { getUsuarios } from 'src/api/usuarios'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    zIndex: '1000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
    const [usuarios,setUsuarios] = useState([])
    const [value, setValue] = useState();
    const [valueResult, setValueResult] = useState([]);
    const [checked, setChecked] = useState([true, false]);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      /*
            const llamadaUsuarioXClub = async(param) => {
              const result =  await getUsuariosXClub(param)
              console.log(result)
              setUsuarios(result)
            }
      
      
            llamadaUsuarioXClub(135)
      */
      const llamadaUsuarios = async() => {
        const result =  await getUsuarios()
        console.log(result)
        setUsuarios(result)
      }
      
      
      llamadaUsuarios()
      
      
          }, []);


          
          const onchange = (data) => {
            setValue(data)
            console.log("Form>", data);
        }

        const onchangeResult = (data) => {
          setValueResult(data)
          console.log("result", data);
      }

        
        console.log(valueResult)
          
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
            label="Appliances"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Outdoor equipment"
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
              <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
            <ContentWrapper title="Jobs Platform - Applications">
      <Container maxWidth="lg"             className="field"
>

       
        
        <PageHeader/>
    <Grid xs={12} display="flex">
    <Grid  xs={8.8} >
    <Grid xs={12} mt={3} pr={3}>
    <GeneralSection data={value} onchange={(e) => { onchange(e) }} />
  
    </Grid>

  </Grid>
  <Grid  xs={3.2}  className="card-notificacion">
   
    <Grid xs={12} mt={3} className="card-notificacion">
    <Card className="card-notificacion">
        

        <img  className="card-notificacion-phone" src={phone}/>

      </Card>
    
    </Grid>

    
    </Grid>
        
    </Grid>
    <Grid item xs={12} mt={4} mb={5}>
                <AdditionalInfo  data={valueResult} onchangeResult={(e) => { onchangeResult(e) }} />


              </Grid>

              <Grid item xs={12} mt={4} mb={5}>
              <Grid container justifyContent="space-between" alignItems="center">
      <Grid
   container
   direction="row"
   justify="space-between"
   alignItems="center"
  spacing={5}
>
<Grid item lg={9} xs={12}>
<Typography variant="h1"> Lista de envios </Typography>
<Typography color="secondary" >{'Revisá la lista antes de enviar'}</Typography>
    </Grid>
    <Grid item lg={12} xs={12}  >
    <Card >
      <Results users={valueResult} />
        </Card>
      </Grid>
      <Grid item lg={12} xs={12}  >

      <Button fullWidth variant="contained" color="primary" disableElevation onClick={handleOpen}>
      {`Enviar notificación a  ${valueResult && valueResult.length}  usuarios`}
    </Button>
      </Grid>
      
      </Grid>
      </Grid>

              </Grid>
      
    </Container>
    </ContentWrapper>
        </>
     );
}
 
export default Crear;
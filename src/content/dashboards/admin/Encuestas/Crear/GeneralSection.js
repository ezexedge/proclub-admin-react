import React , {useState,useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ReactQuill from 'react-quill';
import {getTematica} from 'src/api/tematica'
import { makeStyles } from '@material-ui/core/styles';

import 'react-quill/dist/quill.snow.css';
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

const EditorWrapper = experimentalStyled(Box)(
  ({ theme }) => `

    .ql-editor {
      min-height: 100px;
    }

    .ql-snow .ql-picker {
      color: ${theme.colors.alpha.black[100]};
    }

    .ql-snow .ql-stroke {
      stroke: ${theme.colors.alpha.black[100]};
    }

    .ql-toolbar.ql-snow {
      border-top-left-radius: ${theme.general.borderRadius};
      border-top-right-radius: ${theme.general.borderRadius};
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border-color: ${theme.colors.alpha.black[30]};
    }

    .ql-container.ql-snow {
      border-bottom-left-radius: ${theme.general.borderRadius};
      border-bottom-right-radius: ${theme.general.borderRadius};
    }

    &:hover {
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: ${theme.colors.alpha.black[50]};
      }
    }
`
);


const useStyles = makeStyles({
 

  descripcion:{
    backgroundColor: 'red',
    padding: '109px'
  }

});

const productTags = [
  { title: 'new' },
  { title: 'fresh' },
  { title: '2021' },
  { title: 'electronics' }
];

function GeneralSection(props) {
  const { t } = useTranslation();
  const token = window.localStorage.getItem('accessToken');

  const [tematicas,setTematicas] = useState(null)
  const [value, setValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const classes = useStyles();

  const [notificacion,setNotificacion] = useState({
    titulo: '',
    descripcion: '',
    descripcion_corta: '',
    tematica: []
  })

  const handle = (event, value) => setSelectedOptions(value);

  const llamarTematica = async () => {
    const result = await getTematica(token)
    setTematicas(result)
    console.log('tematica',result)
  }

  useEffect(()=>{

    llamarTematica()

  },[])


  useEffect(()=>{

    setNotificacion({...notificacion,descripcion_corta:value})
    props.onchange(notificacion);

  },[value])
  
  useEffect(()=>{

    setNotificacion({...notificacion,tematica:selectedOptions})
    props.onchange(notificacion);

  },[selectedOptions])
  
  props.onchange(notificacion);

  console.log(notificacion)

const handleChange = e => {
    setNotificacion({
      ...notificacion,
      [e.target.name]: e.target.value
    });

    props.onchange(notificacion);
  };

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="titulo"
            placeholder={t('Titulo...')}
            label="Titulo"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}

        >
          <TextField
            fullWidth
            className="descripcionText"

            name="descripcion"
            placeholder={t('Descripción...')}
            label="Descripción"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
       
      
      
      </Grid>
    </Card>
  );
}

export default GeneralSection;

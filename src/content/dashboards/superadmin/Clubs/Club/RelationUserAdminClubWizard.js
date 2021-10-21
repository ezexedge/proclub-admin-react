import { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Button,
    Grid,
    Box,
    Zoom
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentWrapper from 'src/components/ContentWrapper';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import TextFieldd from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getUsuarios, updateRol } from 'src/api/usuarios';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%!important',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MainContent = experimentalStyled(Box)(
    () => `
    height: 100%;
    overflow: auto;
    flex: 1;
`
);

const BoxActions = experimentalStyled(Box)(
    ({ theme }) => `
    background: ${theme.colors.alpha.black[5]}
`
);

function RelationUserAdminClubWizard({ handleClose }) {
    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();

    // Listar todos los usuarios de la plataforma
    const [usuarios, setUsuarios] = useState(null)
    const llamarUsuarios = async () => {
        const result = await getUsuarios();
        setUsuarios(result)
    }
    useEffect(() => {
        llamarUsuarios()
    }, [])

    // Set state de usuario seleccionado
    const [usuarioSeleccionado, setUsuriosSeleccionado] = useState(null)

    const relacionar = async () => {
        if (usuarioSeleccionado !== null) {
            const result = await updateRol(usuarioSeleccionado.id);
            if (result.message !== undefined) {
                handleClose()
                enqueueSnackbar(result.message, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    TransitionComponent: Zoom
                });
            } else {
                handleClose()
                enqueueSnackbar(result.error, {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    TransitionComponent: Zoom
                });
            }
        }
    }

    return (
        <ContentWrapper title="Añadir usuario administrador">
            <MainContent>
                <Container sx={{ my: 4 }} maxWidth="md">
                    <Box px={4}>
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            {t('Agregar usuario administrador')}
                        </Typography>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            fontWeight="normal"
                            sx={{ mb: 3 }}
                        >
                            {t('Busca el usuario y agregalo como administrador')}
                        </Typography>
                    </Box>

                    <Box p={4}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Autocomplete
                                    onChange={(event, value) => console.log('valor', value)}
                                    id="usuarios"
                                    options={usuarios}
                                    getOptionLabel={(option) => option.persona.correo}
                                    renderInput={(params) => <TextFieldd {...params} label="Usuarios" variant="outlined" />}
                                    // onChange={e => console.log(  usuarios[e.target.getAttribute('data-option-index')]   ) }
                                    onChange={(event, value) => {
                                        setUsuriosSeleccionado(value)
                                    }}
                                />
                                <BoxActions
                                    p={4}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={e => relacionar()}
                                        disabled={usuarioSeleccionado === null ? true : false}
                                    >
                                        {t('Confirmar')}
                                    </Button>
                                </BoxActions>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </MainContent>
        </ContentWrapper >
    );
}

export function FormikStep({ children }) {
    return <>{children}</>;
}

export default RelationUserAdminClubWizard;

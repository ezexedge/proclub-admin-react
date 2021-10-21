import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid , Box} from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';
import {getNotificacion} from 'src/api/notificaciones'
import Results from './Results';

function ManagementProjects() {
  const isMountedRef = useRefMounted();
  const [projects, setProjects] = useState([]);
  const  [notificaciones,setNotificaciones] = useState(null)
  const token = window.localStorage.getItem('accessToken');

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get('/api/projects');

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);


  const llamarNotificaciones = async()=> {
    const result = await getNotificacion(token)
    console.log('notificaciones',result)
    setNotificaciones(result)

  }

  useEffect(() => {

    llamarNotificaciones()
    getProjects();
  }, [getProjects]);

  return (
    <ContentWrapper title="Projects - Management">
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Results projects={notificaciones !== null ? notificaciones : []} />
          </Grid>
        </Grid>
        <Box m={5} /> 
      </Container>

    </ContentWrapper>
  );
}

export default ManagementProjects;

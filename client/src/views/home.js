import React from 'react'
import { Grid, Container, Typography } from '@mui/material';
import { Helmet } from "react-helmet";
import { styled } from '@mui/system';

const Text = styled(Typography)({
  color: 'darkslategray',
  fontWeight: 'bold',
  backgroundColor: 'aliceblue',
  textAlign: 'center',
  padding: '5px 10px'
})

const HomeView = () => {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: '200px' }}
      >
        <Helmet>
          <title>uTodo | Welcome!</title>
        </Helmet>
        <Grid item>
          <Typography variant="h1">uTodo</Typography>
          <Text>The best todo app ever created.</Text>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;

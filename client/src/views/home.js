import React, { Component } from 'react'
import { Button, IconButton, Box, Fab, Grid, Container, Typography } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
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
        style={{ minHeight: '90vh' }}
      >
        <Helmet>
          <title>uTodo | Welcome!</title>
        </Helmet>
        <Grid item xs={3}>
          <Typography variant="h1"
          noWrap>uTodo</Typography>
          <Text>The best todo app ever created.</Text>
        </Grid>

      </Grid>
    </Container>
  );
};

export default HomeView;

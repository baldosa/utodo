import React, { Component } from 'react'
import { Button, IconButton, Container, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";

const AboutView = () => {
  return (
    <Container>
      <Helmet>
        <title>uTodo | About</title>
      </Helmet>
      <h1>About</h1>
    </Container>
  );
};

export default AboutView;

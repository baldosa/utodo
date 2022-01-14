import React, { Component } from 'react'
import { Button, IconButton, Container, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";

const HelpView = () => {
  return (
    <Container>
      <Helmet>
        <title>uTodo | Help</title>
      </Helmet>
      <h1>Help</h1>
    </Container>
  );
};

export default HelpView;

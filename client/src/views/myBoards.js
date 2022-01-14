import React, { Component } from 'react'
import { Button, IconButton, Container, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";


const BoardView = () => {
  return (
    <Container>
      <Helmet>
          <title>uTodo | My Boards</title>
      </Helmet>
      <h1>My Boards</h1>
    </Container>
  );
};

export default BoardView;

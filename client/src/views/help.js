import React from 'react'
import { Container } from '@mui/material';
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

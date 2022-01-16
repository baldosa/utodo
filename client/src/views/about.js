import React from 'react'
import { Container } from '@mui/material';
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

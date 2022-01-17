import React from 'react'
import { Box, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

// Override components here
const components = {
  // Card: Card,
};
const TaskBoard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Board data={data} components={components} editable />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};

const FancyTaskBoard = styled(TaskBoard)`
  height: auto !important;
  margin: 100px !important;
`;

export default FancyTaskBoard;

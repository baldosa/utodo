import React from 'react'
<<<<<<< HEAD
import { Box, Fab } from '@mui/material';
=======
import { Button, IconButton, Box, Fab } from '@mui/material';
>>>>>>> d8f8d85 (implemented state management with redux)
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

import React, { Component } from 'react'
import { Button, IconButton, Box, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';

// Override components here
const components = {
  // Card: Card,
};

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Todo',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Doing',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane2',
      title: 'Done',
      label: '0/0',
      cards: [
        {id: 'Card3', title: 'Do something important', description: 'Cataloge my memes', label: '30 mins', draggable: true}
      ]
    }
  ]
}

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
  padding: 40px !important;
  height: auto !important;
`;

export default FancyTaskBoard;

import React from 'react'
<<<<<<< HEAD
import { Container, Typography, Box, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
=======
import { Container, Fab } from '@mui/material';
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'

>>>>>>> d8f8d85 (implemented state management with redux)

// Override components here
const components = {
  // Card: Card,
};

const BoardView = () => {
  const boardData = useSelector(state => state.board);
  const dispatch = useDispatch();

  function handleCardDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
    console.log(cardId);
    console.log(sourceLaneId);
    console.log(targetLaneId);
    console.log(position);
    console.log(cardDetails);
  }

  function handleLaneDragEnd(removedIndex, addedIndex, payload) {
    console.log(removedIndex);
    console.log(addedIndex);
    console.log(payload);
    dispatch({
      type: 'MOVE_LANE',
      payload: {removedIndex, addedIndex, payload}
    })
  }	

  return (
    <Container>
      <Helmet>
        <title>uTodo | Board</title>
      </Helmet>
      <h1>{boardData.name}</h1>
      <Board data={boardData} components={components} editable canAddLanes draggable collapsibleLanes handleDragEnd={handleCardDragEnd} handleLaneDragEnd={handleLaneDragEnd}	 />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default BoardView;

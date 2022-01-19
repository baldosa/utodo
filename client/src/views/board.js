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
<<<<<<< HEAD
import AsyncBoard from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
import { usePrefetch } from '@services/board'
import { useCallback, useEffect } from 'react'
=======
import Board from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
>>>>>>> af0c0a0 (implemented state management with redux)

>>>>>>> d8f8d85 (implemented state management with redux)

// Override components here
const components = {
  // Card: Card,
};

const BoardView = () => {
<<<<<<< HEAD
  let boardData = useSelector(state => state.board);
  const dispatch = useDispatch();
  const prefetchPage = usePrefetch('getBoardById', 1);

  const prefetchNext = useCallback(() => {
    prefetchPage()
  }, [prefetchPage])


  useEffect(() => {
    prefetchNext()
  }, [prefetchNext])

/*   let eventBus = undefined

  const setEventBus = (handle) => {
    eventBus = handle
  } */
/* 
  function handleCardDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
    console.log("PUBLISHINBG E ENTUBUS");
    console.log(boardData);
    console.log("PUBLISHINBG E ENTUBUS");
    // console.log(eventBus);
    dispatch({
      type: 'MOVE_CARD',
      payload: {cardId, sourceLaneId, targetLaneId, position, cardDetails}
    });
    // return false;
  }

  function handleLaneDragEnd(removedIndex, addedIndex, payload) {
    dispatch({
      type: 'MOVE_LANE',
      payload: {removedIndex, addedIndex, payload}
    });
  }	

  function handleLaneAdd(params) {
    dispatch({
      type: 'ADD_LANE',
      payload: {params}
    });
  }
 */

  function handleDataChange(data) {
    dispatch({
      type: 'UPDATE_BOARD',
      payload: {data}
    });
  }	
  
=======
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

>>>>>>> af0c0a0 (implemented state management with redux)
  return (
    <Container>
      <Helmet>
        <title>uTodo | Board</title>
      </Helmet>
      <h1>{boardData.name}</h1>
<<<<<<< HEAD
      <AsyncBoard
        data={boardData}
        components={components}
        editable
        canAddLanes
        draggable
        collapsibleLanes
        onDataChange={handleDataChange}
      />
=======
      <Board data={boardData} components={components} editable canAddLanes draggable collapsibleLanes handleDragEnd={handleCardDragEnd} handleLaneDragEnd={handleLaneDragEnd}	 />
>>>>>>> af0c0a0 (implemented state management with redux)
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default BoardView;

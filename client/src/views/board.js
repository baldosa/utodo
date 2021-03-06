import React from 'react'
import { Container, Fab } from '@mui/material';
import AsyncBoard from 'react-trello'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
import { usePrefetch } from '@services/board'
import { useCallback, useEffect } from 'react'

// Override components here
const components = {
  // Card: Card,
};

const BoardView = () => {
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
  
  return (
    <Container>
      <Helmet>
        <title>uTodo | Board</title>
      </Helmet>
      <h1>{boardData.name}</h1>
      <AsyncBoard
        data={boardData}
        components={components}
        editable
        canAddLanes
        draggable
        collapsibleLanes
        onDataChange={handleDataChange}
      />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default BoardView;

import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import MainMenu from '@components/mainMenu';
import HomeView from '@views/home';
import AboutView from '@views/about';
import HelpView from '@views/help';
import BoardView from '@views/board';
import MyBoardsView from '@views/myBoards';
import { styled } from '@mui/system';
import { persistStore } from 'redux-persist'
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store);

const MainContainer = styled(Box)`
  font-size: 1.1em;
  color: #FAFAFA;
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <MainContainer>
          <MainMenu></MainMenu>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="Help" element={<HelpView />} />
            <Route path="board" element={<BoardView />} />
            <Route path="myBoards" element={<MyBoardsView />} />
          </Routes>
        </MainContainer>
    </PersistGate>      
  </Provider>
  );
}

export default App;

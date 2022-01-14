import React from 'react';
import './App.css';
import Board from 'react-trello'
import { Box } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainMenu from '@components/mainMenu';
import HomeView from '@views/home';
import AboutView from '@views/about';
import HelpView from '@views/help';
import BoardView from '@views/board';
import MyBoardsView from '@views/myBoards';
import { styled } from '@mui/system';
// import MainMenu from 'components/mainMenu';


const MainContainer = styled(Box)`
  font-size: 1.1em;
  color: #FAFAFA;
  flexGrow: 1;
`;

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

function App() {
  return (
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
  );
}

export default App;

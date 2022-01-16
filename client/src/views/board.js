import React from 'react'
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

const BoardView = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Helmet>
        <title>uTodo | Board</title>
      </Helmet>
      <h1>Board&nbsp;
      <Tooltip title="Edit this board">
        <IconButton aria-label="Edit Board">
          <EditIcon onClick={handleClickOpen} />
        </IconButton>
      </Tooltip>
      </h1>
      <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Edit Board
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    Save
                  </Button>
                </Toolbar>
              </AppBar>
              <Box
              component="form"
              >
                <List>
                  <ListItem>
                    <TextField
                      required
                      id="outlined-required"
                      label="Board Name"
                      defaultValue="Current Board Name"
                      variant="standard"
                      fullWidth
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <TextField
                        label="Board Description"
                        defaultValue="Current Board Description Text"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={4}
                      />
                  </ListItem>
                </List>
              </Box>
            </Dialog>
      <Board data={data} components={components} editable />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default BoardView;

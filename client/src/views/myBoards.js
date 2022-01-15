import React from 'react'
import { Container } from '@mui/material';
import { Helmet } from "react-helmet";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, total, completed, pending, shared) {
  return { name, total, completed, pending, shared };
}

const rows = [
  createData('Trabajo', 50, 10, 40, 0),
  createData('uTodo', 15, 3, 12, 0),
  createData('Sequencer', 3, 0, 3, 0),
  createData('Video edit', 5, 2, 3, 0),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const BoardView = () => {
  return (
    <Container>
      <Helmet>
          <title>uTodo | My Boards</title>
      </Helmet>
      <h1>My Boards</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Board name</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
              <StyledTableCell align="right">Completed</StyledTableCell>
              <StyledTableCell align="right">Pending</StyledTableCell>
              <StyledTableCell align="right">Shared</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
                <StyledTableCell align="right">{row.completed}</StyledTableCell>
                <StyledTableCell align="right">{row.pending}</StyledTableCell>
                <StyledTableCell align="right">{row.shared}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BoardView;

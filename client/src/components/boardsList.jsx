import React, {Component} from 'react'
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

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
  
  const FilledIconButton = styled(IconButton)({
  marginLeft: '10px',
  color: '#FAFAFA',
  backgroundColor: '#9c27b0',
  padding: '10px',
  borderColor: '#0063cc',
  fontFamily: [].join(','),
  '&:hover': {
    backgroundColor: '#842294',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#842294',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
  });

function createData({ canEdit, name, total, completed, pending, shared }: { canEdit: Boolean; name: string; total: number; completed: number; pending: number; shared: Boolean; }) {
  return { canEdit, name, total, completed, pending, shared };
  }
 
function BoardsList(props): JSX.Element {

return  (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align="center">Action</StyledTableCell>
          <StyledTableCell>Board name</StyledTableCell>
          <StyledTableCell align="center">Total</StyledTableCell>
          <StyledTableCell align="center">Completed</StyledTableCell>
          <StyledTableCell align="center">Pending</StyledTableCell>
          <StyledTableCell align="center">Shared</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {props.boardData.map((row: { canEdit: Boolean; name: string; total: number; completed: number; pending: number; shared: Boolean }) => (
          <StyledTableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell align="center">
              <Tooltip title="Delete board">
                <IconButton aria-label="Delete board">
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit board">
                <IconButton aria-label="close">
                  <EditIcon fontSize="small"/>
                </IconButton>
              </Tooltip>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="center">{row.total}</StyledTableCell>
            <StyledTableCell align="center">{row.completed}</StyledTableCell>
            <StyledTableCell align="center">{row.pending}</StyledTableCell>
            <StyledTableCell align="center">{row.shared}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)};


export default BoardsList;
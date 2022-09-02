import React from "react";
import { styled } from "@mui/material/styles";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../../assets";
import "./table.scss";


// table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(9, 89, 159)",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Tables = () => {



  return (
    <div className="home__table">
      <div className="home__table">
        <TableContainer component={Paper} className="home__table-table">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#id</StyledTableCell>
                <StyledTableCell>Product-Name</StyledTableCell>
                <StyledTableCell>Product-image</StyledTableCell>
                <StyledTableCell>amount</StyledTableCell>
                <StyledTableCell>method</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.products.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.product}</StyledTableCell>
                  <StyledTableCell>
                    <img src={row.img} alt={row.product} />
                  </StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.method}</StyledTableCell>
                  <StyledTableCell
                  // this className=`
                  //   row.status == "Approved" ? "positive" : "negative"
                  // } give the same result  as bello className in Span
                  >
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </StyledTableCell>
                  <StyledTableCell>{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Tables;

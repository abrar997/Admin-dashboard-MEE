import React from "react";
import "./alluser.scss";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../../assets";

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

const AllUsers = ({ title, link, btn }) => {
  const [userData, setData] = React.useState(data.users);

  const handleDetlete = (id) => {
    setData(userData.filter((item) => item.id !== id));
  };
  return (
    <div className="list__user">
      <div className="list__user-header">
        <div className="list__user-header_title">{title} </div>
        <div className="list__user-header_new">
          <Link to={link}>
            <button className=" customer-button">{btn} </button>
          </Link>
        </div>
      </div>
      <TableContainer component={Paper} className="list__user-table">
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          rowsPerPageOptions={[2]}
          checkboxSelection
        >
          <TableHead>
            {userData ? (
              <TableRow>
                <StyledTableCell>#id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>phone Number</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            ) : (
              <TableRow>
                <StyledTableCell>#id</StyledTableCell>
                <StyledTableCell>Product-Name</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>customer</StyledTableCell>
                <StyledTableCell>amount</StyledTableCell>
                <StyledTableCell>method</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>date</StyledTableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
                <StyledTableCell>
                  <img src={row.img} />{" "}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.number}</StyledTableCell>
                <StyledTableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </StyledTableCell>

                <StyledTableCell className="list_user-action">
                  <Link to={"" + row.id} style={{ textDecoration: "none" }}>
                    <div className=" list_user-action_view">View</div>
                  </Link>
                  <div
                    className=" list_user-action_delete"
                    onClick={() => handleDetlete()}
                  >
                    Delete
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllUsers;

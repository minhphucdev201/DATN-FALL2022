import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";
import React from "react";
import { formatPrice } from "./../../../../../utils/common";

AccountOrders.propTypes = {};

function AccountOrders(props) {
  const order = JSON.parse(localStorage.getItem("order"));
  console.log("order", order);
  return (
    <Grid item xs={12} lg={9} pt={4}>
      <Box>
        <Typography>ĐƠN HÀNG CỦA BẠN</Typography>
        <Box sx={{ paddingTop: "24px" }}>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Đơn hàng</TableCell>
                  <TableCell align="left">Ngày</TableCell>
                  <TableCell align="left">Địa chỉ nhận hàng </TableCell>
                  <TableCell align="left">Thành tiền</TableCell>
                  <TableCell align="left">TT thanh toán</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {order._id}
                  </TableCell>
                  <TableCell align="left">{moment(order.createdA).format("l")}</TableCell>
                  <TableCell align="left">{order.address}</TableCell>
                  <TableCell align="left">{formatPrice(order.total)}</TableCell>
                  <TableCell align="left">Chưa thu tiền</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Grid>
  );
}

export default AccountOrders;

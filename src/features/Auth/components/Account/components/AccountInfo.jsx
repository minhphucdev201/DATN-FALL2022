import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

AccountInfo.propTypes = {};

function AccountInfo(props) {
  const customer = useSelector((state) => state.user.current);
  return (
    <Grid item xs={12} lg={9}>
      <div className="account__right">
        <h5 className="account__right--title">THÔNG TIN TÀI KHOẢN</h5>
        <div className="account__right--useraccount">
          <p>
            <strong>Họ tên:</strong> {customer.fullName}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default AccountInfo;

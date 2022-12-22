import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs, Container, Grid, Link, makeStyles, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./styles.scss";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountMenu from "./components/AccounntMenu";
import AccountInfo from "./components/AccountInfo";
import AccountOrders from "./components/AccountOrders";
import AccountChangePassword from "./components/AccountChangePassword";
import AccountAddress from "./components/AccountAddress";
Account.propTypes = {};
// const useStyles = makeStyles((theme) => {});
function Account(props) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const customer = useSelector((state) => state.user.current);
  function handleClick(event) {
    history.push("/");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      sx={{ cursor: "pointer" }}
      color="inherit"
      onClick={handleClick}
    >
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
      thông tin của tôi
    </Typography>,
  ];
  return (
    <div className="account">
      <div className="account__breadcrumb">
        <Container>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ color: "#5C5757" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>
      </div>
      <div className="account__info">
        <Container>
          <Grid container>
            <AccountMenu />
            <Switch>
              <Route exact path={url}>
                <AccountInfo />
              </Route>

              <Route path={`${url}/orders`} component={AccountOrders}>
                <AccountOrders />
              </Route>
              <Route path={`${url}/changepassword`} component={AccountChangePassword}>
                <AccountChangePassword />
              </Route>
              <Route path={`${url}/address`} component={AccountAddress}>
                <AccountAddress />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Account;

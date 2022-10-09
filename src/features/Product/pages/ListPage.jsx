import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";
import "./styles.scss";
ListPage.propTypes = {};

function ListPage(props) {
  return (
    <div>
      <div className="sectionBanner">
        <img
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
        <h1>Tất cả sản phẩm</h1>
      </div>
      <Container className="main">
        <Grid container spacing={2}>
          <Grid item xs={4} className="main__left">
            <div className="main__sidebar">
              <Box>hi</Box>
            </div>
          </Grid>
          <Grid item xs={8} className="main__right">
            hi
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ListPage;

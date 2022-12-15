import React from "react";
import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

ShowMiniCart.propTypes = {
  onClose: PropTypes.func,
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: "300px",
      minHeight: "100px",
      backgroundColor: "white",
      color: "black",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      padding: theme.spacing(1),
      position: "relative",
      borderRadius: "5px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      zIndex: 1,

      "&::before": {
        content: '""',
        position: "absolute",
        top: theme.spacing(-2),
        right: "6px",
        borderStyle: "solid",
        borderWidth: "8px 10px",
        borderColor: "transparent transparent white transparent",
      },
    },
    message: {
      textAlign: "center",
      paddingBottom: theme.spacing(2),
    },
    action: {
      display: "inline-block",
      padding: 0,
      margin: "0 auto",
    },
    btn: {
      color: "#ffffff",
      backgroundColor: "#2D7D32",
      "& >span :hover ": {
        backgroundColor: "none",
      },
    },

    closeBtn: {
      zIndex: 1,
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
      fontSize: "20px",
      cursor: "pointer",
      opacity: "0.5",
    },
  })
);

function ShowMiniCart(props) {
  const { onClose } = props;
  const classes = useStyles();
  const history = useHistory();
  const handleClose = () => {
    if (!onClose) return;
    onClose();
  };
  const handleClickCart = () => {
    history.push("/cart");
    onClose();
  };

  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.message}>Thêm vào giỏ hàng thành công!</Box>
        <Box className={classes.action}>
          <Button
            variant="contained"
            color="success"
            sx={{ padding: "8px 12px" }}
            size="small"
            onClick={handleClickCart}
          >
            Xem giỏ hàng và thanh toán
          </Button>
        </Box>
        <CloseIcon onClick={handleClose} className={classes.closeBtn} />
      </Box>
    </div>
  );
}

export default ShowMiniCart;

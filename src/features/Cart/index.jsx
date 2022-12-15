import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Cart from "./components/Cart";

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      <Cart />
    </div>
  );
}

export default CartFeature;

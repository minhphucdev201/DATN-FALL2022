import { makeStyles } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { React, useEffect, useState } from "react";
// import "../../../utils/index";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ProductThumbnail from "../components/ProductThumbnail";
import "./styles.scss";
// import required modules
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart, showMiniCart } from "../../Cart/cartSlice";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductReviews from "../components/ProductReviews";
import productApi from "./../../../api/productApi";
import AddToCartForm from "./../components/AddToCartForm";
import ProductBreadcrumb from "./../components/ProductBreadcrumb";
import ProductInfo from "./../components/ProductInfo";
import ProductMenu from "./../components/ProductMenu";
import ProductRelate from "./../components/ProductRelate";
import useProductDetail from "./../hooks/useProductDetail";
DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
    maxWidth: "150px",
    flexFlow: "row nowap",
    border: "1px solid #ccc",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    "& input": {
      textAlign: "center",
      padding: "0",
    },
    "& fieldset": {
      border: "none",
    },
    "& div": {
      width: "calc(40%)",
      borderRadius: "0",
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",
    },
  },
  button: {
    // marginTop: theme.spacing(2),
    minWidth: "calc(30%)",
    padding: "0",
  },
}));
function DetailPage(props) {
  const classes = useStyles();
  const [relate, setRelate] = useState([]);
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getProductNew({ page: 1, limit: 4 });
        setRelate(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();
  if (loading) {
    return <Box>Loading</Box>;
  }
  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product._id,
      product,
      quantity,
    });
    dispatch(action);
    dispatch(showMiniCart());
  };
  return (
    <div className="sectionDetail">
      <ProductBreadcrumb product={product} />
      <Container>
        <div className="productDetail">
          <Grid container spacing={2} className="productDetail__main">
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__image">
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__details">
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
          <ProductMenu />
          <Switch>
            <Route exact path={url}>
              <ProductDescription product={product} />
            </Route>

            <Route path={`${url}/additional`} component={ProductAdditional}>
              <ProductAdditional product={product} />
            </Route>
            <Route path={`${url}/reviews`} component={ProductReviews}>
              <ProductReviews product={product} />
            </Route>
          </Switch>

          <div className="productDetail__related">
            <ProductRelate product={relate} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailPage;

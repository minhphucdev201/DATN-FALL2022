import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { CardHeader, Pagination } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PropTypes } from "prop-types";
import InputField from "../../../components/form-controls/InputField";
import { useSelector } from "react-redux";
import commentApi from "../../../api/commentApi";
ProductReviewsForm.propTypes = {
  onSubmit: PropTypes.func,
  product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
  },
  card: {
    padding: theme.spacing(0, 2),
    margin: theme.spacing(2, 0),
  },
  title: {
    // textDecoration: "underline",
    width: "100%",
    paddingBottom: theme.spacing(1),
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "22px",
  },
  avatar: {
    backgroundColor: theme.palette.info.light,
    paddingLeft: theme.spacing(0),
  },
  left: {
    // width: "500px",
    padding: theme.spacing(0, 2),
  },
  right: {
    // flex: "1 1 0",
    paddingLeft: theme.spacing(2),
  },
}));
function ProductReviewsForm(props) {
  const { onSubmit, product = {} } = props;
  const classes = useStyles();
  const [value, setValue] = useState();
  const customer = useSelector((state) => state.user.current);
  const [commentList, setCommentList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
  });
  const [filters, setFilters] = useState({
    page: 1,
    limit: 5,
    total: 6,
  });
  const schema = yup.object().shape({
    content: yup.string().required("Vui lòng nhập nội dung đánh giá"),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
      const { data, pagination } = await commentApi.getIdProduct(product._id, filters);
      setCommentList(data);
    }
    form.reset();
  };
  const form = useForm({
    defaultValues: {
      //   fullName: "",
      //   email: "",
      customerId: customer._id,
      productId: product._id,
      content: "",
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await commentApi.getIdProduct(product._id, filters);
        setCommentList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fecth data comment by IdProduct:", error);
      }
    })();
  }, [filters]);
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  };
  return (
    <Paper elevation={0} className={classes.root}>
      <Box>
        <Box container>
          <Box mx={2}>
            <Typography component="h4" variant="h5">
              Thêm đánh giá
            </Typography>
          </Box>
          <Box>
            <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.root}>
              <InputField
                hidden="none"
                name="customerId"
                // label="custmerId"
                // placeholder="Nhập Địa chỉ Email"
                form={form}
                value={customer.name}
              />
              <InputField
                hidden="none"
                name="productId"
                // label="productId"
                value={product._id}
                // placeholder="Nhập Địa chỉ Email"
                form={form}
              />
              <InputField
                name="content"
                label="Nội dung"
                placeholder="Nhập nội dung đánh giá"
                form={form}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                style={{ marginTop: "15px" }}
              >
                Gửi đánh giá
              </Button>
            </form>
          </Box>{" "}
          <Box item className={classes.left}>
            <Box sx={{}} mb={4}>
              <Typography variant="body1" component="h1" className={classes.title}>
                ĐÁNH GIÁ SẢN PHẨM
              </Typography>
            </Box>
            {commentList.map((comment) => (
              <Card className={classes.card} variant="outlined">
                <CardHeader
                  p={0}
                  avatar={<Avatar src="/broken-image.jpg" />}
                  title={comment.customerId.fullName}
                />
                <CardContent p={0}>
                  {/* <Rating name="read-only" value={3.5} precision={0.5} readOnly /> */}

                  <Typography variant="body1" color="textSecondary" component="p">
                    {comment.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "12px 0px" }}>
              <Pagination
                padding="20px"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                color="success"
                onChange={handlePageChange}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProductReviewsForm;

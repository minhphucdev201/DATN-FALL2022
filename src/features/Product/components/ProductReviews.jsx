import { React } from "react";
import { useDispatch } from "react-redux";
import ProductReviewsForm from "./ProductReviewsForm";

ProductReviews.propTypes = {};
function ProductReviews(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log("Failed to register:", error);
    }
  };
  return (
    <div>
      <ProductReviewsForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductReviews;

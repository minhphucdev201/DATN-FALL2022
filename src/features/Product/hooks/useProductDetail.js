import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        console.log(result);
        setProduct(result.data);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}

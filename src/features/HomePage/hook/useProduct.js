import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

export default function useProductList() {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    (async () => {})();
  }, []);
}

import { useEffect } from "react";
import { useState } from "react";
import blogApi from "./../../../api/blogApi";

export default function useBlogDetail(blogId) {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await blogApi.get(blogId);
        setBlog(result.data);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }
      setLoading(false);
    })();
  }, [blogId]);

  return { blog, loading };
}

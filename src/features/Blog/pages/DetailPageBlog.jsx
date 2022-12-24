import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import blogApi from "../../../api/blogApi";
import BlogBreadcrumb from "../components/BlogBreadcrumb";
import BlogRelate from "../components/BlogRelate";
import BlogRelated from "../components/BlogRelated/BlogRelated";
import useBlogDetail from "../hooks/useBlogDetail";
import BlogInfo from "./../components/BlogInfo";
import "./styles.scss";

DetailPage.propTypes = {};

function DetailPage(props) {
  const {
    params: { blogId },
  } = useRouteMatch();
  const { blog, loading } = useBlogDetail(blogId);
  const [relate, setRelate] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await blogApi.getBlogNewest({ page: 1, limit: 6 });
        setRelate(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  if (loading) {
    return <Box>Loading</Box>;
  }
  return (
    <div className="blogDetail">
      <BlogBreadcrumb blog={blog} />
      <BlogInfo blog={blog} />
      <div className="blogDetail__related">
        <BlogRelate blog={relate} />
      </div>
    </div>
  );
}

export default DetailPage;

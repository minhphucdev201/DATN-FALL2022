import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { React } from "react";
import { useHistory } from "react-router-dom";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import "./BlogRelated/styles.scss";
BlogRelate.propTypes = {
  blog: PropTypes.object,
};

function BlogRelate({ blog = {} }) {
  const history = useHistory();

  return (
    <>
      <div className="blogDetail__related--head">
        <h2>Bài viết liên quan</h2>
      </div>
      <Swiper
        navigation={true}
        freeMode={true}
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {blog.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div
              className="post"
              onClick={() => {
                history.push(`/blogs/${blog._id}`);
              }}
            >
              <Card sx={{ boxShadow: "none", outline: "none" }}>
                <CardActionArea sx={{ width: "100%" }}>
                  <div className="post__image">
                    <CardMedia
                      component="img"
                      height="140"
                      image={blog.thumbnail}
                      alt="green iguana"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        textAlign: "center",
                        paddingBottom: "0px",
                      }}
                    >
                      {blog.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BlogRelate;

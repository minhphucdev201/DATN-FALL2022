import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { React, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.scss";
ProductThumbnail.propTypes = {
  product: PropTypes.array,
};

function ProductThumbnail({ product }) {
  const [activeThumb, setActiveThumb] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        // grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={product.thumbnail[0].img2} alt="product images" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product.images.map((img) => (
          <SwiperSlide>
            {/* <div className="product-images-slider-thumbs-wrapper"> */}
            <img src={img} alt="product images" />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductThumbnail;

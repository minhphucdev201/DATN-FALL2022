import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { React, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
ProductThumbnail.propTypes = {
  product: PropTypes.array,
};

function ProductThumbnail({ product = {} }) {
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
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        <SwiperSlide>
          <img src={product.thumbnail[0].img2} alt={product.thumbnail[0]._id} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {product.images.map((img) => (
          <SwiperSlide>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductThumbnail;

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import BlogRelated from "../components/BlogRelated/BlogRelated";

DetailPage.propTypes = {};

function DetailPage(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      TIN TỨC
    </Link>,
    <Typography key="3" color="text.primary" sx={{ fontWeight: "550" }}>
      5 Lợi Ích Khi Dùng Máy Xông Phun Sương
    </Typography>,
  ];
  return (
    <div className="blogDetail">
      <div className="blogDetail__breadcrumb">
        <Container>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ color: "#5C5757" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>
      </div>
      <Container>
        <div className="blogDetail__main">
          <div className="blogDetail__head">
            <h3 className="blogDetail__head--title">5 Lợi Ích Khi Dùng Máy Xông Phun Sương</h3>
            <span className="blogDetail__head--date">25/09/2022</span>
          </div>
          <div className="blogDetail__content">
            <p>
              <strong>Máy xông tinh dầu</strong> dần thay thế các thiết bị tỏa hương như đèn đốt,
              nến thơm,...bởi độ an toàn và hiệu quả mang lại. Chế độ động thông qua quá trình
              khuếch tán hương thơm từ tinh dầu thiên nhiên bằng công nghệ siêu âm cấp ẩm, phân tách
              tinh dầu thành từ hạt nhỏ tạo thành hơi sau đó lan tỏa đi khắp không gian, mang đến
              nhiều lợi ích cho sức khỏe như: thư giãn, ngủ ngon, giảm stress, tăng cường đề kháng,
              hô hấp khỏe mạnh, đuổi côn trùng,...Dưới đây là 5 lợi ích và ưu điểm khi sử dụng máy
              xông phun sương Ha Eva chia sẻ cùng bạn!
            </p>
            <div className="blogDetail__content--item">
              <p>
                <strong>1. Máy không sinh nhiệt</strong>
              </p>
              <p>
                Không giống như đèn đốt, nến thơm hay máy làm mát không khí trước khi, máy xông tinh
                dầu giải phóng các phân tử bằng sóng siêu âm để làm sạch không khí. Máy xông phun
                sương không gây ra nguy cơ cháy nổ, bỏng, tràn sáp hay các tai nạn khác từ nến và
                đèn đốt.
              </p>
              <div className="blogDetail__content--thumbnail">
                <img
                  src="https://res.cloudinary.com/phucdev/image/upload/v1666249617/1280x507_gjomon.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="blogDetail__content--item">
              <p>
                <strong>2. Cung cấp độ ẩm - tạo ion có lợi</strong>
              </p>
              <p>
                <strong>Máy xông tinh dầu</strong> sử dụng công nghệ khuếch tán siêu âm ion phân
                tách hỗn hợp nước và tinh dầu thành những phần tử cực nhỏ tạo thành cột hơi bay lên
                cao ở dạng sương mù, làm ẩm không khí nhưng không ướt vật dụng xung quanh. Máy cấp
                lượng nước vừa đủ cho không gian trong nhà đỡ hanh khô, ngột ngạt, bong da, nứt nẻ
                trong những lúc thời tiết trở lạnh. Không những vậy, độ phun vừa đủ không ngưng tụ
                hơi nước hay làm ẩm mốc gây ảnh hưởng đến đồ dùng đặc biệt là đồ điện tử trong nhà.
              </p>
              <div className="blogDetail__content--thumbnail">
                <img
                  src="https://res.cloudinary.com/phucdev/image/upload/v1666249613/148154709_3765830773502865_917765736629583406_n_h7hiug.jpg"
                  alt=""
                />
              </div>
              <p>
                Với tần số 2,4 triệu Hz/giây tạo ra ion âm từ giúp loại bỏ vi khuẩn, virus và bụi
                bẩn trong không khí. Các ion chứa mùi hương giúp thư giãn tinh thần, cải thiện chất
                lượng giấc ngủ, kháng khuẩn, kháng viêm, hỗ trợ hô hấp, đề kháng, miễn dịch, làm đẹp
                da, đuổi côn trùng,...
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="blogDetail__related">
        <div className="blogDetail__related--head">
          <h2>Bài viết liên quan</h2>
        </div>
        <Swiper
          navigation={true}
          freeMode={true}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <BlogRelated
              data={{
                imgSrc:
                  "https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/937bb5735035a76bfe24.jpeg",
                titleblog: "9 tác dụng cua tinh dầu Chanh cho sức khỏe & sắc đẹp",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogRelated
              data={{
                imgSrc:
                  "https://haeva.com.vn/wwwroot/resources/upload/img/news/11-2021/stress.jpeg",
                titleblog: "Tinh dầu giảm stress hiệu quả",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogRelated
              data={{
                imgSrc:
                  "https://haeva.com.vn/wwwroot/resources/upload/img/news/11-2021/machine.jpeg",
                titleblog: "Tinh Dầu Xông Phòng Giúp Thư Giãn",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogRelated
              data={{
                imgSrc:
                  "https://haeva.com.vn/wwwroot/resources/img/news/5-2021/9123914928754868092039374039954948534829056n.jpg",
                titleblog: "Tinh dầu thiên nhiên là gì?",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogRelated
              data={{
                imgSrc:
                  "https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/937bb5735035a76bfe24.jpeg",
                titleblog: "9 tác dụng cua tinh dầu Chanh cho sức khỏe & sắc đẹp",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default DetailPage;

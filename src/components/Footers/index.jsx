import CopyrightIcon from "@mui/icons-material/Copyright";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
Footer.propTypes = {};

function Footer(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/chinh-sach-huong-dan");
  };
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={2} className="footer__top" sx={{ paddingTop: "16px" }}>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="footer__item">
              <h3 className="footer__item--title">HERBAL OIL</h3>
              <div className="footer__content">
                <p className="footer__content--hotline">
                  Hotline: <span>028 7308 8800</span>{" "}
                </p>
                <p className="footer__content--email">
                  Email: <span>herbaloilvn@gmail.com</span>{" "}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="footer__item">
              <h3 className="footer__item--title">DANH MỤC SẢN PHẨM</h3>
              <div className="footer__content">
                <ul className="footer__lists">
                  <li className="footer__items">
                    <a
                      href
                      className="footer__items--link"
                      onClick={() => {
                        history.push(
                          "/products?column=_id&type=desc&idCatalog=63a310108975bf54b69118ca"
                        );
                      }}
                    >
                      SẢN PHẨM MỚI
                    </a>
                  </li>

                  <li className="footer__item">
                    <a
                      href
                      className="footer__items--link"
                      onClick={() => {
                        history.push(
                          "/products?column=_id&type=desc&idCatalog=63a310228975bf54b69118ce"
                        );
                      }}
                    >
                      TINH DẦU PHỐI HƯƠNG
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href
                      className="footer__items--link"
                      onClick={() => {
                        history.push(
                          "/products?column=_id&type=desc&idCatalog=63a3106f8975bf54b69118d2"
                        );
                      }}
                    >
                      NẾN THƠM
                    </a>
                  </li>

                  <li className="footer__item">
                    <a
                      href
                      className="footer__items--link"
                      onClick={() => {
                        history.push(
                          "/products?column=_id&type=desc&idCatalog=63a3122f8975bf54b69118e3"
                        );
                      }}
                    >
                      NẾN THƠM GIÁNG SINH
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="footer__item">
              <h3 className="footer__item--title">CHÍNH SÁCH KHÁCH HÀNG</h3>
              <div className="footer__content">
                <ul className="footer__lists">
                  <li className="footer__items">
                    <a className="footer__items--link" href onClick={handleClick}>
                      CHÍNH SÁCH BẢO MẬT
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__items--link" href onClick={handleClick}>
                      CHỈNH SÁCH BẢO HÀNH
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__items--link" href onClick={handleClick}>
                      CHÍNH SÁCH ĐỔI TRẢ
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__items--link" href onClick={handleClick}>
                      HƯỚNG DẪN MUA HÀNG
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="footer__item">
              <h3 className="footer__item--title">ĐĂNG KÝ NHẬN TIN</h3>
              <div className="footer__content">
                <div className="footer__subcrible">
                  <p className="footer__subcrible--txt">
                    Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
                  </p>
                </div>
                <div className="footer__form">
                  <input type="text" placeholder="Email của bạn" className="footer__form--input" />
                  <button type="submit" className="footer__form--btn">
                    ĐĂNG KÝ
                  </button>
                </div>
                <div className="footer__payment">
                  <ul className="footer__payment--list">
                    <li className="footer__payment--item">
                      <img
                        src="https://play-lh.googleusercontent.com/czro-ULAemRM1bMldf9gHQ7ajfa9NzKiZXFjI85mxawo60CaKMyHsjWaM38KHiZpsgY"
                        alt=""
                      />
                    </li>
                    <li className="footer__payment--item">
                      <img
                        src="https://brademar.com/wp-content/uploads/2022/05/Visa-Logo-PNG-2014-%E2%80%93-2021.png"
                        alt=""
                      />
                    </li>
                    <li className="footer__payment--item">
                      <img
                        src="https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/07/1581089357407-1580819448160-vnpay.png"
                        alt=""
                      />
                    </li>
                    <li className="footer__payment--item">
                      <img
                        src="https://brademar.com/wp-content/uploads/2022/05/PayPal-Logo-PNG-2014-%E2%80%93-Now-1.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className="footer__copyright" align="center">
          <span className="footer__copyright--item">
            <CopyrightIcon sx={{ marginRight: "8px" }} /> Bản quyền thuộc về &nbsp;
            <a href="https://www.facebook.com/phucdut201" target="_blank">
              HERBAL OILD &nbsp;
            </a>
            2022
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Container } from "@mui/material";
Contact.propTypes = {};

function Contact(props) {
  return (
    <div>
      <div className="sectionBanners">
        <img
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
        <h1>Chính sách - Hướng dẫn</h1>
      </div>
      <div className="content">
        <Container>
          <div className="content__item">
            <p>
              <strong>1. MỤC ĐÍCH THU THẬP THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</strong>
            </p>
            <p className="content__item--txt">
              Cung cấp dịch vụ cho <strong>khách hàng</strong> và quản lý, sử dụng thông tin cá nhân
              của <strong>người tiêu dùng</strong> nhằm mục đích quản lý cơ sở dữ liệu về Người Tiêu
              Dùng và kịp thời xử lý các tình huống phát sinh (nếu có).
            </p>
            <p>&nbsp;</p>
          </div>
          <div className="content__item">
            <p>
              <strong>2. PHẠM VI SỬ DỤNG THÔNG TIN CÁ NHÂN</strong>
            </p>
            <p className="content__item--txt">
              Website <i>tan-herbal-store.vercel.app</i> sử dụng thông tin của{" "}
              <strong>người tiêu dùng</strong> cung cấp để:
            </p>
            <div className="content__box">
              <ul className="content__list">
                <li className="content__list--item">
                  Cung cấp các dịch vụ, thông tin sản phẩm đến <strong>người tiêu dùng</strong>;
                </li>
                <li className="content__list--item">
                  Gửi các thông báo về các hoạt động trao đổi thông tin giữa{" "}
                  <strong>người tiêu dùng</strong> và Hafos;
                </li>
                <li className="content__list--item">
                  Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của Người Tiêu
                  Dùng hoặc các hoạt động giả mạo <strong>người tiêu dùng</strong>;
                </li>
                <li className="content__list--item">
                  Liên lạc và giải quyết khiếu nại với <strong>người tiêu dùng</strong>;
                </li>
                <li className="content__list--item">
                  Xác nhận và trao đổi thông tin về giao dịch của <strong>người tiêu dùng</strong>{" "}
                  tại Hafos;
                </li>
                <li className="content__list--item">
                  Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm quyền.
                </li>
              </ul>
            </div>
            <p>&nbsp;</p>
          </div>
          <div className="content__item">
            <p>
              <strong>3. THỜI GIAN LƯU TRỮ THÔNG TIN CÁ NHÂN</strong>
            </p>
            <p className="content__item--txt">
              Không có thời hạn ngoại trừ trường hợp <strong>người tiêu dùng</strong> gửi có yêu cầu
              hủy bỏ tới cho Ban quản trị hoặc Công ty giải thể hoặc bị phá sản.
            </p>
            <p>&nbsp;</p>
          </div>
          <div className="content__item">
            <p>
              <strong>
                4. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI THÔNG TIN CÁ NHÂN CỦA NGƯỜI
                TIÊU DÙNG
              </strong>
            </p>
            <p className="content__item--txt">
              <strong>người tiêu dùng</strong> đồng ý rằng, trong trường hợp cần thiết, các cơ quan/
              tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình,
              bao gồm:
            </p>
            <div className="content__box">
              <ul className="content__list">
                <li className="content__list--item">Ban quản trị</li>
                <li className="content__list--item">
                  Bên thứ ba có dịch vụ tích hợp với Website <i>tan-herbal-store.vercel.app</i>
                </li>
                <li className="content__list--item">Công ty tổ chức sự kiện và nhà tài trợ</li>
                <li className="content__list--item">
                  Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy định tại quy
                  chế hoạt động
                </li>
                <li className="content__list--item">Công ty nghiên cứu thị trường</li>
                <li className="content__list--item">
                  Cố vấn tài chính, pháp lý và Công ty kiểm toán
                </li>
                <li className="content__list--item">
                  Bên khiếu nại chứng minh được hành vi vi phạm của <strong>người tiêu dùng</strong>
                </li>
                <li className="content__list--item">
                  Theo yêu cầu của cơ quan nhà nước có thẩm quyền
                </li>
              </ul>
            </div>
            <p>&nbsp;</p>
          </div>
          <div className="content__item">
            <p>
              <strong>5. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</strong>
            </p>
            <p className="content__item--txt">
              Thông tin cá nhân của <strong>người tiêu dùng</strong> trên Website Hafos.vn được Ban
              quản trị cam kết bảo mật tuyệt đối theo chính sách bảo mật thông tin cá nhân được đăng
              tải trên Website
              <i>tan-herbal-store.vercel.app</i> Việc thu thập và sử dụng thông tin của mỗi Người
              Tiêu Dùng chỉ được thực hiện khi có sự đồng ý của <strong>người tiêu dùng</strong> trừ
              những trường hợp pháp luật có quy định khác và quy định này.
            </p>
            <p className="content__item--txt">
              Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về thông tin cá
              nhân của <strong>người tiêu dùng</strong> khi không có sự đồng ý của{" "}
              <strong>người tiêu dùng</strong> ngoại trừ các trường hợp được quy định tại quy định
              này hoặc quy định của pháp luật.
            </p>
            <p className="content__item--txt">
              Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu
              cá nhân của <strong>người tiêu dùng</strong>, Ban quản trị có trách nhiệm thông báo và
              làm việc với cơ quan chức năng điều tra và xử lý kịp thời, đồng thời thông báo cho{" "}
              <strong>người tiêu dùng</strong>
              được biết về vụ việc.
            </p>
            <p className="content__item--txt">
              Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của{" "}
              <strong>người tiêu dùng</strong> bao gồm thông tin hóa đơn kế toán chứng từ số hóa
              tại. 8. CƠ CHẾ TIẾP NHẬN VÀ GIẢI QUYẾT KHIẾU NẠI LIÊN QUAN ĐẾN VIỆC THÔNG TIN CỦA
              NGƯỜI TIÊU DÙNG
            </p>
          </div>
          <p>&nbsp;</p>
          <div className="content__item">
            <p>
              <strong>
                6. CƠ CHẾ TIẾP NHẬN VÀ GIẢI QUYẾT KHIẾU NẠI LIÊN QUAN ĐẾN VIỆC THÔNG TIN CỦA NGƯỜI
                TIÊU DÙNG
              </strong>
            </p>
            <p className="content__item--txt">
              Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi,{" "}
              <strong>người tiêu dùng</strong> gửi email khiếu nại đến email hafos.vn@gmail.com hoặc
              gọi điện thoại tới số 0937 141 663 để khiếu nại và cung cấp chứng cứ liên quan tới vụ
              việc cho Ban quản trị. Ban quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là
              trong vòng 24 (hai mươi tư) giờ làm việc kể từ thời điểm nhận được khiếu nại.
            </p>
            <p>&nbsp;</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;

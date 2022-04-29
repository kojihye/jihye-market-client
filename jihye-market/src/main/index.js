import React from "react";
import "./index.css"; //css같은경우는 from을 적지않음, css파일내부에 export 없음
import axios from "axios";

function MainPage() {
  //네트워크 통신에 필요한 axios 를 다운받아야함.
    axios.get()
  return (
    //복수개의 태그를 리턴할 수 없어서 <div> 씌워줘야함
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          <div className="product-card">
            //html 에서 class와 동일
            <div>
              <img
                className="product-img"
                src="images/products/keyboard1.jpg"
              />
            </div>
            <div className="product-contents">
              <span className="product-name">키보드</span>
              <span className="product-price">20000</span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" />
                <span>지혜</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;

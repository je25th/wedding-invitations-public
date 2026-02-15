import React from "react";
import "./../basic.css";
import "./../basic-w600.css";
import * as info from "./../info";

import Location from "../components/Location";
import BasicGallery from "../components/BasicGallery";
import Share from "../components/Share";
import MapService from "../components/MapService";

function Basic({ openKModal, openJModal }) {
  return (
    <React.Fragment>
      <div id="basic" className="basic-wrapper">
        <section id="section-top">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/basic/1.png`} />
            <div className="text-overlay">
              <p>
                장담하건대, 세상이 다 겨울이어도
                <br />
                우리 사랑은 늘 봄처럼 따뜻하고 간혹,
                <br />
                여름처럼 뜨거울 겁니다
                <br />
                <span
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "4.5rem",
                  }}
                >
                  {"- 이수동 <사랑가>"}
                </span>
              </p>
            </div>
          </div>
        </section>
        <section id="section-day">
          <img src={`${process.env.PUBLIC_URL}/assets/basic/2.png`} />
          <div>
            <p>0000년 00월 00일 0요일 오전 00시</p>
            <p>0000000 2층 0000000</p>
          </div>
        </section>
        <section id="section-introduce">
          <img
            style={{
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
            src={`${process.env.PUBLIC_URL}/assets/basic/3.png`}
          />
          <div className="promise">
            <p>
              두 사람이 다솜으로 만나
              <br />
              미쁨으로써 옴살이 되려 합니다
            </p>
            <p>
              그동안 아껴주신 어른과 아음, 벗들을 모시고
              <br />
              가시버시의 살부침을 맺고자 하오니
              <br />두 사람의 앞날에 비나리를 해 주시기 바랍니다
            </p>
            <p>
              저희 두 사람 한살매 서로 괴오는 마음으로
              <br />
              의초롭고 살뜰하게 살아가겠습니다
            </p>
          </div>
          <hr />
          <div className="family">
            <p
              className="bride"
              style={{
                marginTop: "15%",
              }}
            >
              <span>000</span>
              <span className="s">∙</span>
              <span>000</span>
              <span className="s">의 아들</span>
              <a href={`tel:${info.K_PHONE}`}>
                000
                <i className="icon-phone" />
              </a>
            </p>
            <p
              className="bride"
              style={{
                marginBottom: "15%",
              }}
            >
              <span>000</span>
              <span className="s">∙</span>
              <span>000</span>
              <span className="s">의 딸</span>
              <a href={`tel:${info.J_PHONE}`}>
                000
                <i className="icon-phone" />
              </a>
            </p>
          </div>
          <hr />
          <div className="family">
            <div className="parent">
              <h3>신랑 혼주</h3>
              <div>
                <a href={`tel:${info.K_D_PHONE}`}>
                  <p>
                    父 000 <i className="icon-phone" />
                  </p>
                </a>
                <a href={`tel:${info.K_M_PHONE}`}>
                  <p>
                    母 000 <i className="icon-phone" />
                  </p>
                </a>
              </div>
            </div>
            <div className="parent">
              <h3>신부 혼주</h3>
              <div>
                <a href={`tel:${info.J_D_PHONE}`}>
                  <p>
                    父 000 <i className="icon-phone" />
                  </p>
                </a>
                <a href={`tel:${info.J_M_PHONE}`}>
                  <p>
                    母 000 <i className="icon-phone" />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <section id="section-gallary">
          <BasicGallery />
        </section>
        <hr />
        <section
          id="section-map"
          style={{
            paddingTop: "20%",
            paddingBottom: "15%",
          }}
        >
          <img
            style={{
              marginBottom: "20%",
            }}
            src={`${process.env.PUBLIC_URL}/assets/basic/6.png`}
          />
          <div>
            <Location title="위치 안내" isBasic={true} />
            <div className="bus-info" style={{ marginTop: "15%" }}>
              <div className="line-title">전세버스 안내</div>
              <MapService timestamp="1687341161353" mapKey="2fa29" />
              <div className="info">
                <div className="col">
                  <p style={{ width: "100%" }}>
                    [ 모임장소 ]<span>0000</span>
                  </p>
                  <p style={{ width: "100%", textAlign: "right" }}>
                    [ 출발시간 ]<span>오전 00시 00분</span>
                  </p>
                </div>
                <div className="col">
                  <p>0000 000 0000 00 (000 50)</p>
                  <p style={{ paddingRight: "13%" }}>000000</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "20%",
          }}
        >
          <div className="line-title">포토부스 안내</div>
          <img
            style={{
              margin: "auto",
              marginTop: "20%",
              marginBottom: "10%",
              width: "50%",
            }}
            src={`${process.env.PUBLIC_URL}/assets/basic/photo-booth.png`}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "1.6rem",
              lineHeight: "1.8em",
              marginBottom: "20%",
            }}
          >
            포토부스가 설치될 예정입니다.
            <br />
            귀한 발걸음 해주신 여러분의
            <br />
            환한 미소와 따뜻한 말씀 남겨주시면
            <br />
            소중히 간직하도록 하겠습니다.
          </p>
          <hr />
        </section>
        <section
          style={{
            paddingBottom: "20%",
          }}
          id="section-link"
        >
          <div
            style={{
              paddingLeft: "23%",
              paddingRight: "23%",
              marginBottom: "20%",
            }}
          >
            <button
              style={{
                marginBottom: "5%",
              }}
              onClick={() => openKModal("basic")}
            >
              <img src={`${process.env.PUBLIC_URL}/assets/basic/btn-1.png`} />
            </button>
            <button onClick={() => openJModal("basic")}>
              <img src={`${process.env.PUBLIC_URL}/assets/basic/btn-2.png`} />
            </button>
          </div>
          <hr />
          <div
            style={{
              paddingLeft: "23%",
              paddingRight: "23%",
              marginTop: "15%",
            }}
            className="share"
          >
            <Share
              kakaoBtnImg="/assets/basic/btn-3.png"
              kakaoTemplateId="95085"
              shareBtnImg="/assets/basic/btn-4.png"
              shareLink={info.LINK_BASIC}
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Basic;

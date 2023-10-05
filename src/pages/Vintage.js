import React from "react";
import "./../vintage.css";
import "./../vintage-w600.css";
import * as info from "./../info";

import MyHeader from "../components/MyHeader";
import Share from "../components/Share";
import Gallery from "../components/Gallery";
import Message from "../components/Message";
import ContactBox from "../components/ContactBox";
import Dday from "../components/Dday";
import MapService from "../components/MapService";
import Location from "../components/Location";

function Vintage({ openKModal, openJModal }) {
  return (
    <React.Fragment>
      <div id="vintage" className="bg-wrapper">
        <MyHeader id="header" />
        <div className="section-wrapper">
          <section id="section-home">
            <h1>
              <img src={`${process.env.PUBLIC_URL}/assets/wedding-day.png`} />
            </h1>
            <div className="img-wrapper">
              <Dday targetDate="2023-10-15" />
              <img src={`${process.env.PUBLIC_URL}/assets/home-pic-2.png`} />
            </div>
            <div className="d-day-wrapper"></div>
            <div className="browser-box pink">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-invite.png`}
              />
              <div className="content-box">
                <p style={{ marginTop: "5%", fontWeight: "700" }}>
                  삶의 모든 순간이 즐겁고 바라보는 것만으로
                  <br />
                  행복할 수 있다는걸 일깨워 준 사람을 만났습니다.
                </p>
                <p style={{ marginTop: "7%", fontWeight: "700" }}>
                  8년간의 사랑이 결실을 맺어
                  <br />
                  모든 것이 새로워지는 가을날,
                  <br />
                  진정한 사랑이라는 것을 알게해준 서로와
                  <br />
                  부부라는 이름으로 서약하고자 합니다.
                </p>
                <p
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingTop: "18%",
                    paddingBottom: "18%",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/flower-bouquet.png`}
                  />
                </p>
                <p
                  style={{
                    fontFamily: "'DM Serif Text', serif",
                    fontSize: "2.0rem",
                    lineHeight: "2.5rem",
                  }}
                >
                  We are all trevelling through time together, everyday of out
                  lives
                  <br />
                  All we can do is do our best to relish this remarkable ride.
                </p>
                <p
                  style={{
                    marginTop: "7%",
                    fontFamily: "'Nanum Myeongjo', serif",
                    fontSize: "1.5rem",
                    lineHeight: "2.5rem",
                  }}
                >
                  인생은 모두가 함께하고 있는 시간여행이다.
                  <br />
                  매일매일 사는 우리가 할 수 있는 건 최선을 다해 나의 특별하고도
                  평범한
                  <br />
                  마지막 날이라고 생각하며, 이 멋진 여행을 만끽하는 것이다.
                </p>
                <p
                  style={{
                    marginTop: "4%",
                    fontFamily: "'Nanum Myeongjo', serif",
                    fontSize: "1.2rem",
                    lineHeight: "1.8rem",
                  }}
                >{`- 영화 <About time 어바웃 타임> -`}</p>
                <div
                  className="confirmation-dialog-box"
                  style={{
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "18%",
                    marginBottom: "5%",
                  }}
                >
                  <div className="mouse"></div>
                  <div className="confirmation-dialog-top"></div>
                  <div className="confirmation-text">
                    <p className="text-top">인생에서 가장 행복한 순간</p>
                    <p className="text-bottom">
                      <i className="icon-heart" />
                      당신을 초대합니다
                      <i className="icon-heart" />
                    </p>
                  </div>
                  <div
                    style={{
                      marginBottom: "8%",
                      fontFamily: "EliceDigitalBaeum_Bold",
                      fontSize: "2.0rem",
                    }}
                  >
                    <button>YES</button>
                    <button>NO</button>
                  </div>
                </div>
              </div>
              <div className="bottom-box"></div>
            </div>
            <div className="browser-box green">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-introduce.png`}
              />
              <div
                className="content-box"
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  fontWeight: "300",
                  fontSize: "1.6rem",
                  lineHeight: "2.3rem",
                }}
              >
                <div className="left">
                  <p>
                    평화 좋아! 자동차 좋아! 자타공인 00바라기
                    <br />늘 다정한 모습으로 웃어주고, 뒤에서 묵묵히 따라와 주는
                    발자국
                  </p>
                  <p
                    style={{
                      paddingTop: "2.5%",
                    }}
                  >
                    ‘바다처럼 모든 면을 품어줄 수 있는 자상한 남편이
                    되겠습니다.’
                  </p>
                </div>
                <div
                  className="picture"
                  style={{
                    paddingTop: "8.5%",
                    paddingBottom: "8.5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      style={{
                        width: "59%",
                        marginRight: "3%",
                      }}
                      src={`${process.env.PUBLIC_URL}/assets/name-kwon.png`}
                    />
                    <ContactBox
                      phoneLink={`tel:${info.K_PHONE}`}
                      emailLink={`sms:${info.K_PHONE}`}
                      kakaoLink={info.K_KAKAO}
                    />
                  </div>
                  <div
                    style={{
                      paddingTop: "1.5%",
                      paddingBottom: "1.5%",
                    }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/couple-image.png`}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <ContactBox
                      phoneLink={`tel:${info.J_PHONE}`}
                      emailLink={`sms:${info.J_PHONE}`}
                      kakaoLink={info.K_KAKAO}
                    />
                    <img
                      style={{
                        width: "62%",
                        marginLeft: "3%",
                      }}
                      src={`${process.env.PUBLIC_URL}/assets/name-jeong.png`}
                    />
                  </div>
                </div>
                <div className="right">
                  <p>
                    노는 거 좋아! 장난치는 거 좋아! 똥꼬발랄한 탱탱볼
                    <br />
                    어디로 튈지 모르지만, 남편 옆에는 꼭 붙어있는 껌딱지
                  </p>
                  <p
                    style={{
                      paddingTop: "2.5%",
                    }}
                  >
                    ‘굳건한 큰 산처럼 힘들 때도 든든하게 <br />늘 곁을 지켜주는
                    아내가 되겠습니다.’
                  </p>
                </div>
              </div>
              <div className="bottom-box"></div>
            </div>
          </section>

          <section id="section-gallery">
            <div className="browser-box yellow">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-gallery.png`}
              />
              <div className="content-box">
                <p className="title">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/title-gallery.png`}
                  />
                </p>

                <Gallery />
              </div>
              <div className="bottom-box"></div>
            </div>
          </section>

          <section id="section-map">
            <div className="browser-box pink">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-contact.png`}
              />
              <div
                className="content-box"
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                }}
              >
                <p className="title">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/title-contact.png`}
                  />
                </p>
                <MapService timestamp="==========" mapKey="====" />
                <Location />
              </div>
              <div className="bottom-box"></div>
            </div>
          </section>

          <section id="section-contact">
            <div className="browser-box green">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-introduce.png`}
              />
              <div className="content-box">
                <p className="title">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/title-give-love.png`}
                  />
                </p>
                <p
                  style={{
                    marginTop: "10%",
                    marginBottom: "10%",
                    fontWeight: "300",
                    fontSize: "1.8rem",
                    lineHeight: "2.5rem",
                  }}
                >
                  축복해 주셔서 감사합니다
                </p>
                <button
                  className="account-number"
                  onClick={() => openKModal("vintage")}
                >
                  신랑측 마음 전하실 곳
                </button>
                <br />
                <button
                  className="account-number"
                  onClick={() => openJModal("vintage")}
                >
                  신부측 마음 전하실 곳
                </button>
              </div>
              <div className="bottom-box"></div>
            </div>
            <div className="browser-box yellow">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-photobox.png`}
              />
              <div className="content-box" style={{ paddingBottom: "0" }}>
                <p className="title">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/title-photobox.png`}
                  />
                </p>
                <img
                  style={{
                    width: "50%",
                    margin: "auto",
                    marginTop: "10%",
                    marginBottom: "10%",
                  }}
                  src={`${process.env.PUBLIC_URL}/assets/photo-booth.png`}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "1.6rem",
                    fontWeight: "300",
                    lineHeight: "1.7em",
                    marginBottom: "10%",
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
              </div>
              <div className="bottom-box"></div>
            </div>
            <div className="browser-box pink">
              <img
                src={`${process.env.PUBLIC_URL}/assets/browser-message-2.png`}
              />
              <div className="content-box" style={{ paddingBottom: "0" }}>
                <p className="title">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/title-message.png`}
                  />
                </p>
                <Message />
              </div>
              <div className="bottom-box"></div>
            </div>
          </section>
        </div>

        <footer>
          <Share
            kakaoBtnImg="/assets/footer-button-1.png"
            kakaoTemplateId="95084"
            shareBtnImg="/assets/footer-button-2.png"
            shareLink={info.LINK_VINTAGE}
          />
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Vintage;

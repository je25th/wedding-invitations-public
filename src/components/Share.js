import * as info from "../info";
import * as util from "../util";

const MyFooter = ({ kakaoBtnImg, kakaoTemplateId, shareBtnImg, shareLink }) => {
  const kakaoShare = () => {
    if (!window.Kakao) {
      return;
    }
    const Kakao = window.Kakao;

    // init 체크
    if (!Kakao.isInitialized()) {
      Kakao.init("==========");
    }

    Kakao.Share.sendCustom({
      templateId: Number(kakaoTemplateId),
      templateArgs: {
        title: "00이 결혼합니다.",
        description: "00 결혼!",
      },
    });
  };

  return (
    <>
      <button onClick={() => kakaoShare()}>
        <img src={`${process.env.PUBLIC_URL}${kakaoBtnImg}`} />
      </button>
      <button onClick={() => util.handleCopyClipBoard(shareLink)}>
        <img src={`${process.env.PUBLIC_URL}${shareBtnImg}`} />
      </button>
    </>
  );
};

export default MyFooter;

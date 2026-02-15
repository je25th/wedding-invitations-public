import Modal from "react-modal";
import * as info from "./../info";
import * as util from "./../util";

const ModalPopup = ({ isOpen, closeModal, contentSel, modalStyle }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      style={{
        overlay: {
          position: "fixed",
          width: "100%",
          maxWidth: "600px",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "absolute",
          top: "65%",
          left: "0",
          right: "0",
          bottom: "0",
          width: "100%",
          maxWidth: "600px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className={["modal-content", modalStyle].join(" ")}>
        <div className={["account", contentSel == "K" ? `` : `hide`].join(" ")}>
          <h4>신랑측 계좌번호</h4>
          <hr />
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.K_D_BANK_NUM}`)}>
              000 <span>{info.K_D_BANK}</span>
            </a>
          </div>
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.K_M_BANK_NUM}`)}>
              000 <span>{info.K_M_BANK}</span>
            </a>
          </div>
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.K_BANK_NUM}`)}>
              000 <span>{info.K_BANK}</span>
            </a>
          </div>
        </div>
        <div className={["account", contentSel == "J" ? `` : `hide`].join(" ")}>
          <h4>신부측 계좌번호</h4>
          <hr />
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.J_D_BANK_NUM}`)}>
              000 <span>{info.J_D_BANK}</span>
            </a>
          </div>
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.J_M_BANK_NUM}`)}>
              000 <span>{info.J_M_BANK}</span>
            </a>
          </div>
          <div>
            <a onClick={() => util.handleCopyClipBoard(`${info.J_BANK_NUM}`)}>
              000 <span>{info.J_BANK}</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPopup;

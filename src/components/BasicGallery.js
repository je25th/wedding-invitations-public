import { useState } from "react";
import Modal from "react-modal";

const BasicGallery = () => {
  const MAX_IMG_IDX = 44;

  const photo = () => {
    let photoDivs = [];
    for (var i = 1; i <= MAX_IMG_IDX; i++) {
      let imgIdx = i;
      let imgUrl = `${process.env.PUBLIC_URL}/assets/photo/basic/${i}.jpg`;
      photoDivs.push(
        <button
          className="thumnail"
          onClick={() => handleOpenModal(imgIdx)}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></button>
      );
    }

    return photoDivs;
  };
  const [selImg, setSelImg] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = (img) => {
    setSelImg(img);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const prevImg = () => {
    let img;
    if (selImg == 1) {
      img = MAX_IMG_IDX;
    } else {
      img = selImg - 1;
    }
    console.log("img: " + img);
    setSelImg(img);
  };
  const nextImg = () => {
    let img;
    if (selImg == MAX_IMG_IDX) {
      img = 1;
    } else {
      img = selImg + 1;
    }
    setSelImg(img);
  };

  return (
    <div>
      <div>{photo()}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => handleCloseModal()}
        style={{
          overlay: {
            position: "fixed",
            width: "100%",
            maxWidth: "600px",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            position: "fixed",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            background: "none",
            border: "none",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: 0,
          },
        }}
      >
        <div className="gallery-modal-inner">
          <button className="close" onClick={() => handleCloseModal()}>
            <span />
          </button>
          <div className="photoView">
            <button className="prev" onClick={() => prevImg()}>
              prev
            </button>
            <img
              style={{ maxWidth: "80%" }}
              src={`${process.env.PUBLIC_URL}/assets/photo/basic/${selImg}.jpg`}
            />
            <button className="next" onClick={() => nextImg()}>
              next
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BasicGallery;

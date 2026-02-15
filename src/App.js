import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Vintage from "./pages/Vintage";
import Basic from "./pages/Basic";
import ModalPopup from "./components/ModalPopup";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContentSel, setModalContentSel] = useState("");
  const [modalStyle, setModalStyle] = useState("");
  const handleOpenKModal = (style) => {
    setModalStyle(style);
    setModalContentSel("K");
    setModalIsOpen(true);
  };
  const handleOpenJModal = (style) => {
    setModalStyle(style);
    setModalContentSel("J");
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/basic"
            element={
              <Basic
                openKModal={handleOpenKModal}
                openJModal={handleOpenJModal}
              />
            }
          />
          <Route
            path="/vintage"
            element={
              <Vintage
                openKModal={handleOpenKModal}
                openJModal={handleOpenJModal}
              />
            }
          />
          <Route
            path="/"
            element={
              <Vintage
                openKModal={handleOpenKModal}
                openJModal={handleOpenJModal}
              />
            }
          />
        </Routes>
        {/* <Vintage openKModal={handleOpenKModal} openJModal={handleOpenJModal} /> */}
        {/* <Basic openKModal={handleOpenKModal} openJModal={handleOpenJModal} /> */}
        <ModalPopup
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
          contentSel={modalContentSel}
          modalStyle={modalStyle}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

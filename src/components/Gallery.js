import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

const Gallery = () => {
  const [mainSlick, setMainSlick] = useState(null);
  const [pagingSlick, setPagingSlick] = useState(null);
  const mainSlickRef = useRef(null);
  const pagingSlickRef = useRef(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    setPagingSlick(pagingSlickRef.current);
  }, []);

  const photo = () => {
    let photoDivs = [];
    for (var i = 1; i <= 26; i++) {
      photoDivs.push(
        <div>
          <div
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/assets/photo/vintage/${i}.jpg')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "400px",
            }}
          ></div>
        </div>
      );
    }

    return photoDivs;
  };

  const thumnail = () => {
    let a = [];
    for (var i = 1; i <= 26; i++) {
      a.push(
        <a>
          <div
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/assets/photo/vintage/${i}.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "21vw",
            }}
          ></div>
        </a>
      );
    }

    return a;
  };

  const photoSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const thumnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 2000,
    cssEase: "linear",
    focusOnSelect: true,
    // swipeToSlide: true,
  };

  return (
    <div id="gallery" className="gallery">
      <div className="photo">
        <Slider ref={mainSlickRef} asNavFor={pagingSlick} {...photoSettings}>
          {photo()}
        </Slider>
      </div>
      <div className="thumnail">
        <Slider ref={pagingSlickRef} asNavFor={mainSlick} {...thumnailSettings}>
          {thumnail()}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;

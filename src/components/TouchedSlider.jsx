// import TouchCarousel from "react-touch-carousel";
// import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

// import { ImageWord } from "./Catogories/ImageWord";

import { useState, useRef, createRef, forwardRef, useEffect } from "react";

import slider0 from "../assets/slider/slider0.jpg";
import slider1 from "../assets/slider/slider1.jpg";
import slider2 from "../assets/slider/slider2.jpg";
import slider3 from "../assets/slider/slider3.jpg";

const images = [slider0, slider1, slider2, slider3];

const widthSpan = 100;

export const TouchedSlider = () => {
  const [position, setPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);

  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [mouseEndPosition, setMouseEndPosition] = useState(0);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseSwiped, setMouseSwiped] = useState(false);

  const ref = useRef(null);
  const imageRef = useRef([]);

  const transaltePartialsSlides = (toTranslate) => {
    let currentTranslation = -position * widthSpan;
    let totalTranslation = currentTranslation + toTranslate;
    for (let i = 0; i < (images.length || 1); i++) {
      const imgRef = imageRef.current[i];
      imgRef.style.transform = `translateX(` + totalTranslation + `%)`;
    }
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -widthSpan * newPosition;
    for (let i = 0; i < (images.length || 1); i++) {
      const imgRef = imageRef.current[i];
      imgRef.style.transform = `translateX(` + toTranslate + `%)`;
    }
  };

  const touchStartHandler = (e) => {
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };

  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = ref.current.offsetWidth;
    const translateDist =
      ((touchEndPosition - touchStartPosition) / frameWidth) * widthSpan;
    transaltePartialsSlides(translateDist);
    if (touched === true) {
      setSwiped(true);
    }
  };

  const touchEndHandler = (e) => {
    if (swiped) {
      if (touchStartPosition - touchEndPosition > 75) {
        handleNextClick();
      } else if (touchStartPosition - touchEndPosition < -75) {
        handlePrevClick();
      }
    }
    setTouched(false);
    setSwiped(false);
  };

  const mouseStartHandler = (e) => {
    e.preventDefault();

    setMouseStartPosition(e.clientX);
    setMouseEndPosition(e.clientX);
    setMouseClicked(true);
  };

  const mouseMoveHandler = (e) => {
    e.preventDefault();
    let frameWidth = ref.current.offsetWidth;
    if (mouseClicked === true) {
      setMouseEndPosition(e.clientX);
      let translateDist =
        ((mouseEndPosition - mouseStartPosition) / frameWidth) * 100;
      transaltePartialsSlides(translateDist);
      setMouseSwiped(true);
    }
  };

  const mouseEndHandler = (e) => {
    if (mouseSwiped === true) {
      if (mouseStartPosition - mouseEndPosition > 100) {
        handleNextClick();
      } else if (mouseStartPosition - mouseEndPosition < -100) {
        handlePrevClick();
      }
    }
    setMouseClicked(false);
    setMouseSwiped(false);
  };

  let renderDisplayFrame = (
    <>
      {images.map((image, index) => {
        return (
          <ImageToDisplay key={index} image={image} id={index} ref={imageRef} />
        );
      })}
    </>
  );

  const handlePrevClick = (e) => {
    let newPosition = position;
    if (position > 0) {
      newPosition = position - 1;
    } else {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setPosition(newPosition);
  };

  const handleNextClick = (e) => {
    let newPosition = position;
    if (position < images.length - 1) {
      newPosition = position + 1;
    } else {
      newPosition = images.length - 1;
    }
    translateFullSlides(newPosition);
    setPosition(newPosition);
  };

  console.log(imageRef);

  return (
    <>
      <div
        id="SlideContainer"
        className="relative flex align-middle w-full items-center overflow-hidden "
      >
        <div
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
          onMouseDown={mouseStartHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseEndHandler}
          onMouseLeave={mouseEndHandler}
          ref={ref}
          id="DisplayFrame"
          className="touch-none w-[60rem] h-[30rem] max-h-[40rem] whitespace-nowrap overflow-x-hidden  text-center z-10 mx-auto "
        >
          {renderDisplayFrame}
        </div>
      </div>
      <button
        className="p-2 bg-red-500"
        disabled={position === 0}
        onClick={handlePrevClick}
      >
        PREV
      </button>
      <button
        className="p-2 bg-green-500"
        disabled={position === images.length - 1}
        onClick={handleNextClick}
      >
        NEXT
      </button>
    </>
  );
};

const ImageToDisplay = forwardRef((props, ref) => {
  const { image, id } = props;

  return (
    <div
      ref={(el) => (ref.current[id] = el)}
      id={id}
      className="touch-none inline-block w-full h-full  align-top  transition-all duration-500"
    >
      <img className="h-full max-w-full object-fit" src={image} />
    </div>
  );
});

// import TouchCarousel from "react-touch-carousel";
// import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

// import { ImageWord } from "./Catogories/ImageWord";

import { useState, useRef, forwardRef } from "react";
import { SliderDots } from "./Catogories/SliderDots";

const widthSpan = 100;

const calculateCentralImage = (curPos, imageTotalCount) => {
  if (curPos === 0) {
    return [0, 1, 2];
  } else if (curPos === imageTotalCount - 1) {
    return [imageTotalCount - 3, imageTotalCount - 2, imageTotalCount - 1];
  }
  return [curPos - 1, curPos, curPos + 1];
};

export const TouchedSlider = ({
  render,
  images,
  dotDisplay = false,
  displaySubImages = false,
}) => {
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
      } else {
        console.log("here else condition touch");
        jumpToPosition(position);
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
      } else {
        console.log("here else condition mouse");
        jumpToPosition(position);
      }
    }
    setMouseClicked(false);
    setMouseSwiped(false);
  };

  const jumpToPosition = (index) => {
    translateFullSlides(index);
    setPosition(index);
  };

  let renderDisplayFrame = () => (
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

  const handleDotClick = (index) => (e) => {
    jumpToPosition(index);
  };

  const handlers = {
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
    mouseStartHandler,
    mouseMoveHandler,
    mouseEndHandler,
  };

  return (
    <>
      <div
        id="SlideContainer"
        className="relative align-middle w-full  overflow-hidden "
      >
        {render(handlers, position, ref, renderDisplayFrame())}
        {dotDisplay ? (
          <div className="absolute flex gap-3 bottom-10 left-[45%]">
            {Array.from(Array(4)).map((_, index) => (
              <SliderDots
                onClick={handleDotClick(index)}
                key={index}
                active={position === index}
                index={index}
              />
            ))}
          </div>
        ) : null}
        {displaySubImages ? (
          <div className="mt-4 flex gap-3 justify-center overflow-hidden">
            {calculateCentralImage(position, images.length).map(
              (imageIndex) => (
                <img
                  key={imageIndex}
                  className="w-1/3 h-80 object-cover"
                  src={images[imageIndex]}
                />
              )
            )}
          </div>
        ) : null}
      </div>
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
      <img className="h-full w-full  object-fill" src={image} />
    </div>
  );
});

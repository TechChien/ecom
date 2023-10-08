import { forwardRef } from "react";
import { TouchedSlider } from "../TouchedSlider";

export const ProductSlider = ({ images }) => {
  const renderFn = (images) => (handlers, index, ref, children) => {
    return (
      <DisplayFrame index={index} ref={ref} handlers={handlers} images={images}>
        {children}
      </DisplayFrame>
    );
  };

  return (
    <div className="w-full md:w-1/2 min-h-[20rem]">
      <TouchedSlider
        images={images}
        render={renderFn(images)}
        displaySubImages
      />
    </div>
  );
};

const DisplayFrame = forwardRef((props, ref) => {
  const {
    handlers: {
      touchStartHandler,
      touchMoveHandler,
      touchEndHandler,
      mouseStartHandler,
      mouseMoveHandler,
      mouseEndHandler,
    },
    children,
  } = props;

  return (
    <div
      ref={ref}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      onMouseDown={mouseStartHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseEndHandler}
      onMouseLeave={mouseEndHandler}
      className="touch-none h-[50rem] w-full whitespace-nowrap  relative overflow-hidden"
    >
      {children}
    </div>
  );
});

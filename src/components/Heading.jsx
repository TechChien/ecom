import { Fragment } from "react";

export const Heading = ({ title }) => {
  return (
    <Fragment>
      <h2
        className="text-xl md:text-2xl  text-purple-600 ps-5 md:ps-14 font-extrabold relative before:content-['']  before:md:w-8 before:md:h-8 before:w-4 before:h-4 before:bg-purple-300 before:rounded-full before:absolute before:top-2 before:left-0
        after:content-['']  after:md:w-6 after:md:h-6 after:w-3 after:h-3 after:bg-purple-100 after:rounded-full after:absolute after:top-2 after:left-0
      "
      >
        {title}
      </h2>
      <hr className="border-b-1 lg:mt-6 mt-4" />
    </Fragment>
  );
};

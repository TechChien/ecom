import { Fragment } from "react";

export const Heading = ({ title }) => {
  return (
    <Fragment>
      <h2
        className="text-4xl text-purple-600 ps-14 font-extrabold relative before:content-['']  before:w-8 before:h-8 before:bg-purple-300 before:rounded-full before:absolute before:top-2 before:left-0
        after:content-['']  after:w-6 after:h-6 after:bg-purple-100 after:rounded-full after:absolute after:top-2 after:left-0
      "
      >
        {title}
      </h2>
      <hr className="border-b-1 mt-6" />
    </Fragment>
  );
};

import { Link } from "react-router-dom";

export const ProductTitle = ({ title, linkTo = null }) => {
  return (
    <div className="lg:text-2xl font-extrabold text-blue-950 mt-4">
      {linkTo ? <Link to={linkTo}>{title}</Link> : title}
    </div>
  );
};

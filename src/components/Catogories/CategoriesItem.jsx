import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const CategoriesItem = ({ icon, title, renderPopup, clickHandler }) => {
  const content = () => (
    <li
      onClick={clickHandler}
      name={title}
      className="group flex justify-center gap-4 text-3xl p-2 py-4  text-slate-500 border hover:bg-slate-300"
    >
      <div className="flex gap-3 items-center">
        <span className="group-hover:text-white">
          <FontAwesomeIcon icon={icon} className="text-sm lg:text-base" />
        </span>
        <span className="text-base lg:text-xl group-hover:text-white">
          {title}
        </span>
      </div>

      <div className="ms-auto">
        {renderPopup ? (
          <FontAwesomeIcon className="text-sm lg:text-xl" icon={faAngleRight} />
        ) : null}
      </div>
    </li>
  );

  return <>{content()}</>;
};

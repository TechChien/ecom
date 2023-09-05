import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ImageWindow } from "../Trending/ImageWindow";

export const LowerBanner = ({ ...props }) => {
  const { srcImg, title, list } = props;

  return (
    <div className="col-span-2 border rounded-md border-slate-300">
      <div className="w-full h-[20rem] flex justify-center">
        <ImageWindow
          bgImg={srcImg}
          heart={false}
          hover={false}
          imageSrcPath="/src/assets/banner/"
        />

        {/* <img src={srcImg} className="h-full" /> */}
        <div className="p-8 ps-16">
          <h1 className="text-2xl font-bold">{title}</h1>
          <ul className="flex flex-col gap-2 mt-2">
            {list.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="mt-4 hover:text-white">
            View all
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

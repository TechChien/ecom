import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ImageWindow } from "../Trending/ImageWindow";

import { useTranslation } from "react-i18next";

export const LowerBanner = ({ ...props }) => {
  const { srcImg, title, list } = props;
  const { t } = useTranslation();
  return (
    <div className="col-span-3 md:col-span-2 border rounded-md border-slate-300">
      <div className="w-full h-[20rem] flex justify-center">
        <div className="w-1/2 h-full">
          <ImageWindow
            bgImg={srcImg}
            heart={false}
            hover={false}
            imageSrcPath="/src/assets/banner/"
          />
        </div>
        {/* <img src={srcImg} className="h-full" /> */}
        <div className="p-4 ps-8">
          <h1 className="text-xl font-bold">{t(title)}</h1>
          <ul className="flex flex-col gap-2 mt-2">
            {list.map((l) => (
              <li className="hover:text-slate-300" key={l}>
                {t(l)}
              </li>
            ))}
          </ul>
          <div className="mt-4 hover:text-slate-300">
            {t("banner.lower.viewall")}
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

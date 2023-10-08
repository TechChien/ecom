import { useTranslation } from "react-i18next";

export const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-950 text-white py-8 md:py-16">
      <div className="container mx-auto">
        <div className="flex w-full flex-col gap-3 md:gap-0 md:flex-row ">
          <div className=" md:w-1/2 px-4 md:py-2 md:flex md:justify-center">
            <div>
              <h1 className="text-white font-extrabold text-2xl md:text-4xl">
                {t("footer.subscribe.jon")}
              </h1>
              <p className="text-slate-500">
                {t("footer.subscribe.adv")}{" "}
                <span className="text-red-300">{t("footer.subscribe.so")}</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 px-4 py-2 flex justify-center">
            <div className="w-full">
              <form className="flex w-full mx-auto">
                <input
                  className="py-2 px-3 rounded-md  lg:text-xl text-slate-950 outline-none sm:w-[22rem] md:w-[30rem]"
                  placeholder={"✉" + t("footer.subscribe.placeholder")}
                />
                <button className="bg-red-500 text-white -translate-x-2 rounded-r-md rounded-d-md text-sm lg:text-xl px-4 hover:bg-red-300 whitespace-nowrap">
                  {t("footer.subscribe.signup")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

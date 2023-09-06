export const Subscribe = () => {
  return (
    <div className="bg-gray-950 text-white py-8 md:py-16">
      <div className="container mx-auto">
        <div className="flex w-full flex-col gap-3 md:gap-0 md:flex-row ">
          <div className=" md:w-1/2 px-4 md:py-2 md:flex md:justify-center">
            <div>
              <h1 className="text-white font-extrabold text-2xl md:text-4xl">
                Join Out Newsletter
              </h1>
              <p className="text-slate-500">
                Get Emails updates about our lastest shop and{" "}
                <span className="text-red-300">special offers</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 px-4 py-2 flex justify-center">
            <div className="w-full">
              <form className="flex w-full mx-auto">
                <input
                  className="py-2 px-3 rounded-md  lg:text-xl text-slate-950 outline-none sm:w-[22rem] md:w-[30rem]"
                  placeholder="&#128231; Your email address"
                />
                <button className="bg-red-500 text-white -translate-x-2 rounded-r-md rounded-d-md text-sm lg:text-xl px-4 hover:bg-red-300 whitespace-nowrap">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

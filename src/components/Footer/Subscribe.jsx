export const Subscribe = () => {
  return (
    <div className="bg-gray-950 text-white py-16">
      <div className="container mx-auto">
        <div className="flex w-full ">
          <div className="w-1/2 px-4 py-2 flex justify-center">
            <div>
              <h1 className="text-white font-extrabold text-4xl">
                Join Out Newsletter
              </h1>
              <p className="text-slate-500">
                Get Emails updates about our lastest shop and{" "}
                <span className="text-red-300">special offers</span>
              </p>
            </div>
          </div>
          <div className="w-1/2 px-4 py-2 flex justify-center">
            <form className="flex w-full mx-auto">
              <input
                className="py-2 px-3 rounded-md text-xl text-slate-950 outline-none w-[30rem]"
                placeholder="&#128231;    Your email address"
              />
              <button className="bg-red-500 text-white -translate-x-2 rounded-r-md rounded-d-md text-xl px-4 hover:bg-red-300">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyPurchases = () => {
  return (
    <div className="md:ml-[250px] flex-col mt-[20px] flex justify-center items-center">
      <div>
        <h1 className="text-5xl my-5">My purchases</h1>
      </div>
      {/* //cards here */}
      <div className="flex flex-wrap justify-center items-center">
        <div className="card flex items-center rounded-xl flex-col m-5 w-[350px]  shadow-xl bg-opacity-40 border-2 border-black border-opacity-30">
          <div className="w-full ">
            <img
              src="devops-img-2.png"
              className="rounded-tl-xl object-cover rounded-tr-xl"
              alt=""
            />
          </div>

          <div className="flex px-2">
            <h1 className="text-xl text-justify my-2">
              Complete Web Development + Devops + Blockchain Cohort
            </h1>
          </div>
          <div className="flex px-2 my-2">
            <p className="text-sm text-justify">
              Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au..
            </p>
          </div>
          <div className="flex px-2 my-2 justify-start w-full">
            <p className="text-lg">₹5999</p>
          </div>
          <div className="px-2 my-2 flex w-full">
            <button className="bg-blue-600 w-full py-3 rounded-full text-white text-xl">
              Buy
            </button>
          </div>
        </div>

        <div className="card flex items-center rounded-xl flex-col m-5 w-[350px]  shadow-xl bg-opacity-40 border-2 border-black border-opacity-30">
          <div className="w-full ">
            <img
              src="devops-img-2.png"
              className="rounded-tl-xl object-cover rounded-tr-xl"
              alt=""
            />
          </div>

          <div className="flex px-2">
            <h1 className="text-xl text-justify my-2">
              Complete Web Development + Devops + Blockchain Cohort
            </h1>
          </div>
          <div className="flex px-2 my-2">
            <p className="text-sm text-justify">
              Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au..
            </p>
          </div>
          <div className="flex px-2 my-2 justify-start w-full">
            <p className="text-lg">₹5999</p>
          </div>
          <div className="px-2 my-2 flex w-full">
            <button className="bg-blue-600 w-full py-3 rounded-full text-white text-xl">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;

export default function Home() {
  return (
    <>
      {/* shop header */}
      <div className="border-solid border-2 px-16 mx-16 rounded-xl h-56 mt-20 pt-8 flex">
        <img
          className="w-20 h-20 rounded-full border-solid border-4 p-3 "
          src="https://static.vecteezy.com/system/resources/thumbnails/012/638/357/small/paw-print-silhouette-png.png"
          alt="Rounded avatar"
        />
        <div>
          <div className="flex">
            <span className="relative flex h-3 w-3 ml-8 mt-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h1 className="ml-3">Last online 2 minutes ago</h1>
          </div>
          <h1 className="ml-8 font-bold text-4xl mt-2">Best Pawn Shop</h1>
          <h1 className="ml-8 text-xl">Subang Jaya</h1>
          <div className="flex mt-5">
            <button
              type="button"
              class="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 h-10 w-32  mr-6 ml-8 mb-2 "
            >
              Follow
            </button>
            <button
              type="button"
              class="text-slate-700 border-solid border-2 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 h-10 w-32  mr-6 mb-2 "
            >
              Chat
            </button>
          </div>
        </div>
      </div>
      {/* end of shop header */}
    </>
  );
}

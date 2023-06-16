import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="px-16 mx-16 relative">
        {/* shop header */}
        <div className="border-solid border-2 px-10 rounded-3xl h-72 mt-8 pt-12 flex shadow-xl bg-gradient-to-r from-slate-50 from-10% via-slate-100 via-40% to-purple-50 to-70%">
          <img
            className="w-30 h-36 rounded-full border-solid border-4 p-3 "
            src="https://static.vecteezy.com/system/resources/thumbnails/012/638/357/small/paw-print-silhouette-png.png"
            alt="Rounded avatar"
          />
          <div>
            <div className="flex">
              <span className="relative flex h-3 w-3 ml-8 mt-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <h1 className="ml-3 mb-2 text-sm">Last online 2 minutes ago</h1>
            </div>
            <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-purple-400 ml-8">
              Verified Seller
            </span>
            <h1 className="ml-8 font-bold text-4xl mt-2">Best Pawn Shop</h1>
            <hr className="ml-8 border border-2" />
            <h1 className="ml-8 text-lg mt-2">Subang Jaya</h1>
            <div className="flex mt-5">
              <button
                type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 h-10 w-32  mr-3 ml-8 mb-2 "
              >
                Follow
              </button>
              <button
                type="button"
                class="text-slate-700 border-solid border-2 bg-white hover:bg-purple-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 pb-7 h-10 w-32  mr-2 mb-2 "
              >
                Chat
              </button>
              <img
                src="https://www.pngall.com/wp-content/uploads/2/Share.png"
                className="w-10 h-10 "
              />
            </div>
          </div>
          <div className="flex mt-32">
            {/* ratings */}
            <div className="flex items-center pl-56 ml-36  ">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </div>
            {/* end of ratings */}
            <div className="flex items-center ml-24 w-56 ">
              <h1 className="font-bold mr-2 text-2xl">2 hrs </h1>
              <h1 className="text-xl">time to process </h1>
            </div>
            {/* process order */}
            {/* end of process order */}
          </div>
        </div>
        {/* end of shop header */}

        {/* body */}
        <div className="flex mt-14">
          {/* category */}
          <div className="border-2 border-solid px-12 py-6 rounded-2xl shadow-2xl">
            <h1 className="mb-4 text-2xl font-semibold">Store's category</h1>
            <hr className="border-solid border-4 border-slate-200 rounded-3xl" />
            <div className="flex flex-col space-y-2 text-xl mt-4 px-1">
              <a href="#" className="hover:bg-purple-100 hover:rounded-md">
                Food
              </a>

              <a href="#" className="hover:bg-purple-100 hover:rounded-md ">
                Toys
              </a>

              <a href="#" className="hover:bg-purple-100 hover:rounded-md">
                Suplement
              </a>
            </div>
          </div>
          {/* end ofcategory */}
          {/* cards */}
          <div className="ml-8 w-full">
            <div className="flex">
              <h1 className="mb-4 text-4xl font-bold">All Products</h1>
            </div>
            <div className="grid grid-cols-4 mx-auto gap-5">
              {/* cards */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="border-2 border-solid mt-8 rounded-xl shadow-xl px-12 py-4 pb-24 bg-gradient-to-b from-slate-50 from-20% via-slate-50 via-50% to-slate-50 to-85%">
              <div className="flex mb-3">
                <img
                  src="https://static.thenounproject.com/png/502043-200.png"
                  className="w-10 h-10 pr-0.5"
                />
                <h1 className="font-bold mt-2 ml-4">Best Pawn Shop</h1>
                <a
                  href="#"
                  className="mt-2 pl-96 ml-80 text-purple-500 hover:text-purple-700"
                >
                  Request changes
                </a>
              </div>
              <div className="flex mb-3">
                <img
                  src="https://img.freepik.com/free-icon/envelope_318-408141.jpg"
                  className="w-10 h-9"
                />
                <h1 className=" mt-2 ml-4">m******l@***.com</h1>
              </div>
              <div className="flex mb-3">
                <img
                  src="https://www.freepnglogos.com/uploads/smartphone-png/mobile-phone-smartphone-vector-graphic-24.png"
                  className="w-10 h-9"
                />
                <h1 className=" mt-2 ml-4">**********85</h1>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 pt-2 rounded-lg border border-purple-400 ml-3">
                  Verified
                </span>
              </div>
              <div className="flex mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5366/5366796.png"
                  className="w-10 h-9"
                />
                <div className="ml-4">
                  {/* location */}
                  <nav class="flex pb-4">
                    <ol class="inline-flex items-center space-x-1 ">
                      <li class="inline-flex items-center">
                        <a
                          href="#"
                          class="inline-flex items-center text-purple-400 hover:text-purple-600"
                        >
                          Subang Jaya
                        </a>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <a
                            href="#"
                            class="ml-1 text-purple-500 font-semibold hover:text-purple-800 "
                          >
                            Selangor
                          </a>
                        </div>
                      </li>
                      <li aria-current="page">
                        <div class="flex items-center">
                          <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <a
                            href="#"
                            class="ml-1 font-bold text-purple-800 hover:text-purple-900 "
                          >
                            Malaysia
                          </a>
                        </div>
                      </li>
                    </ol>
                  </nav>
                  {/* end of location */}
                  <h1 className=" mt-2 ">Tamarind Square</h1>
                  <h1 className=" mt-1">B-02-03, Tamarind Square, Cyberjaya</h1>
                  <h1 className=" mt-1">6300 Cyberjaya, Selangor, Malaysia</h1>
                </div>
              </div>
            </div>
          </div>
          {/* end of cards */}
        </div>
        <hr className="my-12 mr-12" />
      </div>
    </>
  );
}

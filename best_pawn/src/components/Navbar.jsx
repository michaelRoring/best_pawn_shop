export default function Navbar() {
  return (
    <>
      <div>
        {/* banner */}
        <div className="w-screen h-8 bg-purple-100 px-16 flex items-center justify-between">
          <div className="flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/65/65680.png"
              className="w-5 h-5"
              alt="Ladaza App Icon"
            />
            <h1 className="ml-2">Download Ladaza App now</h1>
          </div>
          <div className="flex gap-16">
            <a href="#">About Lazada</a>
            <a href="#">Start Selling</a>
            <a href="#">Ladaza Care</a>
          </div>
        </div>
        {/* end of banner */}

        {/* start of navbar */}
        <div className="px-16 mt-8 flex">
          <h1 className="text-7xl">Ladaza</h1>

          {/* search bar */}
          <form className="w-6/12 ml-36 mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search your needs here.."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-amber-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          {/* end ofsearch bar */}
          {/* cart */}
          <img
            data-popover-target="popover-bottom"
            data-popover-placement="bottom"
            src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
            class="text-white mb-3 w-26 h-16 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          />

          <div
            data-popover
            id="popover-bottom"
            role="tooltip"
            class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Popover bottom
              </h3>
            </div>
            <div class="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
            <div data-popper-arrow></div>
          </div>
          {/* end of cart */}
          {/* buttons */}
          <div className="flex mt-5">
            <button
              type="button"
              class="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 h-10 w-24  mr-6 ml-12 mb-2 "
            >
              Register
            </button>
            <button
              type="button"
              class="text-slate-700 border-solid border-2 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 h-10 w-24  mr-6  mb-2 "
            >
              Login
            </button>
          </div>
          {/* end of buttons */}
        </div>
        <div className="mx-96 px-12 flex gap-10">
          <h1 className="font-bold">Popular this week:</h1>
          <a href="#">umbrella</a>
          <a href="#">mouse</a>
          <a href="#">webcam</a>
          <a href="#">fidget spinner</a>
        </div>
        {/* end of navbar */}
      </div>
    </>
  );
}

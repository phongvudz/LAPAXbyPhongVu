const NavBar = () => {
  return (
    <nav className=" w-full py-1 2xl:py-4 bg-cover bg-no-repeat h-screen bg-[url('https://www.lapa.ninja/lab/lapax/images/hero-image-10.jpg')]  ">
      <div class=" px-2 sm:px-4 py-2.5 md:px-10 lg:px-32 2xl:px-64 ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <div class="flex items-center">
            <img
              className="w-[70px] h-[70x] 2xl:w-[75px] 2xl:h-[75px]"
              src="https://www.lapa.ninja/lab/lapax/images/logo.svg"
              class="mr-3 h-6 "
              alt=" Logo"
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium lg:text-lg xl:text-xl">
              <li class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent hover:text-purple-500 hover:duration-500 hover:-translate-y-1 cursor-pointer md:p-0 ">
                Features
              </li>
              <li class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent hover:text-purple-500 hover:duration-500 hover:-translate-y-1 cursor-pointer md:p-0 ">
                Testimonial
              </li>
              <li class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent hover:text-purple-500 hover:duration-500 hover:-translate-y-1 cursor-pointer md:p-0 ">
                Screenshots
              </li>
              <li class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent hover:text-purple-500 hover:duration-500 hover:-translate-y-1 cursor-pointer md:p-0 ">
                Our Team
              </li>
              <li class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent hover:text-purple-500 hover:duration-500 hover:-translate-y-1 cursor-pointer md:p-0 ">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center  items-center mt-64 text-white   px-[10px]">
        <h1 className="text-[40px] font-bold mt-[20px] mb-[10px] space-x-4 md:text-8xl md:mb-10">
          <span>L</span>
          <span>A</span>
          <span>P</span>
          <span>A</span>
          <span>X</span>
        </h1>
        <p className="text-xl font-light text-center md:text-5xl">
          Perfect way to present your{" "}
          <span className="font-bold text-purple-500">
            create something new.
          </span>
        </p>
        <div className="pt-[50px]">
          <button className=" border-2 mt-1 px-[30px] py-[10px] font-light uppercase border-slate-50 rounded-full hover:bg-green-500 hover:-translate-y-1 hover:duration-500 md:px-16 md:py-4 md:text-lg">
            download now - <span className="font-semibold">it's free</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

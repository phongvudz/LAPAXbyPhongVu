const Content = () => {
  return (
    <section className="px-3 py-10 bg-gray-100 lg:px-8 lg:py-12 2xl:px-[450px]" >
      <div className="lg:flex lg:justify-around 2xl:gap-8 lg:gap-16">
          {/*Card1*/}
        <div className="flex flex-col items-center  text-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 bg-transparent border-2 border-green-500 rounded-xl text-green-500 hover:bg-green-500 hover:text-white hover:duration-300 my-[30px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h1 className="text-xl mb-2 font-semibold">Beautiful Design</h1>
          <p className="text-gray-500 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            repudiandae aut corporis.
          </p>
        </div>
        {/*Card2*/}
        <div className="flex flex-col items-center  text-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 bg-transparent border-2 border-green-500 rounded-xl text-green-500 hover:bg-green-500 hover:text-white hover:duration-300 my-[30px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h1 className="text-xl mb-2 font-semibold">Smart Notifications</h1>
          <p className="text-gray-500 font-light">
          Reiciendis repudiandae aut corporis rerum necessitatibus quaerat consectetur autem deleniti id laborum!
          </p>
        </div>
         {/*Card3*/}
        <div className="flex flex-col items-center  text-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 bg-transparent border-2 border-green-500 rounded-xl text-green-500 hover:bg-green-500 hover:text-white hover:duration-300 my-[30px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h1 className="text-xl mb-2 font-semibold">Optimize Code</h1>
          <p className="text-gray-500 font-light">
          Consectetur adipisicing elit. Reiciendis repudiandae aut corporis rerum necessitatibus quaerat consectetur
          </p>
        </div>
         {/*Card4*/}
        <div className="flex flex-col items-center  text-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 bg-transparent border-2 border-green-500 rounded-xl text-green-500 hover:bg-green-500 hover:text-white hover:duration-300 my-[30px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h1 className="text-xl mb-2 font-semibold">Fast Execution</h1>
          <p className="text-gray-500 font-light">
          Consectetur adipisicing elit. Reiciendis repudiandae aut corporis rerum necessitatibus quaerat consectetur
          </p>
        </div>
      </div>
    </section>
  );
};
export default Content;

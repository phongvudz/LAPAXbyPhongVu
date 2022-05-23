const Footer = () => {
  return (
    <div>
      <section className="px-[20px] py-8 md:px-32 md:py-20 2xl:mx-auto 2xl:max-w-6xl lg:mx-auto lg:max-w-4xl xl:mx-auto xl:max-w-5xl">
        <div className="text-center text-gray-500 font-light">
          <h1 className="text-3xl md:text-5xl">Get In Touch</h1>
          <p className="mt-[5px] mb-[20px] text-lg md:text-3xl">
            Let us know what you think about us.
          </p>
          <div className="md:mt-20 ">
            <div className="  ">
              <form className="text-left lg:flex-row lg:flex lg:gap-1 lg:justify-between ">
                <div class="mb-6">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full lg:w-80 xl:w-96 2xl:w-[430px] p-2.5 outline-1 outline-green-500"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full lg:w-80 xl:w-96 p-2.5 2xl:w-[430px]  outline-1 outline-green-500"
                    placeholder="Enter Email"
                  />
                </div>
              </form>
            </div>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  outline-1 outline-green-500 mb-6"
              placeholder="Subject"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-1 outline-green-500"
              required
            ></textarea>
            <button
              type="submit"
              class=" w-64 px-2 py-3 text-white bg-green-500 rounded-full focus:outline-none mt-2 hover:bg-green-400 hover:duration-500 hover:text-gray-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[url('https://www.lapa.ninja/lab/lapax/images/subscribe-bg.png')] w-full bg-cover bg-no-repeat md:py-20 ">
        <div className="px-[15px] text-center text-white py-8">
            <div className="font-light">
          <h1 className="text-3xl md:text-6xl">Subscribe For Newsletter</h1>
          <p className="mt-[5px] mb-[20px] text-lg md:text-3xl">Enter your Email. Ut enim ad minim</p>
          </div>
          <div className="flex flex-col items-center md:mt-16 md:flex md:flex-row md:px-40 md:gap-5 2xl:max-w-5xl  mx-auto xl:max-w-4xl lg:max-w-3xl">
            <input
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-2.5  outline-1 outline-green-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              class=" w-64 px-2 py-3 text-white bg-green-500 rounded-full focus:outline-none mt-4 hover:bg-green-400 hover:duration-500 hover:text-gray-500 md:mt-0"
            >
              Send Message
            </button>
          </div>
          <div className="flex  justify-center mt-[20px] gap-6 md:mt-20 cursor-pointer">
            <svg role="img" className="w-[30px] h-[30px] bg-white rounded-full hover:bg-green-500 hover:duration-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <svg fill="#000000" className="bg-white rounded-full hover:bg-green-500 hover:duration-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>
            <svg fill="#000000" className="bg-white rounded-full hover:bg-green-500 hover:duration-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] bg-white rounded-full hover:bg-green-500 hover:duration-500" viewBox="0 0 128 128"><path fill="#231f20" d="M63.999 7.989c-30.883 0-56.009 25.126-56.009 56.01 0 30.885 25.126 56.012 56.009 56.012 30.885 0 56.011-25.127 56.011-56.012-.001-30.884-25.127-56.01-56.011-56.01zm29.81 41.402a23.97 23.97 0 0 1-5.464 5.798c.009.325.015.65.015.975 0 16.334-12.429 33.229-33.229 33.229a33.135 33.135 0 0 1-17.905-5.244.997.997 0 0 1-.402-1.177.99.99 0 0 1 1.056-.658c.877.101 1.746.151 2.584.151 4.08 0 7.968-1.097 11.381-3.193a12.318 12.318 0 0 1-8.842-8.221 1.003 1.003 0 0 1 .204-.969.993.993 0 0 1 .938-.317c.188.036.377.067.565.093-3.473-2.213-5.726-6.104-5.726-10.412v-.143a1 1 0 0 1 1.485-.874c.435.241.886.45 1.349.626a12.318 12.318 0 0 1-2.742-7.762c0-2.178.577-4.322 1.668-6.199a1 1 0 0 1 1.64-.13c5.319 6.522 13.051 10.625 21.368 11.381a12.57 12.57 0 0 1-.088-1.493c0-6.797 5.531-12.327 12.329-12.327 3.207 0 6.31 1.265 8.599 3.487a21.637 21.637 0 0 0 6.351-2.519 1 1 0 1 1 1.464 1.163 12.225 12.225 0 0 1-2.32 4.188 21.278 21.278 0 0 0 2.487-.924 1 1 0 0 1 1.235 1.471z"/></svg>
            </div> 
        </div>
      </section>
      <footer className="text-center text-gray-600 text-light px-[15px] py-6">
          <p>©All Rights Reserved. Designed by<span className="text-green-500 hover:text-purple-500 hover:duration-500 cursor-pointer"> Phong Vu Dep Trai</span></p>
      </footer>
    </div>
  );
};
export default Footer;

const SideBar =() =>{
    return (
      <div>
        <section className=" px-[20px]  bg-gradient-to-b to-slate-500 via-red-400 from-orange-200 h-full lg:px-40 lg:py-20">
          <div className="text-center py-10 text-white font-light">
            <h1 className="text-2xl font-semibold lg:text-5xl">
              What Customer Say About Us
            </h1>
            <img
              className="mx-auto rounded-full w-[130px] h-[130px] lg:w-[250px] lg:h-[250px] my-8 lg:mt-14"
              src="https://www.lapa.ninja/lab/lapax/images/people/1.jpg"
              alt="avatar"
            />
            <p className="text-lg font-light lg:text-2xl">
              <span className="text-2xl ">"</span>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nemo, iusto magnam voluptatum nihil
              earum necessitatibus modi? Placeat, voluptate, asperiores
              doloribus omnis aut quis maiores nisi excepturi autem incidunt
              ipsam a.<span className="text-2xl">"</span>
            </p>
            <h1 className="text-xl font-semibold mt-[20px] mb-[10px]">
              Phong Vu
            </h1>
            <p className="">UI Designer at TanAnCity</p>
          </div>
        </section>
        <section className="px-[20px] py-[30px] md:py-28">
          <div>
            <div className="text-center my-4">
              <h1 className="text-3xl font-extralight text-gray-500 md:text-5xl ">
                App Screenshots
              </h1>
              <p className=" text-lg mt-[10px] mb-[20px] font-light text-gray-600 md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-row items-center gap-8 justify-center mb-10 md:mt-28">
              <img
                className=" sm:w-[300px] sm:h-[500px] md:block md:w-[250px] md:h-[400px]  border-4 border-white shadow-xl"
                src="https://www.lapa.ninja/lab/lapax/images/screenshot/screenshot-1.png"
                alt="screenshot1"
              ></img>
              <img
                className=" hidden md:block md:w-[250px] md:h-[400px] w-[191px] h-[339px] border-4 border-white shadow-xl"
                src="https://www.lapa.ninja/lab/lapax/images/screenshot/screenshot-2.png"
                alt="screenshot2"
              ></img>
              <img
                className=" md:w-[250px] md:h-[400px]   md:block  hidden   w-[191px] h-[339px] border-4 border-white shadow-xl"
                src="https://www.lapa.ninja/lab/lapax/images/screenshot/screenshot-3.png"
                alt="screenshot3"
              ></img>
              <img
                className=" md:w-[250px] md:h-[400px]  hidden lg:block w-[191px] h-[339px] border-4 border-white shadow-xl"
                src="https://www.lapa.ninja/lab/lapax/images/screenshot/screenshot-4.png"
                alt="screenshot4"
              ></img>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400">
          <div className="text-white ">
            <div className="text-center font-light py-12">
              <h1 className=" text-3xl md:text-6xl">Lapax Team</h1>
              <p className="mt-3 md:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="lg:flex lg:justify-evenly    lg:gap-4">
              <div className="text-center pb-7">
                <img
                  className="w-[130px] h-[130px] md:w-[240px] md:h-[240px] rounded-full mx-auto"
                  src="https://www.lapa.ninja/lab/lapax/images/team/team-1.jpg"
                  alt="avatar1"
                />
                <h1 className=" md:text-4xl font-semibold mt-[10px] mb-[5px]">
                  John Doe
                </h1>
                <p className=" md:text-2xl text-gray-200 font-light mb-[10px]">
                  Web Designer - Lapax Corp
                </p>
              </div>
              <div className="text-center pb-7">
                <img
                  className="w-[130px] h-[130px] rounded-full md:w-[240px] md:h-[240px] mx-auto"
                  src="https://www.lapa.ninja/lab/lapax/images/team/team-2.jpg"
                  alt="avatar2"
                />
                <h1 className=" md:text-4xl mt-[10px] mb-[5px] font-semibold">
                  Mark Kane
                </h1>
                <p className=" md:text-2xl text-gray-200 font-light mb-[10px]">
                  Programer - Lapax Corp
                </p>
              </div>
              <div className="text-center pb-7">
                <img
                  className="w-[130px] h-[130px] rounded-full md:w-[240px] md:h-[240px] mx-auto"
                  src="https://www.lapa.ninja/lab/lapax/images/team/team-3.jpg"
                  alt="avatar3"
                />
                <h1 className=" md:text-4xl mt-[10px] mb-[5px] font-semibold">
                  Maria Oto
                </h1>
                <p className=" md:text-2xl text-gray-200 font-light mb-[10px]">
                  Photographer - Lapax Corp
                </p>
              </div>
              <div className="text-center pb-7">
                <img
                  className="w-[130px] h-[130px] rounded-full md:w-[240px] md:h-[240px] mx-auto"
                  src="https://www.lapa.ninja/lab/lapax/images/team/team-4.jpg"
                  alt="avatar4"
                />
                <h1 className=" md:text-4xl mt-[10px] mb-[5px] font-semibold">
                  Leonardo
                </h1>
                <p className=" md:text-2xl text-gray-200 font-light mb-[10px]">
                  Super Hero
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default SideBar;
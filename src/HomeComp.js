import ProvideSec from "./ProvideSec";

const HomeComp = ()=> {
  return(
    <div className="home">
      <center className="maintext custom-header">
        <div className="container">
          <center className=" w-full md:w-3/5 lg:w-2/5 m-auto ">
            <h1 className="text-5xl text-white mb-10">The art of creating Smiles</h1>
            <p className="text-white w-full md:w-4/5 lg:w-9/12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
            <center className="btns my-20">
              <button className="p-4 my-3 mr-3 block md:inline-block text-blue-500 bg-white rounded-md">Book Appointment</button>
              <button className="p-4 my-3 block md:inline-block text-white rounded-md">View Medical Profile</button>
            </center>
          </center>
          <div className="circle"></div> <div className="circle"></div>
          <div className="circle"></div> <div className="circle"></div>
        </div>
      </center>

      <div className="sections shadow-md justify-around lg:flex flex-wrap lg:w-4/5 w-11/12 bg-white p-5 rounded-3xl">
          <div className="box my-6 w-full lg:w-5/12 md:flex p-4 rounded-3xl ">
            <div className="pic flex items-center mx-auto w-1/3 md:w-fit p-4">
              <img src={require(`./assets/phone.png`)} loading="lazy" alt="" className="w-40 md:w-28 lg:w-52" />
            </div>
            <div className="text flex items-center md:text-left text-center pl-2">
              <div>
                <h2 className="title text-blue-500 text-lg"> Emenrgency Contact </h2>
                <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                <button className="sec-btn py-2 px-4 text-white my-2 rounded-md">Call Now</button>
              </div>
            </div>
          </div>

          <div className="box my-6 w-full lg:w-5/12 md:flex p-4 rounded-3xl md:mr-2">
            <div className="pic flex items-center mx-auto w-1/3 md:w-fit p-4">
              <img src={require(`./assets/calendar.png`)} loading="lazy" alt="" className="w-40 md:w-28 lg:w-52" />
            </div>
            <div className="text flex items-center md:text-left text-center pl-2">
              <div>
                <h2 className="title text-blue-500 text-lg"> Appointments </h2>
                <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                <button className="sec-btn py-2 px-4 text-white my-2 rounded-md">Set One Now</button>
              </div>
            </div>
          </div>

          <div className="box my-6 w-full lg:w-5/12 md:flex p-4 rounded-3xl ">
            <div className="pic flex items-center mx-auto w-1/3 md:w-fit p-4">
              <img src={require(`./assets/clock.png`)} loading="lazy" alt="" className="w-40 md:w-28 lg:w-52" />
            </div>
            <div className="text flex items-center md:text-left text-center pl-2">
              <div>
                <h2 className="title text-blue-500 text-lg"> Working Hours </h2>
                <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                <button className="sec-btn py-2 px-4 text-white my-2 rounded-md">View</button>
              </div>
            </div>
          </div>

          <div className="box my-6 w-full lg:w-5/12 md:flex p-4 rounded-3xl md:mr-2">
            <div className="pic flex items-center mx-auto w-1/3 md:w-fit p-4">
              <img src={require(`./assets/doctor.png`)} loading="lazy" alt="" className="w-40 md:w-28 lg:w-52" />
            </div>
            <div className="text flex items-center md:text-left text-center pl-2">
              <div>
                <h2 className="title text-blue-500 text-lg"> Our Doctors </h2>
                <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                <button className="sec-btn py-2 px-4 text-white my-2 rounded-md">View</button>
              </div>
            </div>
          </div>

        </div>
      
      {/* provide sec */}
      <ProvideSec />

      {/* homeform section */}
      <section className="homeform mb-20">
        <div className="layer">
          <div className="inside py-44 bg-blue-900 opacity-75">
            <div className="container">
              <form action="" className="w-full md:w-4/5 md:2/3 lg:w-1/2">
                <div className="input-group mb-6">
                  <p className="text-white text-lg tracking-wide">Full Name</p>
                  <input type="text" className="rounded-xl outline-none p-2 block w-full md:w-2/3 lg:w-1/2 text-black font-bold bg-gray-400 bg-opacity-75 tracking-wide" />
                </div>

                <div className="input-group mb-6">
                  <p className="text-white text-lg tracking-wide">Phone Number</p>
                  <input type="tel" className="rounded-xl outline-none p-2 block w-full md:w-2/3 lg:w-1/2 text-black font-bold bg-gray-400 bg-opacity-75 tracking-wide" />
                </div>

                <button className="block w-full md:w-2/3 lg:w-1/2 p-2 rounded-xl bg-white text-blue-700">
                  Pick Appiontment Now
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* reachus section */}

      <div className="reachus">
        <div className="container">
          <div className="info w-full lg:w-1/2 mb-28 border-t-8 border-blue-600 bg-blue-100 overflow-hidden">

            <div className="box px-3 text-gray-600 mb-4">
            <span className="text-2xl">
              <i class="ri-phone-line"></i>
            </span>
            <span className="ml-3 text-md "> 158-254-2687</span>
            </div>
            <div className="box px-3 text-gray-600 mb-4">
            <span className="text-2xl">
            <i class="ri-mail-send-fill"></i>
            </span>
            <span className="ml-3 text-md "> dental_center@mail.com</span>
            </div>

            <p className="ml-3 mb-3 mt-8">Or pay us a visit in :</p>
            
            <div className="box px-3 text-gray-600 mb-4">
            <span className="text-2xl">
            <i class="ri-hospital-line"></i>
            </span>
            <span className="ml-3 text-md "> Zagazig - Sharqia - Egypt</span>
            </div>
            
            <div className="box px-3 text-gray-600 mb-4">
            <span className="text-2xl">
            <i class="ri-time-line"></i>
            </span>
            <span className="ml-3 text-md ">
            <span>Everyday 10:00am - 10:00pm</span>
            <br />
            <span className="text-blue-600 ml-8">( Friday 10:00am - 05:00pm )</span>
            </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
};

export default HomeComp ;
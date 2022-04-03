import { Link } from "react-router-dom";

const ProvideSec = () => {
  return (
    <section className="providesec pb-32 ">
      <div className="container">
        <center className="maintitle ">
          <h1 className="text-5xl md:text-7xl font-bold">500+</h1>
          <h2 className="text-2xl md:text-4xl font-bold">Patient</h2>
          <p className="text-black text-md my-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
        </center>

        {/* allprovides section */}
        <div className="allprovides my-14">
          <center className="text-4xl md:text-5xl mb-44 font-bold">We Provide ...</center>
          
          <section className="parent md:flex justify-between flex-wrap block">

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full p-4 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-implants.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">IMPLANTS</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full px-4 py-6 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-ortho.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">ORTHODONTICS (BRACES)</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full px-4 py-3 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-root.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">ROOT CANAL TREATMENT</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full p-4 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-periodontal.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">PERIODONTAL THERAPY</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full p-4 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-oral.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">ORAL SURGERIES</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

            <div className="box w-full md:w-2/5 lg:w-1/4 mr-4 my-24">
              <div className="pic rounded-full p-4 py-5 w-20 border-4 border-blue-200">
                <img src={require(`./assets/services-childres.png`)} loading="lazy" alt="" className="w-full" />
              </div>
              <div className="text py-6 rounded-lg">
                <h1 className="my-3 text-lg ">DENTISTRY FOR CHILDREN</h1>
                <button className="my-3 text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-500">Read More </button>
              </div>
            </div>

          </section>
        </div>

        {/* Whychoose section */}
        <section className="whychoose lg:flex justify-between">
          <div className="pic w-full mb-10 lg:w-2/5 overflow-hidden rounded-lg">
            <img src={require(`./assets/why-us-panel-blue.png`)} loading="lazy" alt="" className="w-max rounded-lg " />
          </div>

          <div className="text w-full lg:w-1/2">
            <h1 className="text-4xl leading-relaxed mb-6">Why You Should Choose Our Dental Services</h1>
            <p className="text-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>

            <div className="box flex my-4 hover:translate-x-4 cursor-pointer duration-500 bg-blue-100 w-full md:w-4/5 py-3 pl-2 rounded-lg">
              <div className="pic w-20 h-24 flex items-center justify-center bg-gray-300 rounded-xl">
                <img src={require(`./assets/ambulance-svgrepo-com.png`)} loading="lazy" alt="" className="scale-75" />
              </div>
              <div className="info flex items-center pl-4">
                <div>
                  <h1 className="mb-4 text-lg text-blue-500">Advanced Care</h1>
                  <Link to="/" className="border-blue-400 border-b-2 hover:opacity-100 opacity-50 text-blue-500">
                    Learn more <i class="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="box flex my-4 hover:translate-x-4 cursor-pointer duration-500 bg-blue-100 w-full md:w-4/5 py-3 pl-2 rounded-lg">
              <div className="pic w-20 h-24 flex items-center justify-center bg-gray-300 rounded-xl">
                <img src={require(`./assets/chemistry-svgrepo-com.png`)} loading="lazy" alt="" className="scale-75" />
              </div>
              <div className="info flex items-center pl-4">
                <div>
                  <h1 className="mb-4 text-lg text-blue-500">Laboratory Test</h1>
                  <Link to="/" className="border-blue-400 border-b-2 hover:opacity-100 opacity-50 text-blue-500">
                    Learn more <i class="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="box flex my-4 hover:translate-x-4 cursor-pointer duration-500 bg-blue-100 w-full md:w-4/5 py-3 pl-2 rounded-lg">
              <div className="pic w-20 h-24 flex items-center justify-center bg-gray-300 rounded-xl">
                <img src={require(`./assets/Path 30.png`)} alt="" loading="lazy" className="scale-75" />
              </div>
              <div className="info flex items-center pl-4">
                <div>
                  <h1 className="mb-4 text-lg text-blue-500">Efficiecy</h1>
                  <Link to="/" className="border-blue-400 border-b-2 hover:opacity-100 opacity-50 text-blue-500">
                    Learn more <i class="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}
 
export default ProvideSec;
import { Link } from "react-router-dom";

const AboutComp = () => {
  return (
    <section className="aboutcomp">
      <header className="custom-header">
        <div className="container overflow-hidden">
          <center className="font-bold text-4xl text-white tracking-wider my-20">About Us</center>
          <div className="icons mb-4 text-white">
            <span className="text-lg">Follow us at </span>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-facebook-box-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-instagram-line"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-twitter-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-dribbble-line"></i> </Link>
          </div>
        </div>
      </header>
      
      <div className="box my-28">
        <div className="container ">
          <div className="inbox lg:flex ">
            <div className="info flex items-center mb-6 w-full lg:w-1/2 lg:px-10 text-lg text-gray-800 leading-relaxed tracking-wider">
              <p>Maadi Dental Center has been providing dental services since 1984, when Prof. Dr. A. Azim established it as the first ever multi-specialty dental center in Maadi. Since then, it has evolved into one of the best leading dental treatment providers in Egypt, gaining more success and fame in providing high quality service and treatment for highly prestigious clients. Our aim was always to serve families living in and around our beloved quiet district of Maadi, but we also take pride in treating and servicing many celebrities, embassies, and multinational companies, seeking top & excellent dental care for their staff.  </p>
            </div>
            <div className="pic w-full lg:w-1/2">
              <img src={require(`./assets/aboutpic1.png`)} loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="box mb-28 py-10 bg-blue-50">
        <div className="container ">
          <div className="inbox lg:flex ">
            <div className="info flex items-center mb-6 w-full lg:w-1/2 lg:px-10 text-lg text-gray-800 leading-relaxed tracking-wider">
              <div>
                <p>Owing to the Center’s multiple specialties, and the quality of dental care it provides, the office is unarguably considered to be a pioneer forerunner in local dental field according to many specialized professionals and organizations. </p> <br />
                <p>Official International awards of excellence recognition and honors from Europe and USA constitute a part of our office profile. Services at MDC extend from regular dental procedures include periodic check-ups and cleanings, tooth colored fillings, root canals, periodontal treatment, restorative crowns and bridges, Braces, Dental Surgeries and Emergencies.  </p>
              </div>
            </div>
            <div className="pic w-full lg:w-1/2">
              <img src={require(`./assets/aboutpic2.png`)} loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <center className="text-gray-900 text-lg tracking-wide leading-relaxed mb-20">Maadi Dental Center is especially known for the advanced state of the art services it provides. The pioneering experience of Prof. Azim and his team in the field of dental Implants utilizing latest techniques and best implant brands provides hope for patients seeking true happy smiles. Teeth Aligners, and smile designs, as well as the revolutionary 3D Dental CT imaging, WATERLASE® LASER and CEREC® computer designed and printed restorations became icons within our dental services portfolio.   </center>
      </div>
    </section>
  );
}
 
export default AboutComp;
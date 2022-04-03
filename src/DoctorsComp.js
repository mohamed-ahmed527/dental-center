import { Link } from "react-router-dom";
import Slider from "react-slick";
import Error from "./Error";

const DoctorsComp = () => {
  const doctors = [
    {id:"6", avatar:'./assets/doctors/doc6.png' , name:"Dr.Nour seif-Eldin"} ,
    {id:"1", avatar:'./assets/doctors/doc1.png' , name:"Prof.Dr.Amr Azim"} ,
    {id:"2", avatar:'./assets/doctors/doc2.png' , name:"Dr.Hisham Azim"} ,
    {id:"3", avatar:'./assets/doctors/doc3.png' , name:"Dr.Mohamed Omar"} ,
    {id:"4", avatar:'./assets/doctors/doc4.png' , name:"Dr.Aly Kotb"} ,
    {id:"5", avatar:'./assets/doctors/doc5.png' , name:"Dr.Ahmed Mohsen"} ,
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="doctorscomp">
      <header className="custom-header">
        <div className="container overflow-hidden">
          <center className="font-bold text-4xl text-white tracking-wider my-20">Our Doctors</center>
          <div className="icons mb-4 text-white">
            <span className="text-lg">Follow us at </span>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-facebook-box-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-instagram-line"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-twitter-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-dribbble-line"></i> </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <p className="text-gray-800 my-8 text-lg tracking-wider leading-relaxed ">EGDental is OSHA compliant. We follow strict sterilization protocols and standards in all our operations. Our staff receives regular training on OSHA regulations to stay updated with recent changes. We have 12 operating Dentists, 15 assisting Dentists, Hygienists, and Nurses, 3 Secretaries and 2 Office Boys.</p>
        
        <Slider className="py-16" {...settings}>
          {doctors.map((item)=>{
            return(
              <div className="box p-3 md:p-6 ">
                <div className="inside px-4 bg-blue-100 rounded-3xl overflow-hidden">
                  <div className="pic block py-4 ">
                    <img src={require(`${item.avatar}`)}  loading="lazy" alt="" className="w-max" />
                  </div>
                  <div className="block hover:text-blue-500 text-center mb-4 font-semibold tracking-wider"> {item.name} </div>
                </div>
              </div>
            )})}
        </Slider>
        <Error />
      </div>
    </section>
  );
}
 
export default DoctorsComp;
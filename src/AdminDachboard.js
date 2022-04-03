import { useState } from "react";
import AdminDachboardDoctors from "./AdminDachboardDoctors";
import AdminDachboardAppointments from "./AdminDachboardAppointments";
import { Link } from "react-router-dom";

const AdminDachboard = () => {
  const [content,setContent] = useState(true) ;
  const [sideMobile, setSideMobile] = useState(false);

  return (
    <section className="admin-dachboard">
      {/* start of mobile top nav */}
      <div className="mobile-top-nav relative flex justify-between text-white p-2 rounded-t-lg">
        <div className="mobile-logo w-32 flex items-center">
          <img src={require(`./assets/logo.png`)} loading="lazy" alt="" />
        </div>
        <button className="font-bold text-3xl"  onClick={()=>{setSideMobile(!sideMobile)}}>
          {sideMobile? <i class="ri-close-fill"></i> : <i class="ri-menu-fill"></i>}
        </button>
      </div>
      {/* end of mobile top nav */}
      <div className="inside-box">
        <div className={sideMobile? "side-nav-mobile" : "side-nav"} >
            <div className="logo w-1/2">
              <img src={require(`./assets/logo.png`)} loading="lazy" alt="" />
            </div>
            <div>
              <p className="text-center text-white">welcome</p>
              <div className="admin-info">
                <div className="admin-pic rounded-full">
                  <img src={require(`./assets/doctors/doc2.png`)} loading="lazy" alt="" className="p-1 rounded-full" />
                </div>
                <p className="admin-name text-lg mb-20 text-center text-white">Mr.khaled ali</p>
              </div>
            </div>
            <span className={content ? "active" : "notactive"} onClick={()=>{setContent(true)}} > Appointments </span>
            <span className={content ? "notactive" : "active"} onClick={()=>{setContent(!content)}}> Doctors </span>
          </div>
        <div className="content lg:pl-10 pl-4 lg:mt-0 mt-10 w-full lg:w-4/5">
          <div className="top-box w-max">
            <Link to="/" className="flex">
              <div className="pic mr-4 w-16 rounded-full overflow-hidden">
                <img src={require(`./assets/doctors/doc2.png`)} loading="lazy" alt="" className="rounded-full" />
              </div>
              <span className="flex items-center text-lg text-gray-800 ">mr.khaled ali</span>
            </Link>
          </div>
          {content && <div>{<AdminDachboardAppointments></AdminDachboardAppointments>}</div> }
          {!content && <div>{<AdminDachboardDoctors></AdminDachboardDoctors>}</div> }
        </div>
      </div>
    </section>
  );
}
 
export default AdminDachboard;
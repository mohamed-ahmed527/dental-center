import { useState } from "react";
import { Link } from "react-router-dom";

const DocDashboardAppointments = () => {
  const appointments = [
    {name:"ali", date:"15/2/2023", time:"11:00"},
    {name:"ali", date:"15/2/2023", time:"11:00"},
    {name:"ali", date:"15/2/2023", time:"11:00"}
  ];
  const [sideMobile, setSideMobile] = useState(false);

  return (
    <section className="doc-dashboard-appointments mb-16">
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
      <section className="inside-box">
        <div className={sideMobile? "side-nav-mobile" : "side-nav"} >
          <div className="logo w-1/2">
            <img src={require(`./assets/logo.png`)} loading="lazy" alt="" />
          </div>
          <div>
            <p>welcome</p>
            <div className="doc-info">
              <div className="doc-pic rounded-full">
                <img src={require(`./assets/doctors/doc2.png`)} loading="lazy" alt="" className="p-1 rounded-full" />
              </div>
              <p className="doc-name text-lg mb-20">Dr.ali malek</p>
            </div>
          </div>
          <p className="appointments">Appointments</p>
        </div>
        {/* end of side nav */}
        <div className="content lg:pl-10 pl-4 lg:mt-0 mt-10 w-full lg:w-4/5 ">
          <div className="top-box w-max">
            <Link to="/DocDashboardProfile" className="flex">
              <div className="pic mr-4 w-16 rounded-full overflow-hidden">
                <img src={require(`./assets/doctors/doc2.png`)} loading="lazy" alt="" className="eounded-full" />
              </div>
              <span className="flex items-center text-lg text-gray-800 ">Dr.ali malek</span>
            </Link>
          </div>
          <div className="search-appointments my-16">
            <span className="inline-block mr-6">Appointments for day</span>
            <input type="date" className="inline-block mr-4 text-gray-800 border-2 border-gray-200 rounded-lg py-1 px-2 w-56 outline-none" />
            <span className="search-icon bg-blue-400 hover:bg-blue-500 text-white inline-block text-center rounded-full px-2 py-0.5 text-lg"> <i class="ri-search-line"></i></span>
          </div>
          {appointments.length>0 ?
              <table className="w-full mb-20">
                <thead>
                  <th>Name</th>
                  <th>Times/Day</th>
                  <th>Notes</th>
                </thead>
                <tbody>
                {appointments.map((item , index)=>{
                  return(
                    <tr className="relative" key={index} >
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.date} 
                      </td>
                      <td>
                        {item.time}
                      </td>
                      <td>
                        <Link to="/PatientProfile" className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded-lg"> View Profile</Link>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">There is no appointment for you today</p>}
        </div>
      </section>
    </section>

  );
}
 
export default DocDashboardAppointments;
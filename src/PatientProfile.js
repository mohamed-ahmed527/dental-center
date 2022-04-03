import { Link } from "react-router-dom" ;
import { useState } from "react";

const PatientProfile = () => {
  const [treatments , updateList] = useState([
    {id:"1", name:"Toothhach",times:"3",notes:"you can eat only 1 shoclete a day"},
    {id:"2", name:"Roaq89",times:"4",notes:"-"},
    {id:"3", name:"top4	",times:"1",notes:"don't eat sweat "},
  ]);
  const doctornotes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor vel nisl in rhoncus. Sed urna lorem, viverra vulputate tellus non, malesuada scelerisque mauris. Suspendisse potenti. Cras viverra at massa id ornare. Etiam eu dui vestibulum." ;
  const allDieases = [];
  const dentalDieases = [ {go:"Yes I have gone to dental before", why:"Proin auctor vel nisl in rhoncus. Sed urna lorem, viverra vulputate tellus non, malesuada scelerisque mauris. Suspendisse potenti. Cras viverra at massa id ornare. Etiam eu dui vestibulum, tempor dolor vitae, blandit dui. Praesent a tellus quis erat faucibus pellentesque non vitae mi"} ];
  const roll = "doctor" ;
  
  return(
    <section className="patient-profile my-32">
      <div className="container">
        <Link to="/SearchPage" className="hover:text-blue-600"> <span> <i class="ri-arrow-left-line"></i> </span> Back to search </Link>
        <h1 className="text-gray-800 font-bold text-4xl tracking-wider my-10"> Patient Profile </h1>

        <div className="box mx-auto w-full lg:w-11/12 ">
          {/* cover picture */}
          <div className="coverpic w-full h-64 bg-blue-200 rounded-xl "> </div>

          <div className="info lg:flex relative bottom-16 md:left-10 left-0 md:pr-12 pr-0">
            <div className="pic w-36 md:w-44 md:mx-0 mx-auto rounded-full">
              <img src={require(`./assets/doctors/doc3.png`)} loading="lazy" className="border-8 border-blue-100 rounded-full" alt="" />
            </div>
            <div className="text md:mt-0 mt-4 flex items-end ml-4">
              <div>
                <div className="tracking-wider mt-6 flex flex-wrap justify-between ">
                  <h1 className="text-3xl mt-6 font-bold mr-10"> Patient 1 </h1>
                  <h1 className="text-lg mt-6 mr-10 "> 30 Years old </h1>
                  <h1 className="text-lg mt-6 "> male </h1>
                </div>
                <div className="contact md:flex">
                  <h1 className="mt-6 text-lg tracking-wider md:mr-10"> <span className="icon text-2xl"> <i class="ri-phone-line"></i> </span> +20012365475 </h1>
                  <h1 className="mt-6 text-lg tracking-wider"> <span className="mail text-2xl"> <i class="ri-mail-line"></i> </span> alaamohamed@gmail.com </h1>
                </div>
              </div>
            </div>
          </div>

          <center className="appointment tracking-wider my-10 mx-auto rounded-2xl bg-blue-500 text-white p-10 md:w-2/3 lg:w-1/3 w-10/12" >
            <h1 className="text-xl mb-10">Next Appointment</h1>
            <h3 className="text-lg mb-2"> <span className="mr-4"><i class="ri-calendar-line"></i></span> <span> 1/1/2023</span> </h3>
            <h3 className="text-lg "> <span className="mr-4"><i class="ri-time-line"></i></span> <span>5:00 pm</span> </h3>
          </center>
          {/* parent box */}
          <div className="parentbox mt-32 my-10">
            {/* treatment-section */}
            <h1 className="text-gray-800 font-bold text-4xl tracking-wider mb-10">Treatment</h1>
            {treatments.length>0 ?
            <table className="w-full ">
              <thead>
                <th>Name</th>
                <th>Times/Day</th>
                <th>Notes</th>
              </thead>
              <tbody>
              {treatments.map((item , index)=>{
                return(
                  <tr className="relative" key={index} >
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.times + " times"} 
                    </td>
                    <td>
                      {item.notes}
                    </td>
                    {roll == "doctor"? <span className="remove-icon absolute right-0 top-3 px-2 py-1 text-white bg-red-400 cursor-pointer rounded-full ">
                    <i class="ri-delete-bin-5-line"></i>
                    </span>: ""}
                  </tr>
                )})}
              </tbody>
            </table> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">There is no treatments for you</p>}
            {/* doctor-notes */}
            <div className="doc-notes mt-10">
              <h1 className="text-blue-500 text-xl font-bold tracking-wider">Dotcors Notes</h1>
              {doctornotes.length>0 ? <p className="text-center border-2 p-2 mt-4 rounded-lg text-gray-800"> {doctornotes} </p> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800"> There is no notes yet </p> }
            </div>
            {/* medical-history-section */}
            <section className="medical-his my-10">
              <h1 className="text-3xl my-6 text-gray-800 tracking-wider font-bold">Medical History</h1>
              {/* over all dieases */}
              <div className="overall my-10">
                <h1 className="font-bold tracking-wider text-lg text-blue-500">Overall</h1>
                {allDieases.length>0 ?
                <div className="mt-6" >
                  {allDieases.map((item)=>{
                    return(
                      <span className="my-4 py-2 px-3 text-gray-800 mr-2 tracking-wider border-2 bg-blue-100 rounded-xl">
                      {item} </span> ) })}
                </div> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">There is no Dieases</p> }
              </div>
              {/* dental dieases */}
              <div className="dental my-10">
                <h1 className="font-bold tracking-wider text-lg text-blue-500">Dental</h1>
                  {dentalDieases.length>0 ? dentalDieases.map((item)=>{
                    return(
                      <div className="mt-6" >
                        <h1 className="my-4 py-2 px-3 text-gray-800 mr-2 tracking-wider border-2 bg-blue-100 rounded-xl">
                          {item.go} </h1>
                        <h1 className="my-4 py-2 px-3 text-gray-800 mr-2 tracking-wider border-2 bg-blue-100 rounded-xl">
                        {item.why} </h1>
                    </div>
                    )
                    }) : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">I haven't gone to dental before</p>}
              </div>
            </section>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PatientProfile ;
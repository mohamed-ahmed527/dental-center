import { useState } from "react";

const Step1Appointment = () => {
  const [id, setId] = useState(false);
  return (
    <section className="step1-appointment">
      <div className="w-1/2 mx-auto bg-blue-100 my-20 p-10 rounded-lg">
        <div className="my-10">
          <h1>Do you have an EGdental ID?</h1>
          <div className="my-10 text-white">
            <button className="py-2 px-10 rounded-lg bg-blue-500 " onClick={()=>{setId(true)}} >Yes</button>
            <button className="py-2 px-10 rounded-lg bg-blue-500 ml-4 " onClick={()=>{setId(false)}}>No</button>
          </div>
        </div>

        {id ?
          <div className="my-10"> <h1>Please enter your EGDental Patient ID</h1>
          <input type="text" className="block w-full my-4 p-3 rounded-lg outline-none" />
          </div> : "" }
      </div>
    </section>
  );
}
 
export default Step1Appointment;
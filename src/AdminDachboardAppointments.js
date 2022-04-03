import { Link } from "react-router-dom";

const AdminDachboardAppointments = () => {
  const appointments = [
    {name:"ali", date:"15/2/2023", time:"11:00", doctor:"momo"},
    {name:"ali", date:"15/2/2023", time:"11:00", doctor:"amr"},
    {name:"ali", date:"15/2/2023", time:"11:00", doctor:"mshmsh"}
  ];

  return (
    <div className="admin-dachboard-appointments">
      <div className="search-appointments my-16">
        <span className="inline-block mr-6">Appointments for day</span>
        <input type="date" className="inline-block mr-4 text-gray-800 border-2 border-gray-200 rounded-lg py-1 px-2 w-56 outline-none" />
        <span className="search-icon bg-blue-400 hover:bg-blue-500 text-white inline-block text-center rounded-full px-2 py-0.5 text-lg"> <i class="ri-search-line"></i></span>
      </div>
      {appointments.length>0 ?
        <table className="w-full mb-20">
          <thead>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
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
                  {item.doctor}
                </td>
                <td>
                  <Link to="/" className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded-lg"> View Profile</Link>
                </td>
              </tr>
            )})}
          </tbody>
        </table> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">There is no appointment today</p>
        }
    </div>
  );
}
 
export default AdminDachboardAppointments;
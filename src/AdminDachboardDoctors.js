import { Link } from "react-router-dom";

const AdminDachboardDoctors = () => {
  const doctors = [
    {name:"mazen", username:"15/2/2023", specialization:"Implants" },
    {name:"momo", username:"15/2/2023", specialization:"Lol" },
    {name:"omar", username:"15/2/2023", specialization:"Othongray" }
  ];

  return (
    <div className="admin-dachboard-doctors relative pb-24">
      <div className="search-doc my-16">
        <span className="inline-block mr-6">Search by doctors name</span>
        <input type="search" className="inline-block mr-4 text-gray-800 border-2 border-gray-200 rounded-lg py-1 px-2 w-56 outline-none" />
        <span className="search-icon bg-blue-400 hover:bg-blue-500 text-white inline-block text-center rounded-full px-2 py-0.5 text-lg"> <i class="ri-search-line"></i></span>
      </div>
      {doctors.length>0 ?
        <table className="w-full mb-20">
          <thead>
            <th>Name</th>
            <th>Username</th>
            <th>specialization</th>
          </thead>
          <tbody>
          {doctors.map((item , index)=>{
            return(
              <tr className="relative" key={index} >
                <td>
                  {item.name}
                </td>
                <td>
                  {item.username} 
                </td>
                <td>
                  {item.specialization}
                </td>
                <td>
                  <Link to="/" className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded-lg"> View Profile</Link>
                </td>
              </tr>
            )})}
          </tbody>
        </table> : <p className="text-center text-lg font-bold border-2 p-2 mt-4 rounded-lg text-gray-800">There is no Doctors yet</p>
      }
      <Link to="/AddDoc" className="add-doc-icon absolute bottom-0 right-1/4 text-blue-400 hover:text-blue-500 text-4xl ">
      <i class="ri-add-circle-fill"></i>
      </Link>
    </div>
  );
}
 
export default AdminDachboardDoctors;
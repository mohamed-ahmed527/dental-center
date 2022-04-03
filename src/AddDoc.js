const AddDoc = () => {
  return (
    <div className="add-doc-box lg:w-1/3 md:1/3 w-3/4 mx-auto">
      <h1 className="text-center text-2xl my-2 font-bold tracking-wider text-gray-800">Add New Doctor</h1>
      <form action="" className="bg-gray-100	p-6 rounded-xl">
        <div>
          <span> First Name </span>
          <input type="text" className="block my-4 w-full p-2 rounded-lg outline-none border-2 border-gray-300" />
        </div>
        <div>
          <span> Last Name </span>
          <input type="text" className="block my-4 w-full p-2 rounded-lg outline-none border-2 border-gray-300" />
        </div>
        <div>
          <span> specialization </span>
          <select className="block my-4 w-full p-2 rounded-lg outline-none border-2 border-gray-300">
            <option value=""></option>
            <option value="IMPLANTS">IMPLANTS</option>
            <option value="ORTHODONTICS (BRACES)">ORTHODONTICS (BRACES)</option>
            <option value="ROOT CANAL TREATMENT">ROOT CANAL TREATMENT</option>
            <option value="PERIODONTAL THERAPY">PERIODONTAL THERAPY</option>
            <option value="ORAL SURGERIES">ORAL SURGERIES</option>
            <option value="DENTISTRY FOR CHILDREN">DENTISTRY FOR CHILDREN</option>
          </select>
        </div>
        <div>
          <span> Username </span>
          <input type="text" className="block my-4 w-full p-2 rounded-lg outline-none border-2 border-gray-300" />
        </div>
        <div>
          <span> Password </span>
          <input type="password" className="block my-4 w-full p-2 rounded-lg outline-none border-2 border-gray-300" />
        </div>
        <button className="block px-10 py-2 bg-blue-400 hover:bg-blue-500 mx-auto text-white rounded-lg ">
          Add
        </button>
      </form>
    </div>
  );
}
 
export default AddDoc;
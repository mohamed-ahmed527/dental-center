const SearchPage = () => {
  return (
    <section>
      <div className="custom-header pt-20 mb-32">
        <div className="container">
          <center className="font-bold mb-10 text-2xl md:text-3xl lg:text-4xl tracking-wider text-white" >Search For Patient Profile </center>
          <div className="py-20 px-5 w-full bg-blue-100 rounded-xl relative top-20 ">
            <h1 className="text-xl">Enter your EGDental Patient ID</h1>
            <div className="flex mt-6">
              <input type="text" className=" border-2 border-gray-300 w-4/5 outline-blue-500 py-3 px-2 rounded-xl mr-4"  />
              <span className="flex cursor-pointer items-center text-xl px-4 bg-blue-600 text-white font-bold rounded-full"> <i class="ri-search-line"></i> </span>
            </div>
          </div>        
        </div>
      </div>
      <div className="pic w-1/2 md:w-1/3 mx-auto">
        <img src={require(`./assets/search.png`)} loading="lazy" alt="" className="w-max" />
      </div>

    </section>
  );
}
 
export default SearchPage;
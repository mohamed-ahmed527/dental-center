import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error-page my-20">
      <div className="container">
        <center className="text-4xl font-bold my-2 text-gray-800">Oops!</center>
        <center className="text-4xl font-bold my-2 text-gray-800">Something is missing.</center>
        <center className="my-10 text-lg text-gray-800">Please check the URL again <br/> or let us take you back to EGDental<br/> homopage.</center>
        <Link to="./" className="py-2 px-4 block mx-auto w-fit bg-blue-500 text-white rounded-lg my-10 hover:bg-blue-600">
          <i class="ri-arrow-left-line"></i> Back To Home Page
        </Link>
        <div className="pic w-4/5 md:w-2/3 mx-auto my-20">
          <img src={require(`./assets/error.png`)} alt="" className="w-full block mx-auto" />
        </div>
      </div>
    </section>
  );
}
 
export default Error;
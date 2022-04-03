import { Link } from "react-router-dom";

const SingleDocComp = () => {
  return (
    <section className="single-doc-comp my-20 text-gray-800">
      <div className="container">
        <Link to="/DoctorsComp" className="hover:text-blue-600"> <span> <i class="ri-arrow-left-line"></i> </span> Back to all doctors list </Link>
        <h1 className="text-gray-800 font-bold text-4xl tracking-wider my-10"> Doctor Profile </h1>
        <div className="box mx-auto w-full lg:w-11/12 ">
          <div className="coverpic w-full h-64 bg-blue-200 rounded-xl "> </div>

          <div className="info lg:flex relative bottom-16 md:left-10 left-0 md:pr-12 pr-0">
            <div className="pic w-36 md:w-44 md:mx-0 mx-auto rounded-full">
              <img src={require(`./assets/doctors/doc6.png`)} loading="lazy" className="border-8 border-blue-100 rounded-full" alt="" />
            </div>
            <div className="text md:mt-0 mt-4 flex items-end ml-4 ">
              <div>
                <h1 className="font-bold text-3xl tracking-wider mt-6"> Dr.Alla Mohamed </h1>
                <div className="contact md:flex">
                  <h1 className="mt-6 text-lg tracking-wider md:mr-10"> <span className="icon text-2xl"> <i class="ri-phone-line"></i> </span> +20012365475 </h1>
                  <h1 className="mt-6 text-lg tracking-wider"> <span className="mail text-2xl"> <i class="ri-mail-line"></i> </span> alaamohamed@gmail.com </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="summary my-10">
            <h1 className="font-bold text-2xl tracking-wide "> Personal Summary</h1>
            <p className="leading-loose tracking-wide my-6 text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor vel nisl in rhoncus. Sed urna lorem, viverra vulputate tellus non, malesuada scelerisque mauris. Suspendisse potenti. Cras viverra at massa id ornare. Etiam eu dui vestibulum, tempor dolor vitae, blandit dui. Praesent a tellus quis erat faucibus pellentesque non vitae mi. Nam ut elit quis dui bibendum ornare. Cras quis pharetra felis. Praesent pellentesque neque sit amet mauris sollicitudin hendrerit. Suspendisse fermentum varius enim, at vehicula ante congue ut. Integer sit amet finibus mauris. Quisque ut odio a orci egestas tristique vitae vel est. Curabitur vel vulputate sem. Maecenas bibendum metus tortor, vitae fringilla ipsum facilisis lobortis.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
 
export default SingleDocComp;
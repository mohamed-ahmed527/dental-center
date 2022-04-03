import { Link } from "react-router-dom";

const DocDashboardProfile = () => {
  return (
    <section className="doc-dashboard-profile">
      <div className="container">
        <div className="top-box mt-10 mb-28">
          <div className="link-box">
            <Link to="/" className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg ">Edit Profile Info</Link>
          </div>
        </div>
        {/* end of top-box */}
        <main>
        <div className="coverpic relative w-full pb-10 bg-blue-500 rounded-3xl ">
          <div className="info lg:flex  relative -top-14 text-white lg:left-10 left-0 lg:pr-12 pr-0 text-center lg:text-left">
            <div className="pic w-36 m-auto lg:m-0 md:w-44 rounded-full ">
              <img src={require(`./assets/doctors/doc1.png`)} loading="lazy" className="border-8 border-blue-100 rounded-full" alt="" />
            </div>
            <div className="text md:mt-0 mt-4 lg:ml-4 ml-0 ">
              <div>
                <div>
                  <h1 className="font-bold text-3xl tracking-wider mt-24"> Dr.Moaaz ali </h1>
                  <p className="text-gray-200 mb-4 font-bold text-md tracking-wide">@DMA217</p>
                </div>
                <div className="contact lg:flex flex-wrap">
                  <h1 className="mt-6 text-lg tracking-wider md:mr-10"> <span className="icon text-2xl"> <i class="ri-phone-line"></i> </span> +20012365475 </h1>
                  <h1 className="mt-6 text-lg tracking-wider"> <span className="mail text-2xl"> <i class="ri-mail-line"></i> </span> alaamohamed@gmail.com </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="summary my-24">
            <h1 className="font-bold text-2xl tracking-wide text-gray-700"> Personal Summary</h1>
            <p className="leading-loose tracking-wide my-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor vel nisl in rhoncus. Sed urna lorem, viverra vulputate tellus non, malesuada scelerisque mauris. Suspendisse potenti. Cras viverra at massa id ornare. Etiam eu dui vestibulum, tempor dolor vitae, blandit dui. Praesent a tellus quis erat faucibus pellentesque non vitae mi. Nam ut elit quis dui bibendum ornare. Cras quis pharetra felis. Praesent pellentesque neque sit amet mauris sollicitudin hendrerit. Suspendisse fermentum varius enim, at vehicula ante congue ut. Integer sit amet finibus mauris. Quisque ut odio a orci egestas tristique vitae vel est. Curabitur vel vulputate sem. Maecenas bibendum metus tortor, vitae fringilla ipsum facilisis lobortis.</p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default DocDashboardProfile;
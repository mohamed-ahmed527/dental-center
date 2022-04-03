import { Link } from "react-router-dom";

const FrequentlyComp = () => {  
  const implants = [
    {
      "question": "Is it possible to have an implant on the same day of extraction?",
      "answer": "Proper examination and case evaluation will show if your case can take an “Immediate Implant” . The literature shows that 80% of situations will allow that procedure. An implant is the screw shaped titanium insert that takes the place of a natural root. The crown will follow in 2-4 months. Only in front teeth, full jaw implants and some other limited cases, we can give you also immediate temporary crowns on the same day."
    },
    {
      "question": "What are the rates of failure in implants surgeries?",
      "answer": "Failure rates range from 1 to 3% and they can be somehow higher with smokers and those compromised with lack of immunity."
    },
    {
      "question": "Who is the right candidate for the implants?",
      "answer": "Anyone who wants to replace his/her missed teeth. It can be used also to replace small bridges and dentures."
    },
    {
      "question": "How long will it take?",
      "answer": "From 2 to 3 months and in many cases immediate implants and crowns can be done at the time of extraction, so it depends on your teeth case."
    },
    {
      "question": "What is Implantology?",
      "answer": "It is replacement for the decayed, damaged or missing natural teeth by artificial ones."
    }
  ] ;
  const orthodontics = [
    {
      "question": "Can I practice my favorite sports?",
      "answer": "Sure you can. Play football, tennis, basketball, soccer or whatever you want. However, make sure you wear your mouth guard while playing, and avoid rough sports that may result in a punch on your mouth."
    },
    {
      "question": "Do braces hurt?",
      "answer": "It depends on the type of braces used, even the possible transient pain always controllable by the aid of your orthodontist."
    },
    {
      "question": "Is Invisalign safe?",
      "answer": "Sure, it is. It was approved by The Federal Drug Administration in August, 1998."
    },
    {
      "question": "Will I look good in braces?",
      "answer": "Yes, sure as there are many kinds and shapes of braces. At Maadi Dental Center, we can align your teeth using INVISALIGN, which is a set of successive clear trays worn over a short period of time, moving your teeth gently towards the desired position."
    },
    {
      "question": "When can I observe changes in my teeth?",
      "answer": "Within 3 – 6 weeks, after putting braces."
    }
  ] ;
  const root_canal_treatment = [
    {
      "question": "Does it hurt, I mean during the root canal treatment procedures?",
      "answer": "There will be no pains, even under normal local anesthesia, but for more relaxed sessions we have the highest technological nitrous gas unit aimed specifically at your relaxation during your appointments, with a fast and safe onset together with an instant recovery. So much so that you can be in and out before you even know it. For those who prefer to be almost put to sleep, we offer conscious sedation under the supervision of a medical anesthesiologist available throughout the setting process."
    },
    {
      "question": "What is the dental pulp?",
      "answer": "The dental pulp is a soft-threat inside teeth, which provides nutrients to the teeth. It contains lymph vessels, arteries, veins, and nerve fibers."
    },
    {
      "question": "How will root canal treatments save my teeth?",
      "answer": "Root canal treatment is important, as it removes the inflamed or infected pulp, and cleans and shapes the inside of the teeth."
    },
    {
      "question": "Who is the right candidate for root canal treatment?",
      "answer": [
        "Those who suffer from stained teeth.",
        "Gums swelling.",
        "Deep decay."
      ]
    },
    {
      "question": "What is root canal treatment?",
      "answer": "Normally, you will be sensitive to the cold or hot drinks at times after undergoing the CEREC. But this sensitivity will reduce by the lapse of time."
    }
  ] ;
  const periodontal_therapy = [
    {
      "question": "How can I protect myself from periodontal diseases?",
      "answer": "You can protect yourself by : Regular teeth brushing and Regular flossing, to remove any bacteria and avoid gums diseases."
    },
    {
      "question": "Is the laser treatment painful?",
      "answer": "Absolutely not. It is bloodless and painless."
    },
    {
      "question": "What is the treatment method used for periodontal diseases?",
      "answer": "It could be treated by surgery and/or laser."
    },
    {
      "question": "What are the symptoms of periodontal diseases?",
      "answer": [
        "Gums bleeding, ",
        "Bad breath, ",
        "Loosening of teeth, ",
        "Bleeding while brushing your teeth."
      ]
    },
    {
      "question": "What are the periodontal diseases?",
      "answer": "The periodontal diseases are the gums diseases which occur due to bacterial infection."
    }
  ] ;
  const oral_surgeries = [
    {
      "question": "Does it hurt, I mean while having any oral Surgery?",
      "answer": "There will be no pains, even under normal local anesthesia, but for more relaxed sessions we have the highest technological nitrous gas unit aimed specifically at your relaxation during your appointments, with a fast and safe onset together with an instant recovery. So much so that you can be in and out before you even know it. For those who prefer to be almost put to sleep, we offer conscious sedation under the supervision of a medical anesthesiologist available throughout the setting process."
    },
    {
      "question": "What is the dental pulp?Why do partially erupted wisdom teeth cause problems?",
      "answer": "Because they are considered the ground for growing some bacteria and germs that infect your teeth, and sometimes leading to Cysts and tumors."
    },
    {
      "question": "Why do wisdom teeth cause some dental problems?",
      "answer": "Because wisdom teeth can be sometimes impacted, or may be unable to come in or move into their proper place."
    },
    {
      "question": "Is there any relationship between ear pains and the TMJ disorders?",
      "answer": "Yes, sometimes there is a relation between both of them, due to the close proximity of the ear tissues to the TM Joint."
    }
  ] ;
  const children_dentistry = [
    {
      "question": "How often should we take our children for routine dental checkups?",
      "answer": "Half annual visits will usually get best results."
    },
    {
      "question": "By which time should my child start to visit a dentist?",
      "answer": "The first visit should start from 2 or 3 years old, to follow up teeth developments and to discover early any dental problems."
    },
    {
      "question": "How can I prevent my child from thumb sucking?",
      "answer": "You can prevent thumb sucking in different ways : Bandaging the thumb or putting a sock on his hand(s) at night, Always try to relax your child. Sometimes children suck their thumb when they are afraid or annoyed, Praise your child and encourage him for not sucking his thumbs."
    },
    {
      "question": "Dose mouth guards prevent my child to talk, breathe well while wearing them ?",
      "answer": "Absolutely not. He can do whatever he wants, as the fitted mouth guards stay in their places without moving."
    },
    {
      "question": "Which time would you recommend the best to make braces for my child?",
      "answer": "Early ages are the best ages for the orthodontist (braces). It starts from 2 to 6 years old, as it will reduce their need for high braces treatments."
    },
    {
      "question": "What is the importance of the primary teeth?",
      "answer": "The child’s primary teeth are very important, as neglecting them and their cavities may lead to : Problems in permanent teeth development, Problems in chewing and eating, Problems in the development of jaw and bones, Problems in normal speech development."
    }
  ] ;
  return (
    <section className="frequentlycomp">
      <header className="custom-header">
        <div className="container overflow-hidden">
          <center className="font-bold text-4xl text-white tracking-wider my-20">Frequently Asked Questions</center>
          <div className="icons mb-4 text-white">
            <span className="text-lg">Follow us at </span>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-facebook-box-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-instagram-line"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 mx-6"> <i class="ri-twitter-fill"></i> </Link>
            <Link to="" className="text-xl hover:text-blue-800 "> <i class="ri-dribbble-line"></i> </Link>
          </div>

        </div>
      </header>

      <div className="container">
      {/* implants */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> IMPLANTS   </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl ">

          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs1.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>

          <div className="all-ques px-4 lg:ml-6 lg:w-2/3 w-full">
            {implants.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title hover:text-blue-500 cursor-pointer mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer"> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>

      {/* orthodontics */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> ORTHODONTICS(BRACES)   </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl">
          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs2.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>
          {/* all ques */}
          <div className="all-ques px-4 lg:ml-6 lg:w-2/3 w-full">
            {orthodontics.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title cursor-pointer hover:text-blue-500 mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer "> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>

      {/* root_canal_treatment */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> ROOT CANAL TREATMENT  </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl">
          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs3.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>
          {/* all ques */}
          <div className="all-ques px-4 lg:ml-6 lg:w-2/3 w-full">
            {root_canal_treatment.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title cursor-pointer hover:text-blue-500 mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer "> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>

      {/* periodontal_therapy */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> Periodontal Therapy </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl">
          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs4.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>
          {/* all ques */}
          <div className="all-ques px-4 lg:ml-6 lg:w-2/3 w-full">
            {periodontal_therapy.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title cursor-pointer hover:text-blue-500 mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer "> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>

      {/* oral_surgeries */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> Oral Surgeries </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl">
          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs5.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>
          {/* all ques */}
          <div className="all-ques px-4 lg:ml-6 lg:w-2/3 w-full">
            {oral_surgeries.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title hover:text-blue-500 cursor-pointer mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer "> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>

      {/* children_dentistry */}
      <div className="parentbox my-16">
        <div className="title text-center w-fit mx-auto bg-blue-400 text-white rounded-xl py-2 px-10 font-semibold tracking-wider relative top-4 uppercase"> Children Dentistry </div>
        <div className="depart lg:flex py-6 px-2 bg-blue-100 rounded-2xl">
          <div className="pic p-2 rounded-2xl relative overflow-hidden lg:w-1/4 w-1/2 h-fit lg:mx-0 mx-auto mb-6 lg:mb-0 flex ">
            <img src={require(`./assets/faqs/faqs6.png`) } loading="lazy" alt="" className="w-full block mx-auto" />
            <div className="bg-blue-300 z-10 w-full h-full absolute top-0 left-0 opacity-25"> </div>
          </div>
          {/* all ques */}
          <div className="all-ques px-4 lg:ml-6  lg:w-2/3 w-full">
            {children_dentistry.map( (item) => {
              return(
              <details className="single-ques mb-4">
                <summary className="ques-title hover:text-blue-500 cursor-pointer mb-1 text-md font-bold text-gray-800 tracking-wider">
                  <span className="icon text-2xl cursor-pointer "> + </span>
                  <span className="pl-1">{item.question}</span>
                </summary>
                <p className="ques-ans pl-8 text-gray-700 tracking-wide leading-relaxed"> {item.answer} </p>
              </details>
              )})}
          </div>
        </div>
      </div>




      </div>

    </section>
  );
}
 
export default FrequentlyComp;
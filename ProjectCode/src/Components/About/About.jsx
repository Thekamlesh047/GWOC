import AboutInfo from "./AboutInfo";


function About() {
  return (
    <div
      className="hero min-h-screen bg-white  flex flex-col pt-3 md:justify-center md:relative "
      id="about"
    >
      <div className=" md:absolute md:top-28 md:left-10   ">
        <h1 className=" text-3xl">About Me</h1>
        <h1 className="md:max-w-[80%] hidden md:flex ">
        Tarang K. Bombale is currently pursuing an Integrated MSc in Mathematics
        at SVNIT Surat, demonstrating a strong educational foundation.
        specializes in comprehensive teaching and effective doubt resolution
      </h1>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-center">
             <AboutInfo
             abouttitle={"Education"}
                 fistDateinfo={"2020 - Present"} 
                 firstInfo={`Integrated MSc in Mathematics -
                 SVNIT, Surat`}
                 secondDateinfo={"2019"}
                 secondtInfo={`Somalwar High School, Ramdaspeth,
                 Nagpur`}
             />
             <AboutInfo 
             abouttitle={"Experience"}
             fistDateinfo={"2019"} 
             firstInfo={`IIT Gurukul, Surat- Teacher 
             (JEE Physics)`}
             secondDateinfo={"September 2022-Present"}
             secondtInfo={"Online Physics Tutor"}
             />
             <AboutInfo
             abouttitle={"Skills"}
                 fistDateinfo={`In-depth Teaching Approach
                 Doubt Solving
                 `} 
                 firstInfo={`Real-life Applications
                 `}
                 secondDateinfo={`Problem-Solving Strategies
                 `}
                 secondtInfo={"Continuous Support"}
             />
          
      </div>
    </div>
  );
}

export default About;

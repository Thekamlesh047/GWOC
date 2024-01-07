import AboutInfo from "./AboutInfo";


function About() {
  return (
    <div
      className="hero min-h-screen bg-white  flex flex-col pt-3 md:justify-center md:relative "
      id="about"
    >
      <div className=" md:absolute md:top-10 md:left-5  ">
        <h1 className=" text-3xl">About Me</h1>
        <h1 className="md:max-w-[80%] hidden md:flex ">
        Tarang K. Bombale is currently pursuing an Integrated MSc in Mathematics
        at SVNIT Surat, demonstrating a strong educational foundation.
        specializes in comprehensive teaching and effective doubt resolution
      </h1>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-center">
             <AboutInfo/>
             <AboutInfo/>
             <AboutInfo/>
          
      </div>
    </div>
  );
}

export default About;

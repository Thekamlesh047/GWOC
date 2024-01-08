import Achievo from "./Achievo";

function Achievements() {
  return (
    <div className=" h-screen w-full bg-black flex flex-col md:pt-[5%] gap-3 justify-center py-5 md:relative  items-center" id="achievements">

        <h1 className=" text-3xl text-white">Achievements</h1>
      <Achievo info={"Secured AIR 6808 in JEE Advanced 2020"} />
      <Achievo info={"Selected for NISER and UM-DAE with an AIR 186 in NEST 2020"} />
      <Achievo info={"Selected for IISER Behrampur"} />
      <Achievo info={"Selected for IISER Behrampur"} />
      <Achievo info={"Cleared NTSE stage 1 in 2016"} />
      <Achievo info={"Got High Distinction in Australian Chemistry Quiz 2015"} />
      <Achievo info={"Level 1 Certified Fitness Trainer and Nutrition Specialist"} />
      <Achievo info={"Gold medal in Gujrat State Powerlifting Championship 2022"} />
    </div>
  );
}

export default Achievements;

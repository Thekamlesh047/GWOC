import VideoCard from "./VideoCard";

function Demos({userEmail,Login}) {

  // const currentUserID = "kamleshparmar94617@gmail.com"

  // const isAuthorized = Login && userEmail === currentUserID;

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center h-screen gap-4" id="demos">
    <VideoCard />
    <VideoCard/>
    <VideoCard/>
    </div>
  );
}

export default Demos;

import { Pencil } from "lucide-react";

function VideoCard({showOptions}) {
    return (
        <div className="card md:max-w-80 max-w-60 bg-neutral text-neutral-content">
        <div className=" px-4 py-3 md:card-body items-center text-center rounded-lg">
          <video src="src/assets/demo1.mp4" controls></video>
        </div>
        <div className="flex justify-around items-center pb-3">
          <p className=" px-2 py-1 rounded-xl text-white md:btn bg-[#50D888] ">NOTES</p>
          {showOptions && <Pencil />}
        </div>
      </div>
    )
    
}

export default VideoCard;
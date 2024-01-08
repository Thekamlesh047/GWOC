import { Dot } from "lucide-react";

function AboutInfo({fistDateinfo,firstInfo,secondDateinfo,secondtInfo,abouttitle}) {
    return (
        <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-sm border border-black rounded-lg shadow-2xl px-4 pt-2">
          <div className="flex flex-col">
            <h1 className="text-[#50d888] text-4xl font-medium text-center">
              {abouttitle}
            </h1>
            <div className=" pt-5 pb-5 flex flex-col gap-3">
              <div>
                <p className="flex"> <Dot /> {fistDateinfo}</p>
                <p className="flex"> <Dot /> {firstInfo}</p>
              </div>
              <div>
                <p className="flex"> <Dot /> {secondDateinfo}</p>
                <p className="flex"> <Dot /> {secondtInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
}
export default AboutInfo;
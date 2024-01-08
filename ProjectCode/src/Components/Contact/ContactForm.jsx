import { MapPin, Mail, Phone } from "lucide-react";

function ContactForm() {
    return (
        <div className="hero min-h-screen bg-black">
  <div className="hero-content md:gap-2 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <div className="flex justify-center gap-3 w-full flex-col text-white">
        <div className="flex gap-1 ">
        <MapPin />
        <div  className="flex flex-col items-start">
          <p>SVNIT, Surat</p>
          <p className=" max-w-[50%]">
            Ichchhanath Surat- Dumas,
            Road, Keval Chowk, Surat, Gujarat 395007
          </p>
          </div>
        </div>
        <div className="flex gap-1 ">
        <Mail />
        <div  className="flex flex-col items-start">
          <p>
          tarangbombale01@gmail.com
          </p>
          </div>
        </div>
        <div className="flex gap-1 ">
        <Phone />
        <div  className="flex flex-col items-start">
          <p>7666638042</p>
          </div>
        </div>
        </div>
    </div>
    <div className="card  shrink-0 w-full max-w-[15rem] sm:max-w-[18rem] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <textarea className="textarea textarea-bordered" placeholder="Massage"></textarea>
        <div className="form-control mt-6">
          <button className="btn bg-[#50D888] text-white">Sumit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
    
}

export default ContactForm;
import { X } from "lucide-react";


function Modal({onClose, Login, onSignup, userName, profilePicture}) {
    
 
  return (
    <div  className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 text-white flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <button className=" place-self-end text-black"
        onClick={onClose}
        >
       
          < X className="text-white" />
        </button>
        <div className="card w-96 bg-black shadow-xl">
          <figure className="px-10 pb-2 pt-8">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profilePicture} />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex gap-1">
            <p>Hello,</p> <p>{userName}</p>
            </div>

            <div className="card-actions">
             

              {Login? (
          <button
          className="btn btn-primary"
            onClick={(e) => logout()}
          >
            Logout
          </button>
        ) : (
          <button
          className="btn btn-primary"
            onClick={onSignup}
          >
            Login
          </button>
        )}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

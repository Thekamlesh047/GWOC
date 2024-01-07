import { Instagram, Linkedin, Twitter, Copyright, MapPin  } from "lucide-react";

function Footer() {
  return (
    <footer
      className="footer footer-center p-10 bg-black text-primary-content"
      id="footer"
    >
    
        <div className="flex">
        <MapPin />
        <div  className="flex flex-col">
          <h1>SVNIT, Surat</h1>
          <p>
            Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007
          </p>
          </div>
        </div>
      
      <div className="flex items-center gap-1">
        <Copyright className=" w-4" />
        <p>2024 tarang bombale - All right reserved</p>
      </div>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <Instagram />
          <Linkedin />
          <Twitter />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

import {
  Instagram,
  Linkedin,
  Twitter,
  Copyright,
} from "lucide-react";

function Footer() {
  return (
    <footer
      className="footer footer-center p-10 bg-black text-primary-content"
      id="footer"
    >
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Instagram />
          <Linkedin />
          <Twitter />
        </div>
      </nav>
      <div className="flex items-center gap-1">
        <Copyright className=" w-4" />
        <p>2024 tarang bombale - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

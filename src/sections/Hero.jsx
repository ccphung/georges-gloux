import logo from "../assets/images/logo.png";
import header from "../assets/images/header.png";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-10">
        <div>
          <img className="w-[150px]" src={logo} alt="logo" />
        </div>

        <div className="relative w-[30vw]">
          <img
            className="relative z-10 w-full object-cover  brightness-75 hue-rotate-15"
            src={header}
            alt="header"
          />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Hero;

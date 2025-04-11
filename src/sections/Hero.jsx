import logo from "../assets/images/logo.png";
import header from "../assets/images/header.png";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <img className="xl:w-[150px] w-20" src={logo} alt="logo" />
        </div>

        <div className="relative xl:w-[30vw] w-[60vw]">
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

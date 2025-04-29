import gg from "../assets/images/header.png";

function Header() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-start overflow-hidden bg-gray-200 px-10 py-10 md:min-h-[80vh]">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-orange-200 to-transparent opacity-50"></div>

      <div className="relative mt-5 flex flex-col items-center">
        <h2 className="text-center text-5xl font-bold uppercase text-orange-500 opacity-70 md:text-[8vw]">
          Georges Gloux
        </h2>
      </div>

      <div className="absolute bottom-0 z-10 xl:w-[25vw]">
        <img
          src={gg}
          alt="Cédric"
          className="w-full object-contain grayscale"
        />
      </div>
    </div>
  );
}

export default Header;

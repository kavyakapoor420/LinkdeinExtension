import Spline from "@splinetool/react-spline";
import Circle from "../../assets/Circle.png";
import TypeWritingEffect from "./TypeWritingEffect";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <h1 className="md:text-7xl text-4xl py-6 text-white font-extrabold leading-tight drop-shadow-lg">
          Stay Safe Online, Hassle-Free.
        </h1>

        <p className="md:text-2xl text-lg font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text leading-relaxed max-w-3xl">
          Hide harassment messages while securing evidence for legal actions. <br />
          Stay <TypeWritingEffect />
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
          Install Now
        </button>

        <img className="w-24 mt-10 animate-pulse" src={Circle} alt="Decoration" />
      </div>

      {/* Spline 3D Model */}
      <div className="absolute top-0 left-0 right-0 h-full flex justify-center items-center z-0">
        <Spline scene="https://prod.spline.design/Ql1hHdBoyb7KLnb6/scene.splinecode" />
      </div>
    </div>
  );
};

export default HeroSection;

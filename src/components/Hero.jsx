import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/profile_pic.jpeg"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full h-full lg:w-1/2">
          <div className="d-flex flex-column items-center lg:items-start">
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-9 lg:mr-12 lg:text-8xl">
              Vinícius Ferrari
            </h1>
            <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-size-17px text-4xl tracking-tight text-transparent">
              Front-End Developer
            </h2>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

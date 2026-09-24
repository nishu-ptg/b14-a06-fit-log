import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero bg-zinc-900 border border-slate-800 px-14 py-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="font-inter text-xs font-semibold tracking-wider text-lime-400 uppercase mb-6">
            WORKOUT LIBRARY
          </h3>
          <h1 className="text-5xl lg:text-6xl font-bold font-oswald uppercase">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-6 font-inter text-grey-400 text-sm lg:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn bg-lime-400 text-black font-inter font-black text-xs px-6 uppercase rounded-lg">
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src="/banner.png" alt="hero banner" width={334} height={334} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

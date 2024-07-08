import React from "react";
import NavBar from "../components/NavBar";
import videoBg from "../assets/background.mp4";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black opacity-70 z-1"></div>

        {/* Content sections */}
        <div className="relative z-10   ">
          <NavBar />

          {/* Section 1 */}
          <div id="section1" className="h-screen flex items-center px-[15%] ">
            <div className="text-left text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <div className="flex flex-col gap-5">
                  <p>THIS IS NOT</p>
                  <p>ANOTHER FITNESS</p>
                  <p>TREND – IT’S SCIENCE</p>
                </div>
              </h1>
              <div className="flex flex-col gap-3 text-lg lg:text-2xl">
                <p>We don’t have random training sessions,</p>
                <p>everything is thought out and</p>
                <p>worked out by professionals.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            id="section2"
            className="h-screen flex items-center justify-center px-10 lg:px-20"
          >
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Section 2 Content
              </h2>
              <p className="text-lg lg:text-2xl">
                Additional information about the fitness program.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div
            id="section3"
            className="h-screen flex items-center justify-center px-10 lg:px-20"
          >
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Section 3 Content
              </h2>
              <p className="text-lg lg:text-2xl">
                More details and closing statements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

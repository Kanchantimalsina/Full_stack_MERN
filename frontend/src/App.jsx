import video from "./assets/background.mp4";
import "./App.css";
import NavBar from "./base/NavBar";
import Footer from "./base/Footer";
import tfc from "./assets/TFC.png";
function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay for decreasing contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content above the video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="space-y-0.2">
          <img src={tfc} alt="" />
          <h1 className="text-white text-4xl text-center">Comming Soon ...</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "../elements/navbar/Navbar";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Profile from "./Profile";
import Project from "./Project";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Profile id="profile" />
      <About id="about" />
      <Experience id="experience" />
      <Project id="project" />
      <Contact id="contact" />
      <div className="relative bottom-0 left-0 p-4 text-xs">
        © 2024 Marchel. All rights reserved.
      </div>
    </div>
  );
};

export default Home;

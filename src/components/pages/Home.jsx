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
    </div>
  );
};

export default Home;

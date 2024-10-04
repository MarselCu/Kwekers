import { saveAs } from "file-saver";
import Button from "../elements/button/Button";


const Profile = ({ id }) => {

  const downloadCV = () => {
    saveAs('/resume/Marchel-Resume.pdf', 'Marchel-Resume.pdf');
  }
  
  return (
    <section id={id}>
      <div className="flex justify-start md:justify-center pt-16 md:pt-40 flex-col md:flex-row items-center md:items-start gap-5 md:gap-20 h-screen">
        <div>
          <img
            src="/images/profile1.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-300"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-montserrat gap-2">
          <div className="font-medium text-lg">Hello, I'm</div>
          <div className="text-6xl font-bold">Marchel</div>
          <div className="text-2xl font-semibold text-zinc-600">Frontend Developer</div>
          <div className="flex justify-between gap-2 pt-2">
            <Button text="Download CV" variant="outline" onClick={downloadCV}/>
            <Button text="Contact Me" />
          </div>
          <div className="flex justify-between gap-5 pt-2">
             <a href="https://www.linkedin.com/in/marchel-dev/" target="_blank" rel="noopener noreferrer" >
             <img src="/icons/linkedin.png" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://github.com/Kwekers" target="_blank" rel="noopener noreferrer" >
            <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

const About = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-start h-screen font-montserrat" // Ubah justify-center ke justify-start
    >
      <div className="w-4/5 mx-auto text-center mt-20">
        <header className="mb-20">
          <h2 className="text-lg text-gray-500">Get to know more</h2>
          <h1 className="text-4xl font-bold">About Me</h1>
        </header>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div>
            <img
              src="/images/about-pic.png"
              alt="Profile"
              className="rounded-3xl w-80 h-80 object-cover" // Ganti dengan ukuran yang lebih besar
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center flex-col border border-black p-4 rounded-lg">
                <img
                  src="/icons/experience.png"
                  alt="Experience Icon"
                  className="w-6 h-6"
                />
                <h3 className="text-lg font-semibold mb-1">Experience</h3>
                <p className="text-sm mb-1">2+ years</p>
                <p className="text-sm">Frontend Development</p>
              </div>

              <div className="flex items-center flex-col border border-black p-4 rounded-lg">
                <img
                  src="/icons/education.png" // Ganti dengan ikon pendidikan
                  alt="Education Icon"
                  className="w-6 h-6"
                />
                <h3 className="text-lg font-semibold mb-1">Education</h3>
                <p className="text-sm mb-1">B.Sc Bachelors Degree</p>
              </div>
            </div>
            <article className="mt-6 text-left">
              <p className="text-left break-words">
              I’m an Information Technology student with a passion for technology and its potential to solve real-world problems. I enjoy exploring new developments in the field and continuously learning to enhance my skills. I thrive on challenges and look forward to contributing to innovative projects.
              </p>
            </article>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;

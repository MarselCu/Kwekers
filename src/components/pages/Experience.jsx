import React from "react";

const frontendSkills = [
  {
    name: "HTML",
    level: "Advanced",
  },
  {
    name: "CSS",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    level: "intermediate",
  },
  {
    name: "React",
    level: "intermediate",
  },
  {
    name: "Angular",
    level: "Intermediate",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    level: "intermediate",
  },
  {
    name: "Express.js",
    level: "intermediate",
  },
  {
    name: "MySQL",
    level: "intermediate",
  },
  {
    name: "postgreSQL",
    level: "Beginner",
  },
  {
    name: "Postman",
    level: "Beginner",
  },
];

const Experience =({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-screen flex items-center justify-center font-montserrat"
    >
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-lg text-gray-500">Explore My</h2>
          <h1 className="text-3xl font-bold">Experience</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-around items-center w-full">
          {/* Frontend Card */}
          <div className="border border-gray-300 rounded-3xl p-5 shadow-lg md:w-2/5 h-3/4 flex flex-col">
            <h1 className="text-xl font-bold mb-6 text-center">
              Frontend Development
            </h1>
            <div className="grid grid-cols-2 gap-4 flex-grow overflow-auto lg:pl-12">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2">
                    <img
                      src="/icons/checkmark.png"
                      alt=""
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="border border-gray-300 rounded-3xl p-5 shadow-lg md:w-2/5 h-3/4 flex flex-col">
            <h1 className="text-xl font-bold mb-6 text-center">
              Backend Development
            </h1>
            <div className="grid grid-cols-2 gap-4 flex-grow overflow-auto lg:pl-12">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2">
                    <img
                      src="/icons/checkmark.png"
                      alt=""
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

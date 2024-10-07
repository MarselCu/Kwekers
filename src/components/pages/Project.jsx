import Button from "../elements/button/Button";

const projects = [
  {
    image: "/images/project-2.png",
    title: "Project 1",
    github: "https://github.com/Kwekers",
    browse: "https://github.com/Kwekers",
  },
  {
    image: "/images/project-2.png",
    title: "Project 2",
    github: "https://github.com/Kwekers",
    browse: "https://github.com/Kwekers",
  },
  {
    image: "/images/project-2.png",
    title: "Project 3",
    github: "https://github.com/Kwekers",
    browse: "https://github.com/Kwekers",
  },
  {
    image: "/images/project-2.png",
    title: "Project 4",
    github: "https://github.com/Kwekers",
    browse: "https://github.com/Kwekers",
  },
];

const Project = ({ id }) => {
  return (
    <section id={id} className="px-40 py-6">
      <div className="text-center mb-10">
        <h2 className="text-lg font-normal">Browse My Recent</h2>
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-black rounded-2xl p-5 shadow-lg flex flex-col items-center h-96"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-56 h-56 object-contain mb-4 rounded-3xl" // Matching the card's border radius
            />
            <h3 className="text-lg font-semibold mb-5">{project.title}</h3>
            <div className="flex space-x-4">
              <Button 
                text="GitHub" 
                onClick={() => window.open(project.github, "_blank")} 
                variant="outline" // Using outline variant
                size="md"
              />
              <Button 
                text="Browse" 
                onClick={() => window.open(project.browse, "_blank")} 
                variant="outline" // Using outline variant
                size="md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

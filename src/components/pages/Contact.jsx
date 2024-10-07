const Contact = ({ id }) => {
  return (
    <section id={id} className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-normal font-normal">Get in Touch</h2>
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <div className="mt-6  flex items-center space-x-4 border rounded-3xl p-4 shadow-lg">
          <div className="flex items-center">
            <img src="/icons/email.png" alt="Email Icon" className="w-6 h-6" />
            <a href="mailto:achell.chl@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg">
              achell.chl@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <img src="/icons/linkedin.png" alt="LinkedIn Icon" className="w-6 h-6" />
            <a href="https://www.linkedin.com/in/marchel-dev/" target="_blank" rel="noopener noreferrer" className="text-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import { ExternalLink, Link } from "lucide-react";

const projects = [
  {
    title: "MUBI Digital Wallet Sign Up",
    description:
      "Usable demo of a sign-up flow with form validations and logged state.",
    image:
      "/assets/images/projects/mubi.png",
    tech: ["React", "Vite", "Typescript", "Tailwind CSS", "Framer Motion"],
    repository: "https://github.com/anhubacek/digital-wallet-sign-up",
    deployment: "https://mubi-digital-wallet-sign-up-anhubacek.vercel.app/",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tech: ["TypeScript", "Express", "MongoDB"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for business metrics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Python", "D3.js"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="pt-10 pb-36">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-fit md:h-[550px]">
          {projects.map((project, index) => (
            <a
              href={project.deployment}
              key={index}
              className="flex flex-col justify-between rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[60vh] md:h-[500px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[45%] object-cover"
              />
              <div className="py-6 px-1 flex flex-col justify-between h-[55%]">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 brightness-95">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 brightness-95">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-gray-100 "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex w-full justify-between items-center">
                  <a
                    href={project.repository}
                    target="_blank"
                    className="py-2 px-4 items-center cursor-pointer bg-gradient-to-r from-[#06b6d4] to-purple-500 backdrop-blur-md text-white rounded-full flex items-center gap-2 transition-all duration-300 ease-in-out hover:gap-4 hover:opacity-90 cursor-pointer hover:scale-105"
                  >
                    {"Github Repository "}
                  </a>
                  <a
                    href={project.deployment}
                    target="_blank"
                    className=" py-2 px-4 text-white md:w-fit bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center gap-2 transition-all duration-300 ease-in-out hover:opacity-90 cursor-pointer hover:scale-105"
                  >
                    Project
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

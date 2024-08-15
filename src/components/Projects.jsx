import { PROJECTS } from "../constants";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}}>
              <img src={project.image} width={500} height={500} className="mb-6 rounded" alt={project.title} />
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="mx-8 mt-8 text-center text-2xl w-full max-w-xl">
              <h4 className="mb-2 font-semibold">{project.title}</h4>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index)=>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

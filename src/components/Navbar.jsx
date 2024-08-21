
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <h2 className="mx-2 w-3/4">VF</h2>
    </div>
    <div className="mb-8 mr-4 flex items-center justify-content gap-4 text-2xl">
        <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300 cursor:pointer"><MdGTranslate/></a>
        <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300" target="blank" href="https://www.linkedin.com/in/viniciusferucciferrari/"><FaLinkedin/></a>
        <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" target="blank" href="https://github.com/vfferrari7"><FaGithub/></a>
    </div>
  </nav>;
};
export default Navbar;

import { CONTACT } from "../constants";
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-center text-4xl">Contact</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="my-4 ">{CONTACT.address}</motion.p>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.button whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} onClick={() =>  navigator.clipboard.writeText('vzlkff@gmail.com')}className="my-4 border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300 cursor:pointer" href=""><p>{CONTACT.email}</p></motion.button>
      </div>
    </div>
  )
}

export default Contact

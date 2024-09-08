import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}  className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="flex flex-col align-center justify-center text-center tracking-tighter">
            <div className="flex mb-5 mx-auto align-center justify center text-center">
                <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="mr-7">{CONTACT.phoneNo}</motion.p>
                <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} href="mailto:dennis.gega@uconn.edu" >{CONTACT.email}</motion.a>
            </div>
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} href="src/assets/projects/Dennis_Gega_Resume.pdf">My Resume</motion.a>
        </div>
    </div>
  )
}

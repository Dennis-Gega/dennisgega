import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-center text-4xl tracking-tight text-transparent">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity:0, x: -100}} className="w-full lg:w-1/2 mx-auto">
                <div className="flex items-center justify-center">
                    <p className="text-center my-2 max-w-xl font-light tracking-tighter">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

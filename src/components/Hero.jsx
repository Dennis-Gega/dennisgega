import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="w-full lg:w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-center text-6xl font-thin lg:mt-16 lg:text-8xl">
            Dennis Gega
          </motion.h1>
          <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-center text-4xl tracking-tight text-transparent">
            Full Stack Developer
          </motion.span>
          <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-center">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

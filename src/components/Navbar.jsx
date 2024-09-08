import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='text-2xl'>DG</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/dennisgega/'><FaLinkedin /></a>
            <a href='https://github.com/Dennis-Gega'><FaGithub /></a>
            <a href='https://www.instagram.com/dennisgegaa/'><FaInstagram /></a>
            <a href='mailto:dennis.gega@uconn.edu'><MdEmail /></a>
        </div>
    </nav>
  )
}

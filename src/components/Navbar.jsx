import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import DropdownButton from "./DropdownButton"
import { blackLogo } from '../assets/images'


const Navbar = () => {
  return (
   <header className="padding-x py-8 w-full absolute z-20">
        <nav className="flex max-container justify-between items-center">
            <a href="/"><img src={headerLogo} alt="Logo" width={100} height={100}/></a>
            <ul className="flex-1 flex gap-20 text-lg leading-normal text-slate-gray font-montserrat
            max-lg:hidden justify-center items-center pr-10 cursor-pointer">
                    {navLinks.map((link) => (
                        <li key={link.label} >
                               <a href={link.href}>
                                    {link.label}
                               </a>   
                        </li>
                    ))}
            </ul>
            <div className="flex max-xs:justify-end">
            <DropdownButton />
            </div>
            <div className="font-montserrat text-lg font-semibold leading-normal max-lg:hidden cursor-pointer relative pr-10">
               <a href="">Sign In / Explore Now</a> 
            </div>
        </nav>
   </header>
  )
}

export default Navbar

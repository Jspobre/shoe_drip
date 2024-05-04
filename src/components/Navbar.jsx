import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import DropdownButton from "./DropdownButton"


const Navbar = () => {
  return (
   <header className="px-7 py-8 w-full absolute z-10">
        <nav className="flex max-container justify-between items-center">
            <a href="/"><img src={headerLogo} alt="Logo"/></a>
            <ul className="flex-1 flex gap-20 text-lg leading-normal text-slate-gray font-montserrat
            max-lg:hidden cursor-pointer justify-center items-center pr-10">
                    {navLinks.map((link) => (
                        <li>
                               <a key={link.label} href={link.href}>
                            {link.label}
                        </a>   
                        </li>
                      
                    ))}
            </ul>
            <div>
            <DropdownButton />
            </div>
            <div className="font-montserrat text-lg font-semibold leading-normal max-lg:hidden cursor-pointer relative pr-10">
                Sign In / Explore Now
            </div>
        </nav>
   </header>
  )
}

export default Navbar

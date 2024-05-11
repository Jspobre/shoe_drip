import { useState } from "react"
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const DropdownButton = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
         <img src={hamburger} alt="" width={25} height={25} onClick={() => setIsOpen(!isOpen)} className="pb-2 lg:hidden"/> 
               {isOpen && (
                <div className="absolute right-0 border border-slate-300 w-[150px] h-[180px] flex gap-2 p-3 flex-col
                shadow-lg rounded z-25 lg:hidden">
                    {navLinks.map((link) => (
                        <a href={link.href} className="flex text-sm font-montserrat">{link.label}</a>
                    ))}
                    <a href="/" className="font-montserrat text-sm">Sign In / Explore Now</a>
                </div>
               )}
    </div>
  )
}

export default DropdownButton

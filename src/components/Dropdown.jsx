import { useState } from 'react';
import { hamburger} from '../assets/icons';
import  { navLinks } from '../constants/index';



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src={hamburger}
        alt="Hamburger"
        width={25}
        height={25}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          {navLinks.map((link) => (
            <a href={link.href} className='block px-2 py-3 text-sm font-montserrat'>{link.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

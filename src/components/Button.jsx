

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
   <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` 
      : "bg-coral-red rounded-full text-white border-coral-red font-normal"}
        rounded-full ${fullWidth && 'w-full'}`}>
    {label}
       {iconUrl && <img src={iconUrl}  
        alt="" 
        className="ml-2 rounded-full w-5 h-5"
        />  } 
   </button>
  )
}

export default Button

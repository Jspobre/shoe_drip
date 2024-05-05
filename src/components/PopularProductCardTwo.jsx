import { star } from "../assets/icons"



const PopularProductCardTwo = ({imgURL, name, price}) => {
  return (
    <div className="w-full flex flex-col max-sm:w-full flex-1 gap-3 ">
            <img src={imgURL} alt="" className="" />
            <div className="flex items-center mt-9">
            <img src={star} alt="" width={35} height={35}/>
            <p className="font-montserrat text-lg text-slate-gray">(4.5)</p>
            </div>
            <h2 className="font-semibold font-palanguin text-3xl">{name}</h2>
            <p className="text-coral-red text-2xl font-bold">{price}</p>
    </div>
  )
}

export default PopularProductCardTwo

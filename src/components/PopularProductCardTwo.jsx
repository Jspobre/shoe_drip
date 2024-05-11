import { star } from "../assets/icons"



const PopularProductCardTwo = ({imgURL, name, price}) => {
  return (
    <div className="w-full flex flex-col max-sm:w-full flex-1 gap-3 ">
            <img src={imgURL} alt="" className="" width={489} height={480}/>
            <div className="flex items-center mt-9">
            <img src={star} alt="" width={26} height={26}/>
            <p className="font-montserrat text-lg text-slate-gray ml-4">(4.5)</p>
            </div>
            <h2 className="font-semibold font-palanguin text-3xl">{name}</h2>
            <p className="text-coral-red text-2xl font-bold">{price}</p>
    </div>
  )
}

export default PopularProductCardTwo

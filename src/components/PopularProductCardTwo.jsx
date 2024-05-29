import { star } from "../assets/icons"
import { Link } from 'react-router-dom';


const PopularProductCardTwo = ({imgURL, name, price, id, rating}) => {
  return (
    <Link to={`products/${id}`}>
    <div className="w-full flex flex-col max-sm:w-full flex-1 gap-3 hover:shadow-2xl transition-shadow
    rounded-xl p-6">
           
            <img src={imgURL} alt="" className="" width={489} height={480}/>
            <div className="flex items-center mt-9">
            <img src={star} alt="" width={26} height={26}/>
            <p className="font-montserrat text-lg text-slate-gray ml-4">{rating}</p>
            </div>
            <h2 className="font-semibold font-palanguin text-3xl">{name}</h2>
            <p className="text-coral-red text-2xl font-bold">{price}</p>
   
    </div>
    </Link>
  )
}

export default PopularProductCardTwo

import { bigShoe1, bigShoe2 } from "../assets/images"

import { shoes, statistics } from "../constants"
import ShoeCardTwo from "../components/ShoeCardTwo"
import { useState } from "react"


const MyHero = () => {

  const [bigShoeImg, setBigShoeImg ] = useState(bigShoe1);


  return (
    <section id="home" className="max-container w-full flex xl:flex-row
    gap-10 min-h-screen flex-col">
        <div className="relative w-full flex flex-col justify-center items-start max-xl:padding-x 
        pt-40 xl:w-2/5 z-10">
            <p className="font-montserrat text-coral-red text-xl leading-8">Our Summer Collections</p>
            <h1 className="mt-14 font-palanguin text-8xl font-bold relative"> 
            <span className="xl:bg-white xl:whitespace-nowrap pr-8 py-4">The New Arrival</span> <br/>
            <span className="text-coral-red">Nike</span> Shoes
            <p className="text-lg font-montserrat font-normal leading-8 text-slate-gray py-5
            sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
            </p>
            <button className="text-sm font-montserrat bg-coral-red text-white
            px-16 py-5 rounded-full">
                Submit
            </button>
            <div className="flex mt-10 gap-10 leading-normal flex-wrap w-full">
              {statistics.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-palanquin text-[48px]">{stat.value}</p>
                        <p className="font-montserrat text-[18px] text-slate-gray font-normal">{stat.label}</p>
                      </div>
              ))}
            </div>
            </h1>
        </div>
        <div className="flex flex-1 relative max-xl:padding justify-center items-center pt-14 bg-hero bg-cover
        xl:min-h-screen max-xl:py-40 w-full ">
            <img src={bigShoeImg} 
            alt=""
             width={610}
              height={512} 
              className="object-contain relative z-10"
              />
            <div className="flex justify-center gap-10 items-center absolute bottom-[-5%] max-container
            max-sm:px-6">
            {shoes.map((shoe, index) => (
                   <div key={index}>
                      <ShoeCardTwo imgUrl={shoe} bigShoeImg={bigShoeImg} 
                           changeBigShoeImg={(shoe) => 
                            setBigShoeImg(shoe)}/> 
                   </div>

               ))}
            </div>
        </div>
   
     
    </section>
  )
}

export default MyHero

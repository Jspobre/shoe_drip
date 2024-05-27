import { bigShoe1, bigShoe2 } from "../assets/images"

import { shoes, statistics } from "../constants"
import ShoeCardTwo from "../components/ShoeCardTwo"
import { useState } from "react"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { plainCream } from "../assets/images"



const MyHero = () => {

  const [bigShoeImg, setBigShoeImg ] = useState(bigShoe1);


  return (
    <section id="home" className="max-container w-full flex xl:flex-row
    gap-10 min-h-screen flex-col relative">
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
          <Button label="Shop Now" iconUrl={arrowRight}/>
            <div className="flex mt-10 gap-10 leading-normal flex-wrap w-full">
              {statistics.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-palanquin text-3xl">{stat.value}</p>
                        <p className="font-montserrat text-xl text-slate-gray font-normal">{stat.label}</p>
                      </div>
              ))}
            </div>
            </h1>
        </div>
        <div className="flex flex-1 relative justify-center items-center bg-center bg-primary bg-hero bg-cover
        xl:min-h-screen max-xl:py-40 w-full">
            <img src={bigShoeImg} 
            alt=""
             width={610}
              height={512} 
              className="object-contain relative z-10"
              />
            <div className="flex gap-10 items-center absolute bottom-[-5%] sm:gap-6
            max-sm:px-6 sm:left-[10%] lg:right-[10%]">
            {shoes.map((shoe, index) => (
                   <div key={index}>
                      <ShoeCardTwo imgUrl={shoe} bigShoeImg={bigShoeImg} 
                      changeBigShoeImg={(bigShoeImg) => setBigShoeImg(bigShoeImg)}
                            /> 
                   </div>
               ))}
            </div>
        </div>
    </section>
  )
}

export default MyHero

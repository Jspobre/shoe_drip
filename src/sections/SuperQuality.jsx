import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center
   max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
          <h2  className="mt-10 font-palanquin text-4xl capitalize font-bold
          lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super 
       
            </span>
            <span className="text-coral-red"> Quality
       
            </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text mb-10">Ensuring premium comfort and style, our meticously crafted footwear
          is designed to elevate your experience, providing you with unmatched quality,
          innovation, and a touch of elegance.
          </p> 
          <p className="lg:max-w-lg info-text mb-10">
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div>
          <Button label="View Details" iconUrl={arrowRight}/>
          </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8"
      width={592}
      height={522}
      className="object-container" />
    </div>
   </section>
  )
}

export default SuperQuality

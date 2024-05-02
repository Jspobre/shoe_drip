import { reviews } from "../constants"
import CustomerReviewCard from "../components/CustomerReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl leading-normal font-bold">What Our
      <span className="text-coral-red"> Customers</span> Say?
        </h3>
        <p className="mt-5 info-text text-center max-w-lg m-auto">Hear genuine stories from our satisfied customers about their 
        exceptional experiences with us.</p>
        <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
          {reviews.map((review) => (
            <CustomerReviewCard key={review.customerName} {...review}/>
          ))}
        </div>  
    </section>
  )
}

export default CustomerReviews

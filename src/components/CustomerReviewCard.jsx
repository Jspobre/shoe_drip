import { star } from "../assets/icons"

const CustomerReviewCard = ({imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center text-center">
            <img src={imgURL} alt="" width={150} height={150} className="rounded-full"/>
        <p className="mt-7 max-w-sm info-text">{feedback}</p>
        <div className="flex mt-3 info-text">
            <img src={star} alt="" />
            <p className="ml-3">({rating})</p>
        </div>
        <h2 className="mt-5 text-3xl font-palanguin text-center font-bold">{customerName}</h2>
    </div>
  )
}

export default CustomerReviewCard



const ShoeCardTwo = ({imgUrl, bigShoeImg, changeBigShoeImg}) => {

    const handleClick = () => {
      if(bigShoeImg !== imgUrl.bigShoe){
        changeBigShoeImg(imgUrl.bigShoe)
      }
    }
  return (
    <div className={
    `border-2 rounded-xl 
    ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red': 'border-transparent'}
    cursor-pointer max-sm:flex-1`
    }
     onClick={handleClick}
     >
        <div className="flex justify-center items-center bg-center bg-cover bg-card object-contain
     rounded-xl flex-1 p-4 sm:w-40 sm:h-40 max-sm:p-4">
        <img src={imgUrl.bigShoe} alt="" width={127} height={103} className="object-contain" />
        </div>
 
    </div>
  )
}

export default ShoeCardTwo

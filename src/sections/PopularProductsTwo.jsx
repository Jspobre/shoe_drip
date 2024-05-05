import { products } from "../constants"
import PopularProductCardTwo from "../components/PopularProductCardTwo"



const PopularProductsTwo = () => {
  return (
    <section id='products' className='max-container w-full'>
            <div className='max-w-lg'>
                <h1 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h1>
                <p className='mt-6 text-slate-gray text-md leading-normal'>Experience top-notch quality and style with our
                 sought-after selections. Discover a world of comfort, design, and value</p>
            </div>
            <div className="w-full mt-16 grid gap-16 lg:grid-cols-4 md:grid-cols-3 
            sm:grid-cols-2 max-sm:grid-cols-1">
                {products.map((product, index) => (
                      <div key={index} className='object-contain'>
                            <PopularProductCardTwo key={product.name} {...product} />
                      </div>

                ))}
            </div>
          
    </section>
  )
}

export default PopularProductsTwo

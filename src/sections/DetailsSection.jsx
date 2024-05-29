import { useParams } from 'react-router-dom';
import { products } from '../constants';
import Footer from './Footer';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const DetailsSection = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <section className='relative xl:min-h-screen bg-slate-50 flex flex-col padding-x padding-t pb-8'>
        <div className='max-container flex xl:flex-row items-center w-full mt-10'>
          <div className='flex flex-1 items-start px-52 xl:items-center max-lg:flex-col'>
            <div className='flex flex-1 items-center justify-center'>
              <img 
                src={product.imgURL}
                alt={product.name}
                width={500}
                height={400}
                className='object-cover'
              />
            </div>
            <div className='xl:ml-2 mt-6 xl:mt-0 text-center xl:text-left items-center'>
              <p className='font-palanquin font-bold text-slate-900 text-[30px] xl:text-[50px] mb-6'>{product.name}</p>
              <p className='font-montserrat text-coral-red font-bold text-xl xl:text-2xl mb-5'>{product.price}</p>
              <p className='max-w-sm leading-normal font-sm text-slate-900 font-montserrat text-base pt-2'>
                {product.description}
              </p>
              <div className='mt-7'>
                <Button iconUrl={arrowRight} label="Check Out" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black w-full py-12 padding-x'>
        <Footer />
      </section>
    </>
  );
}

export default DetailsSection;

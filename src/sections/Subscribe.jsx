import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center
    max-lg:flex-col gap-10" id="contact-us">
        <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin
        font-bold">
          Sign Up For
          <span className="text-coral-red"> Updates</span> & Newsletter
        </h3>
        <div className='flex items-center justify-between max-sm:flex-col lg:max-w-[40%] w-full gap-5 p-2.5 
        sm:border sm:border-slate-gray rounded-full cursor-pointer'>
          <input type="text" placeholder="Subscibe@nike.com" className='focus:outline-none max-sm:border max-sm:border-slate-gray max-sm:w-full max-sm:py-5 max-sm:px-7 
          max-sm:rounded-full'/>
          <div className='flex max-sm:justify-end items-center max-sm:w-full max-w-md'>
            <Button label="Sign Up" fullWidth/>
          </div>
        </div>
    </section>
  )
}

export default Subscribe

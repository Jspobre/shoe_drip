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
        <div className='flex border-black'>
          <input type="text" placeholder="Subscibe@nike.com"/>
          <div>
            <Button label="Sign Up" fullWidth/>
          </div>
        </div>
    </section>
  )
}

export default Subscribe

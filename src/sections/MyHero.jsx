

const MyHero = () => {
  return (
    <section id="home" className="max-container w-full flex xl:flex-row
    gap-10 min-h-screen items-start">
        <div className="relative w-full flex flex-col justify-center items-start max-xl:padding-x 
        pt-28 xl:w-2/5">
            <p className="font-montserrat text-coral-red text-xl leading-normal">Our Summer Collections</p>
            <h1 className="mt-14 font-palanguin text-8xl font-bold relative "> 
            <span className="xl:bg-white xl:whitespace-nowrap pr-10">The New Arrival</span> <br/>
            <span className="text-coral-red">Nike</span> Shoes
            <p className="text-lg font-montserrat font-normal leading-8 text-slate-gray py-5
            sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
            </p>
            <button className="text-sm font-montserrat bg-coral-red text-white
            px-16 py-5 rounded-full">
                Submit
            </button>
            </h1>
        </div>
        <div className="max-lg:flex-col relative max-xl:padding pt-28 bg-hero">
            hello
        </div>
   
    </section>
  )
}

export default MyHero

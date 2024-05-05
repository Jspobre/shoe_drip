import { 
  Hero, 
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer } from './sections';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import MyHero from './sections/MyHero';
import PopularProductsTwo from './sections/PopularProductsTwo';

const App = () => (
  <main className="relative">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b">
      {/* <Hero /> */}
    <MyHero />
    </section>
    <section className="padding">
        {/* <PopularProducts/> */}
        <PopularProductsTwo />
    </section>
    <section className="padding">
        <SuperQuality/>
    </section>
    <section className="padding-x py-10">
       <Services/>
    </section>
    <section className="padding">
        <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
        <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
       <Footer/>
    </section>
  </main>
);

export default App
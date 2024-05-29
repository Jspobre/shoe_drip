// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import MyHero from './sections/MyHero';
import PopularProductsTwo from './sections/PopularProductsTwo';
import DetailsSection from './sections/DetailsSection'; // Make sure to create this component

const App = () => (
  <Router>
    <main className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section className="xl:padding-l wide:padding-r padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProductsTwo />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding">
              <SpecialOffers />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
            
          </>
        } />
        <Route path="/products/:id" element={<DetailsSection />}/>
      </Routes>
    </main>
  </Router>
);

export default App;

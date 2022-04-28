import React from 'react';
import { ScrollToTop } from '../components/scroll';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';
import landingPage from '../json/landingPage.json';
import About from '../parts/About';
// import Portfolio from '../parts/Portfolio';
import Experience from '../parts/Experience';
// import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero';

export default function LandingPage() {
  useScrollAnchor();

  return (
    <>
      <Header />
      <Hero />
      <main className='dark:bg-black'>
        <About data={landingPage.contacts} />
        <Experience data={landingPage.skills} />
        {/* <Portfolio data={landingPage.portfolios} /> */}
        {/* <Clients data={landingPage.clients} /> */}
        {/* <Blog data={landingPage.blogs} /> */}
        {/* <Contact /> */}
        <ScrollToTop />
      </main>
      {/* <Footer /> */}
    </>
  );
}

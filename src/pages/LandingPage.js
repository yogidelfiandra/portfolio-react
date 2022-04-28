import React from 'react';
import { ScrollToTop } from '../components/scroll';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';
import landingPage from '../json/landingPage.json';
import About from '../parts/About';
// import Clients from '../parts/Clients';
import Blog from '../parts/Blog';
import Contact from '../parts/Contact';
import Experience from '../parts/Experience';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Portfolio from '../parts/Portfolio';

export default function LandingPage() {
  useScrollAnchor();

  return (
    <>
      <Header />
      <Hero />
      <main className='dark:bg-black'>
        <About data={landingPage.contacts} />
        <Experience data={landingPage.skills} />
        <Portfolio data={landingPage.portfolios} />
        {/* <Clients data={landingPage.clients} /> */}
        <Blog data={landingPage.blogs} />
        <Contact />
        <ScrollToTop />
      </main>
      {/* <Footer /> */}
    </>
  );
}

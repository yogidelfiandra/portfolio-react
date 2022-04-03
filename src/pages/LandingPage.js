import React from 'react';
import About from '../parts/About';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Portfolio from '../parts/Portfolio';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

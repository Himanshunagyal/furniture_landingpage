import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Slide from '../components/Slide';

const Page = () => {
  return (
    <>
      <Hero />
      <main className="min-h-screen">
        <Grid />
        <Slide />
      </main>
      <Footer />
    </>
  );
};

export default Page;
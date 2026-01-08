import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Slide from '../components/Slide';
import EditorialSection from '@/components/EditorialSection';

const Page = () => {
  return (
    <>
      <Hero />
      <main className="min-h-screen">
        <Grid />
        <Slide />
        <EditorialSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;
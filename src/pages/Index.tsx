
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SessionsSection from '@/components/SessionsSection';
import CoursesSection from '@/components/CoursesSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SessionsSection />
          <CoursesSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;

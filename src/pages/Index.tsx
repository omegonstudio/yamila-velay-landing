
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SessionsSection from '@/components/SessionsSection';
import CoursesSection from '@/components/CoursesSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Universo Interior | Coaching Holístico y Conexión Cósmica</title>
        <meta name="description" content="Descubre tu conexión con el universo y transforma tu vida a través del coaching holístico, alineación energética y prácticas espirituales para tu bienestar integral." />
        <meta name="keywords" content="coaching holístico, alineación energética, conexión cósmica, espiritualidad, transformación personal, bienestar holístico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Universo Interior | Coaching Holístico y Conexión Cósmica" />
        <meta property="og:description" content="Descubre tu conexión con el universo y transforma tu vida a través del coaching holístico, alineación energética y prácticas espirituales para tu bienestar integral." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Universo Interior | Coaching Holístico y Conexión Cósmica" />
        <meta name="twitter:description" content="Descubre tu conexión con el universo y transforma tu vida a través del coaching holístico, alineación energética y prácticas espirituales para tu bienestar integral." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://universointerior.com" />
      </Helmet>

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

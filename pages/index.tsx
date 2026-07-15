import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useState, useEffect } from 'react';

// Import components
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import StatisticsSection from '@/components/StatisticsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import WorkflowSection from '@/components/WorkflowSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import PixieDust from '@/components/PixieDust';

// Import translations
import { translations } from '@/utils/translations';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('en');
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Helper function to get translated text
  const t = (key: keyof typeof translations[keyof typeof translations]) => translations[language][key] || key;

  useEffect(() => {
    // Initial theme detection
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Time for fade out effect
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Professional Structured Data (Schema.org JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fariz Nur Masyhuri",
    "jobTitle": "Software Engineer",
    "description": "Result-driven Software Engineer with over 4 years of experience in engineering scalable backend architectures, high-performance database schemas, and microservice architectures.",
    "gender": "Male",
    "nationality": "Indonesian",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandung",
      "addressRegion": "West Java",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://github.com/pais23",
      "https://www.linkedin.com/in/fariznur/",
      "https://www.instagram.com/paris.ssh/"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Backend Development",
      "Laravel",
      "CodeIgniter",
      "Lumen",
      "AdonisJS",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "MySQL",
      "Microservices",
      "REST API",
      "Database Optimization"
    ]
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Fariz Nur Masyhuri | Senior Software Engineer</title>
        <meta name="description" content="Result-driven Software Engineer with over 4 years of experience in engineering scalable backend architectures, high-performance database schemas, and microservices for government and enterprise clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Fariz Nur Masyhuri, Software Engineer, Backend Developer, Laravel, CodeIgniter, Next.js, React, Microservices, PostgreSQL, PHP Developer, Indonesia, Web Developer Portfolio" />
        <meta name="author" content="Fariz Nur Masyhuri" />

        {/* Open Graph Tags for recruiters sharing portfolio */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Fariz Nur Masyhuri | Senior Software Engineer" />
        <meta property="og:description" content="Explore portfolio case studies, years of experience, modern tech stacks, and development methodologies." />
        <meta property="og:url" content="https://ais-dev-rjsqdv7ofixsvck73nbbva-622225485913.asia-southeast1.run.app" />
        <meta property="og:site_name" content="Fariz Nur Masyhuri Portfolio" />
        <meta property="og:image" content="https://ais-dev-rjsqdv7ofixsvck73nbbva-622225485913.asia-southeast1.run.app/my-avatar.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="id_ID" />

        {/* Structured Data injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className='bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300 antialiased font-sans text-gray-800 dark:text-gray-100 selection:bg-teal-500 selection:text-white'> 
        {/* Loading Screen */}
        <LoadingScreen 
          loading={loading} 
          fadeOut={fadeOut} 
          translations={translations} 
          language={language} 
        />

        {/* Pixie Dust Cursor Trailing Particles */}
        <PixieDust />
        
        {/* Header with Navigation */}
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          language={language} 
          setLanguage={setLanguage} 
          translations={translations} 
        />
        
        {/* Profile Section */}
        <ProfileSection 
          translations={translations} 
          language={language} 
        />

        {/* Statistics section */}
        <StatisticsSection 
          translations={translations} 
          language={language} 
        />
        
        {/* Skills Section */}
        <SkillsSection 
          translations={translations} 
          language={language} 
        />

        {/* Experience Section */}
        <ExperienceSection 
          translations={translations} 
          language={language} 
        />
        
        {/* Portfolio Section */}
        <PortfolioSection 
          translations={translations} 
          language={language} 
        />

        {/* AI Workflow Section */}
        <WorkflowSection 
          translations={translations} 
          language={language} 
        />

        {/* Contact Section */}
        <ContactSection 
          translations={translations} 
          language={language} 
        />

        {/* Footer */}
        <Footer 
          translations={translations} 
          language={language} 
        />
      </main>
    </div>
  );
}

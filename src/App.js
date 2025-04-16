import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/JobSeekerSection';
import FeaturedJobsSection from './components/FeaturedJobsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <FeaturedJobsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
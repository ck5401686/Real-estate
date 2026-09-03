import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Smooth Scroll & Animations
import { initSmoothScroll, destroySmoothScroll, getLenis } from './animations/scrollAnimations';

// Global Components
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Pages
import { Home } from './pages/Home/Home';
import { Properties } from './pages/Properties/Properties';
import { PropertyDetail } from './pages/PropertyDetail/PropertyDetail';
import { Projects } from './pages/Projects/Projects';
import { Locations } from './pages/Locations/Locations';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { ScheduleVisit } from './pages/ScheduleVisit/ScheduleVisit';

// Scroll restoration component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  // Global favorites state (persisted to localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('maison_favorites');
      return saved ? JSON.parse(saved) : ['prop-worli-sea-face', 'prop-lutyens-bungalow'];
    } catch {
      return ['prop-worli-sea-face'];
    }
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maison_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to persist favorites to storage', e);
    }
  }, [favorites]);

  const handleToggleFavorite = (propertyId: string) => {
    setFavorites((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--dark-primary)] selection:bg-[var(--accent-gold)] selection:text-white">
        {/* Navigation Bar */}
        <Navbar favoritesCount={favorites.length} />

        {/* Dynamic Route Pages */}
        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/properties"
              element={
                <Properties
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/properties/:slug"
              element={
                <PropertyDetail
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-visit" element={<ScheduleVisit />} />
            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

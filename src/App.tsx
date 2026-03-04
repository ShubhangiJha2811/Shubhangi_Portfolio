import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { initGA, pageview } from './utils/analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SettingsPage from './pages/SettingsPage';
import ResumePage from './pages/ResumePage';

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics on mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    pageview(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <AnalyticsWrapper>
            <div className="min-h-screen">
              <Header />
              <main>
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </PageTransition>
              </main>
              <Footer />
            </div>
          </AnalyticsWrapper>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

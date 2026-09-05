import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Primary Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PurificationPage from './pages/PurificationPage';
import HardwarePage from './pages/HardwarePage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
        <ScrollToTop />
        
        {/* Fixed Vertical Left Sidebar */}
        <Sidebar />

        {/* Main Content Area - Shifted Right on Desktop */}
        <div className="lg:pl-72 flex flex-col min-h-screen transition-all duration-300">
          <main className="grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/purification" element={<PurificationPage />} />
              <Route path="/hardware" element={<HardwarePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

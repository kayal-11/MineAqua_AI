import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplet, Cpu, Menu, X, Activity, Layers, BrainCircuit, Users, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Purification', path: '/purification' },
    { name: 'Hardware', path: '/hardware' },
    { name: 'AI Architecture', path: '/ai' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'Impact', path: '/impact' },
    { name: 'Feasibility & Risks', path: '/feasibility' },
    { name: 'References', path: '/references' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl water-gradient flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Droplet className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-lg tracking-tight">MineAqua</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-cyan-100 text-cyan-700">AI</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">SIH 2026 • PS 26040</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 shadow-sm transition-all"
            >
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Live Monitoring</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 shadow-sm"
            >
              <Activity className="w-4 h-4" />
              <span>Open Monitoring Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

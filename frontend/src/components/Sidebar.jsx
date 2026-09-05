import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Activity, Filter, Cpu, History, User, Settings, Menu, X, Droplet, ShieldAlert, LogIn, UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: Activity },
    { name: 'Purification', path: '/purification', icon: Filter },
    { name: 'Hardware', path: '/hardware', icon: Cpu },
    { name: 'History', path: '/history', icon: History },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Top Header Toggle Bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-xs">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl water-gradient flex items-center justify-center text-white shadow-xs">
            <Droplet className="w-4 h-4 fill-white/20" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-base tracking-tight">MineAqua AI</span>
            <span className="text-[10px] text-cyan-600 block font-semibold">Smart Water Platform</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <Link
              to="/signin"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              Sign In
            </Link>
          ) : (
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs border border-cyan-300"
            >
              {user?.name ? user.name.charAt(0) : 'U'}
            </Link>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-hidden"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay for Mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
        />
      )}

      {/* Vertical Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 lg:w-72 bg-slate-900 text-white flex flex-col justify-between border-r border-slate-800 shadow-xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header & Brand */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl water-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Droplet className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-white text-lg tracking-tight">MineAqua</span>
                  <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-cyan-900 text-cyan-300 border border-cyan-700">AI</span>
                </div>
                <p className="text-[11px] text-cyan-400 font-semibold tracking-wide mt-0.5">
                  AI-Driven Smart Water Purification
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t border-slate-800" />

          {/* User Auth Quick Card in Sidebar */}
          <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
            {isAuthenticated ? (
              <Link to="/profile" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 group w-full">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {user?.name ? user.name.charAt(0) : 'U'}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold text-white block truncate group-hover:text-cyan-400 transition-colors">
                    {user?.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">{user?.role || 'Operator'}</span>
                </div>
              </Link>
            ) : (
              <Link
                to="/signin"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In / Sign Up</span>
              </Link>
            )}
          </div>

          {/* Navigation Links - Home, Dashboard, Hardware, History, Profile */}
          <nav className="space-y-1.5 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all group ${
                    active
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-md shadow-cyan-900/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-colors ${
                      active ? 'text-white' : 'text-slate-400 group-hover:text-cyan-400'
                    }`} />
                    <span>{item.name}</span>
                  </div>

                  {active && (
                    <span className="w-2 h-2 rounded-full bg-white shadow-xs animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom System Status & Demo Mode Card */}
        <div className="p-4 m-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">SYSTEM STATUS</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-400 block text-[10px]">AI Monitoring</span>
              <span className="font-semibold text-cyan-300">Active</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Power</span>
              <span className="font-semibold text-amber-300">Solar</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-700/60">
            <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-800/60 text-amber-300 text-[10px] leading-snug space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>DEMO MODE</span>
              </div>
              <p className="text-amber-200/90 text-[10px]">
                Sensor values are simulated until ESP32 hardware integration.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

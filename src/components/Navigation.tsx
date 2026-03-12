import React, { useState } from 'react';
import { Search, Globe, Bell, Menu, TrendingUp, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SubscribeModal } from './SubscribeModal';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.analysis'), path: '/analysis' },
    { name: t('nav.marketBriefs'), path: '/market-briefs' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-50">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-serif font-bold tracking-tight text-jpm-brown">K-Equity Analysis</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center border-b border-zinc-200 py-1">
              <Search size={16} className="text-zinc-400 mr-2" />
              <input 
                type="text" 
                placeholder={t('search.placeholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs w-32 focus:w-48 transition-all"
              />
            </form>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
                className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold text-zinc-500 hover:text-jpm-teal border border-zinc-100 hover:border-jpm-teal transition-all rounded-sm uppercase tracking-widest"
              >
                <Globe size={14} />
                {language === 'en' ? '한' : 'EN'}
              </button>

              <button 
                onClick={() => setIsSubscribeOpen(true)}
                className="p-1.5 text-zinc-400 hover:text-jpm-teal transition-all rounded-sm hover:bg-zinc-50"
                title={t('subscribe.button')}
              >
                <Mail size={18} />
              </button>

              <button className="md:hidden p-1.5 text-zinc-400">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-10 gap-8 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`h-full flex items-center text-[11px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                location.pathname === item.path 
                  ? 'text-jpm-teal' 
                  : 'text-zinc-500 hover:text-jpm-teal'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-jpm-teal" />
              )}
            </Link>
          ))}
        </div>
      </div>
      
      <SubscribeModal 
        isOpen={isSubscribeOpen} 
        onClose={() => setIsSubscribeOpen(false)} 
      />
    </nav>
  );
};

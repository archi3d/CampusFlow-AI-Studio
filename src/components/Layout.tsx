import React from 'react';
import { 
  Home, 
  Tag, 
  Gavel, 
  Mail, 
  Bookmark, 
  PlusCircle, 
  Bell, 
  User, 
  Search,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'listings', label: 'My Listings', icon: Tag },
    { id: 'bids', label: 'Bids', icon: Gavel },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'saved', label: 'Saved', icon: Bookmark },
  ];

  const mainNavLinks = [
    { id: 'books', label: 'Books' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'housing', label: 'Housing' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-outline-variant/10">
        <nav className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <span 
              className="text-xl font-bold text-primary font-headline tracking-tight cursor-pointer"
              onClick={() => setActiveTab('home')}
            >
              CampusFlow
            </span>
            <div className="hidden md:flex items-center gap-6">
              {mainNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-sm font-headline tracking-tight transition-colors ${
                    activeTab === link.id 
                      ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                      : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface-container-highest rounded-full px-4 py-1.5 gap-2 group focus-within:bg-white focus-within:ring-1 focus-within:ring-primary/30 transition-all">
              <Search className="text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search marketplace..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body"
              />
            </div>
            <button className="p-2 text-on-surface-variant hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <button 
              className="p-1 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setActiveTab('dashboard')}
            >
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
            </button>
            <button 
              className="md:hidden p-2 text-on-surface-variant"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:flex flex-col p-4 space-y-2 w-64 sticky top-16 h-[calc(100vh-64px)] bg-surface border-r border-outline-variant/10">
          <div className="px-4 py-6 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8-iTgWVuEvU4BgsIoHdQ3llPTKdL3WKMyFKlbNQqub1imbzSYs-5CHJF-lspzpoVUppREOscd7lKsgyD9ub8hUEu4Hm0hqjxCoOToCCgUKmghXAcmEks6jd5j2EjBRwp_TdBQKLoCCOa_WDwrfJ_G0_MSBxGRFNPjmfkMoon8lnRKWrFtf3QTrgWjAdYbqJ9E1Q7JFdbzQuHjjrmzNy3UH1xtDB2S8ieBL_JNlv7jXhFCPYamodUCT-AxiSlQ3F_QNuL2p_3h0t8K" 
                  alt="Student Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold text-primary font-headline">Student Hub</h2>
                <span className="text-xs text-slate-500">Verified Member</span>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-headline text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-200 hover:translate-x-1'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 px-2">
            <button className="w-full py-3 px-4 primary-gradient text-white rounded-full font-bold text-sm shadow-lg hover:scale-[0.98] active:scale-95 transition-transform flex items-center justify-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Post New Listing
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 lg:p-10"
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="w-full bg-surface-container-low mt-20 border-t border-outline-variant/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-4">
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="font-bold text-primary text-lg font-headline">CampusFlow</span>
                <p className="text-slate-500 text-xs">© 2024 CampusFlow Marketplace</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {['About School', 'Safety Guidelines', 'Terms of Service', 'Help Center'].map((link) => (
                  <a key={link} href="#" className="text-slate-500 hover:text-primary text-xs transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Navigation (Bottom) */}
      <nav className="lg:hidden fixed bottom-0 w-full glass-nav flex justify-around items-center py-3 border-t border-outline-variant/10 z-50">
        {navItems.slice(0, 2).map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-primary' : 'text-slate-400'}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
        <button className="flex flex-col items-center -mt-8">
          <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center text-white shadow-xl">
            <PlusCircle className="w-6 h-6" />
          </div>
        </button>
        {navItems.slice(3, 5).map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-primary' : 'text-slate-400'}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

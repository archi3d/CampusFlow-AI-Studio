import React from 'react';
import { Search, Check, Verified, MessageCircle, Heart, Bolt } from 'lucide-react';

export default function Marketplace() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Filters Section */}
      <section className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8">
          <h2 className="font-headline text-xl font-extrabold text-primary tracking-tight">Marketplace Feed</h2>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Categories</h3>
            <div className="flex flex-col gap-2">
              {['Calculators', 'Past Questions', 'Gadgets'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                  <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
                    cat === 'Past Questions' ? 'border-2 border-primary bg-primary' : 'border-outline-variant bg-white group-hover:border-primary'
                  }`}>
                    {cat === 'Past Questions' && <Check className="text-white w-3 h-3" />}
                  </div>
                  <span className={`text-sm transition-colors ${
                    cat === 'Past Questions' ? 'font-bold text-primary' : 'font-medium text-on-surface-variant group-hover:text-primary'
                  }`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Department */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Department</h3>
            <select className="w-full bg-surface-container-highest border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/30 outline-none">
              <option>Engineering</option>
              <option>Arts & Humanities</option>
              <option>Science & Tech</option>
              <option>Business School</option>
            </select>
          </div>

          {/* Level */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Academic Level</h3>
            <div className="flex flex-wrap gap-2">
              {['100L', '200L', '300L', '400L'].map((level) => (
                <button 
                  key={level}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    level === '100L' 
                      ? 'bg-primary-container text-white' 
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Price Range</h3>
              <span className="text-xs font-bold text-primary">$0 - $500</span>
            </div>
            <input 
              type="range" 
              className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Item Card 1 */}
          <div className="group bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col hover:-translate-y-1 transition-transform">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/calc/600/400" 
                alt="Calculator" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Bolt className="w-3 h-3 fill-current" />
                  Urgent Sale
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <button className="bg-white/80 backdrop-blur-md p-1.5 rounded-full text-primary hover:text-error transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline font-bold text-primary group-hover:text-primary-container transition-colors leading-tight">TI-Nspire CX II CAS Graphing Calculator</h3>
                <span className="font-headline font-extrabold text-primary">$120</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-bold text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Verified className="w-3 h-3 fill-current" />
                  Verified Seller
                </span>
                <span className="text-[11px] font-medium text-on-surface-variant">Engineering Dept.</span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  <span className="text-xs font-medium text-on-surface-variant">Alex M.</span>
                </div>
                <button className="bg-primary-container text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-md transition-shadow flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" />
                  Chat
                </button>
              </div>
            </div>
          </div>

          {/* Item Card 2: Wide */}
          <div className="md:col-span-2 group bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col md:flex-row hover:-translate-y-1 transition-transform">
            <div className="relative w-full md:w-2/5 h-64 md:h-full overflow-hidden">
              <img 
                src="https://picsum.photos/seed/physics/800/600" 
                alt="Physics Bundle" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Physics Bundle</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-headline font-bold text-lg text-primary leading-tight">Complete PHYS 101 - 301 Past Question Bundle (2018-2023)</h3>
                  <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">Includes handwritten notes, solved practical exams, and the most frequent exam patterns for the past 5 years.</p>
                </div>
                <span className="font-headline font-extrabold text-xl text-primary">$45</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[11px] font-medium bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Science Dept.</span>
                <span className="text-[11px] font-medium bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">100-300L</span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim"></div>
                  <div>
                    <span className="block text-xs font-bold text-on-surface">Sarah Peterson</span>
                    <span className="block text-[10px] text-on-secondary-container font-bold flex items-center">
                      <Verified className="w-2 h-2 mr-1 fill-current" />
                      Trusted Seller
                    </span>
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact Seller
                </button>
              </div>
            </div>
          </div>

          {/* More cards... */}
          {[
            { title: 'Dell Latitude 7490 - Student Ready', price: '$320', dept: 'Computer Science', level: '400L', seed: 'laptop' },
            { title: 'Advanced Organic Chemistry (Vol. 1)', price: '$25', dept: 'Chemistry Dept.', level: '200L', seed: 'chem' },
            { title: 'General Studies (GST) 101 Notes', price: '$10', dept: 'General Dept.', level: '100L', seed: 'notes' }
          ].map((item) => (
            <div key={item.title} className="group bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col hover:-translate-y-1 transition-transform">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${item.seed}/600/400`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-primary leading-tight">{item.title}</h3>
                  <span className="font-headline font-extrabold text-primary">{item.price}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-medium text-on-surface-variant">{item.dept}</span>
                  <span className="text-[11px] text-on-surface-variant">• {item.level}</span>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                    <span className="text-xs font-medium text-on-surface-variant">User</span>
                  </div>
                  <button className="bg-primary-container text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-md transition-shadow flex items-center gap-2">
                    <MessageCircle className="w-3 h-3" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

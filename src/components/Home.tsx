import React from 'react';
import { Search, Verified, MapPin, ArrowRight, Star, Bookmark, Check, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-16 rounded-xl overflow-hidden min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/campus/1920/1080" 
            className="w-full h-full object-cover" 
            alt="Campus"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded-full mb-6 backdrop-blur-md">
            <Verified className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold tracking-wider uppercase">Verified Campus Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white leading-tight mb-6 tracking-tight">
            Buy, Sell, and Hire <span className="text-secondary-fixed">on Campus.</span>
          </h1>
          <p className="text-lg text-blue-100/80 font-body mb-8 leading-relaxed">
            The exclusive marketplace for verified students. Find everything from textbooks to design services right at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow flex items-center bg-white rounded-full p-1.5 ambient-shadow">
              <div className="flex items-center px-4 gap-2 text-on-surface-variant flex-shrink-0 border-r border-outline-variant/30">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Near me</span>
              </div>
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full bg-transparent border-none focus:ring-0 text-sm px-4"
              />
              <button className="primary-gradient text-white px-8 py-2.5 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Categories */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Discovery Hub</h2>
            <p className="text-on-surface-variant mt-1">Explore our curated student-led categories</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
          {/* Marketplace Main */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all cursor-pointer relative overflow-hidden ambient-shadow border border-white/50">
            <div className="relative z-10">
              <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Marketplace</span>
              <h3 className="text-4xl font-headline font-black text-primary mb-4 leading-tight">Essential<br/>Gear.</h3>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Textbooks', 'Electronics', 'Clothing'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-surface-container rounded-full text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/gear/600/600" 
              className="absolute right-0 bottom-0 w-2/3 h-2/3 object-contain object-right-bottom opacity-20 group-hover:opacity-40 transition-opacity translate-x-10 translate-y-10" 
              alt="Gear"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Service Hub */}
          <div className="md:col-span-2 bg-primary-container rounded-xl p-8 flex items-center justify-between group hover:translate-y-[-4px] transition-transform cursor-pointer relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Service Hub</h3>
              <p className="text-blue-100/60 text-sm max-w-[200px]">Tutors, Repairs, & Creative Design from your peers.</p>
              <button className="mt-4 text-secondary-fixed text-sm font-bold flex items-center gap-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-32 h-32 bg-secondary-fixed/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary-fixed">design_services</span>
            </div>
          </div>
          {/* Small Category 1 */}
          <div className="bg-tertiary-fixed rounded-xl p-6 flex flex-col justify-between group hover:translate-y-[-4px] transition-transform cursor-pointer ambient-shadow">
            <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-3xl">home_work</span>
            <div>
              <h4 className="text-on-tertiary-fixed font-headline font-bold">Sub-leasing</h4>
              <p className="text-on-tertiary-fixed-variant/70 text-xs mt-1">Housing for the summer</p>
            </div>
          </div>
          {/* Small Category 2 */}
          <div className="bg-secondary-container rounded-xl p-6 flex flex-col justify-between group hover:translate-y-[-4px] transition-transform cursor-pointer ambient-shadow">
            <span className="material-symbols-outlined text-on-secondary-container text-3xl">restaurant</span>
            <div>
              <h4 className="text-on-secondary-container font-headline font-bold">Food & Meals</h4>
              <p className="text-on-secondary-container/70 text-xs mt-1">Campus-made delights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Top Verified Students */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-headline font-bold text-primary">Top Curators</h2>
            <button className="text-primary text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Marcus Chen', role: 'Top-rated Math Tutor', rating: '4.9', reviews: '124', seed: 'marcus' },
              { name: 'Sarah Jenkins', role: 'Electronics & Tech', rating: '5.0', reviews: '82', seed: 'sarah' },
              { name: 'Leo Rodriguez', role: 'Graphic Designer', rating: '4.8', reviews: '45', seed: 'leo' }
            ].map((user) => (
              <div key={user.name} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="relative">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${user.seed}`} 
                    className="w-12 h-12 rounded-full object-cover" 
                    alt={user.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-0.5 border-2 border-white">
                    <Check className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">{user.name}</h4>
                  <p className="text-xs text-on-surface-variant">{user.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-amber-500 fill-current" />
                    <span className="text-[10px] font-bold">{user.rating} ({user.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Urgent Sales */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-headline font-bold text-primary">Urgent Flash Deals</h2>
              <span className="animate-pulse bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Live Now</span>
            </div>
            <button className="text-primary text-xs font-bold hover:underline">View All Listings</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'MacBook Pro 14" M1', price: '$850', desc: 'Great condition, only used for 1 semester. Includes charger and original box.', tag: 'Urgent: Moving Out', seed: 'laptop' },
              { title: 'Bio Engineering Bundle', price: '$120', desc: 'Set of 4 essential textbooks for BIO201 and BIO202. Minimal highlighting.', tag: 'Limited Time', seed: 'books' }
            ].map((listing) => (
              <div key={listing.title} className="bg-white rounded-xl overflow-hidden ambient-shadow group">
                <div className="relative h-48">
                  <img 
                    src={`https://picsum.photos/seed/${listing.seed}/800/450`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={listing.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-tertiary-fixed/90 backdrop-blur-sm text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    {listing.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                    <Bookmark className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-primary">{listing.title}</h4>
                    <span className="text-secondary font-black text-lg">{listing.price}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">{listing.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-[11px] text-on-surface-variant font-medium">Added 2h ago</span>
                    </div>
                    <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-primary-container transition-colors">
                      Make Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

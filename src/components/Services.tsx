import React from 'react';
import { Verified, Star, Clock, Laptop, Languages, Camera, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">Service Hub Directory</h1>
        <p className="text-on-surface-variant max-w-2xl">Find verified student professionals for your next project or academic hurdle. Curated by the community, for the community.</p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {['All Services', 'Tutors', 'UI/UX Designers', 'Technicians', 'Photography'].map((filter) => (
          <button 
            key={filter}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
              filter === 'All Services' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Instant Request Highlight */}
        <div className="md:col-span-12 lg:col-span-4 bg-primary-container p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold mb-4 uppercase tracking-wider">Instant Request</span>
            <h2 className="text-2xl font-bold text-white font-headline leading-tight mb-4">"I need a 300L Thermodynamics tutor tonight"</h2>
            <div className="flex items-center gap-2 mb-8">
              <Clock className="w-4 h-4 text-secondary-fixed" />
              <span className="text-blue-100/70 text-sm">Posted 14m ago</span>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="text-white">
              <p className="text-xs opacity-70">Budget</p>
              <p className="text-xl font-bold">$45/hr</p>
            </div>
            <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Bid Now</button>
          </div>
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Featured Providers */}
        {[
          { name: 'Marcus Chen', role: 'UI/UX Designer', rate: '$60', rating: '4.9', reviews: '124', seed: 'marcus' },
          { name: 'Sarah Jenkins', role: 'Engineering Tutor', rate: '$35', rating: '5.0', reviews: '82', seed: 'sarah' }
        ].map((provider) => (
          <div key={provider.name} className="md:col-span-6 lg:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="relative">
                <img 
                  src={`https://i.pravatar.cc/150?u=${provider.seed}`} 
                  className="w-16 h-16 rounded-xl object-cover" 
                  alt={provider.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 border-2 border-white">
                  <Verified className="w-3 h-3 fill-current" />
                  Verified
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">Starting at</p>
                <p className="text-2xl font-bold text-primary font-headline">{provider.rate}<span className="text-sm font-normal">/hr</span></p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold font-headline mb-1">{provider.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{provider.role}</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-current" />
                <span className="font-bold text-sm">{provider.rating}</span>
                <span className="text-on-surface-variant text-sm">({provider.reviews} reviews)</span>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-full bg-surface-container-high text-primary font-bold text-sm hover:bg-surface-container-highest transition-colors">
              {provider.role.includes('Designer') ? 'View Portfolio' : 'Book Session'}
            </button>
          </div>
        ))}
      </div>

      {/* Recent Service Listings */}
      <div className="mb-12">
        <h2 className="text-xl font-bold font-headline mb-6">Recent Service Listings</h2>
        <div className="bg-surface-container-low rounded-xl overflow-hidden">
          {[
            { title: 'PC & Mac Hardware Repair', provider: 'Liam O\'Sullivan', dept: 'Engineering Dept', icon: Laptop, time: 'Under 2 hours', price: '$20+' },
            { title: 'Spanish Translation & Tutoring', provider: 'Elena Rodriguez', dept: 'Arts & Humanities', icon: Languages, time: 'Instant', price: '$25+' },
            { title: 'Graduation Portrait Session', provider: 'Jordan Wu', dept: 'Media Arts', icon: Camera, time: '1 day', price: '$120+' }
          ].map((service) => (
            <div key={service.title} className="flex flex-col md:flex-row md:items-center justify-between p-5 hover:bg-surface-container transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">{service.title}</h4>
                  <p className="text-xs text-on-surface-variant">{service.provider} • {service.dept}</p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant">Response Time</p>
                  <p className="text-sm font-medium">{service.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

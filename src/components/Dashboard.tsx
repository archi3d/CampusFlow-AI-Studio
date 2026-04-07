import React from 'react';
import { Verified, Star, Wallet, Calendar, Gavel, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Profile Header & Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Alex Chen</h1>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">
              <Verified className="w-3 h-3 fill-current" />
              Verified Student
            </span>
          </div>
          <p className="text-on-surface-variant max-w-xl leading-relaxed">
            Senior Economics Major at Metro University. Top-rated campus tech support and rare book curator. Member since 2022.
          </p>
        </div>
        
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-xl ambient-shadow">
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider block mb-1">Trust Score</span>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-primary">4.9</span>
              <span className="text-secondary font-medium mb-1">/ 5.0</span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl ambient-shadow">
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider block mb-1">Wallet Balance</span>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-primary">$428</span>
              <span className="text-on-tertiary-container font-medium mb-1">USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Listings */}
        <div className="md:col-span-2 p-8 bg-white rounded-xl ambient-shadow flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-primary font-headline">My Listings</h3>
            <button className="text-primary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-surface-container">
                <img 
                  src="https://picsum.photos/seed/books/800/450" 
                  alt="Textbook"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-on-surface mb-1">Advanced Macroeconomics</h4>
              <div className="flex justify-between items-center">
                <span className="text-secondary font-bold">$45.00</span>
                <span className="text-xs px-2 py-1 bg-surface-container-high rounded-full">3 Bids</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-surface-container">
                <img 
                  src="https://picsum.photos/seed/monitor/800/450" 
                  alt="Monitor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-on-surface mb-1">27" Dell UltraSharp Monitor</h4>
              <div className="flex justify-between items-center">
                <span className="text-secondary font-bold">$180.00</span>
                <span className="text-xs px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full">Urgent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="p-8 bg-primary-container text-on-primary-container rounded-xl flex flex-col justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wallet className="w-5 h-5" />
              <h3 className="font-bold font-headline">Wallet Summary</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Available Credits</span>
                <span className="font-bold text-xl">$142.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Pending Payout</span>
                <span className="font-bold text-xl">$285.50</span>
              </div>
            </div>
          </div>
          <button className="w-full py-3 bg-white text-primary font-bold rounded-full mt-8 hover:bg-surface-container-lowest transition-colors">
            Withdraw Earnings
          </button>
        </div>

        {/* Active Bookings & Bids */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-xl ambient-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary font-headline">Active Bookings</h3>
              <Calendar className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-surface-container-low rounded-lg flex justify-between items-center hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div>
                    <p className="font-bold text-sm">Python Tutoring</p>
                    <p className="text-xs text-on-surface-variant">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary">Confirmed</span>
              </div>
              <div className="p-4 bg-surface-container-low rounded-lg flex justify-between items-center hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
                  <div>
                    <p className="font-bold text-sm">Bike Repair Service</p>
                    <p className="text-xs text-on-surface-variant">Oct 24, 10:00 AM</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-on-tertiary-container">In Progress</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-xl ambient-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary font-headline">Incoming Bids</h3>
              <Gavel className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-sm">Dorm Cleaning Service</p>
                  <span className="text-primary font-bold">$35.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://i.pravatar.cc/150?u=sam" 
                      alt="Bidder" 
                      className="w-6 h-6 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs text-on-surface-variant">Sam R. • 4.8★</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">Accept</button>
                    <button className="px-3 py-1 border border-outline-variant text-xs font-bold rounded-full">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

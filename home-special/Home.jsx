import React from 'react';
import Header from './components/Header';
import SecondaryStrip from './components/SecondaryStrip';
import PromoFloor from './components/PromoFloor';
import FeedTab from './components/FeedTab';
import ProductFeed from './components/ProductFeed';
import BottomNav from './components/BottomNav';

function Home() {
  return (
    <div className="mx-auto w-[375px] min-h-[762px] bg-[#F5F6FA] relative overflow-hidden flex flex-col font-sans">
      <div className="flex-none z-10 bg-white">
        <Header />
        <SecondaryStrip />
      </div>

      <div className="flex-1 overflow-y-auto pb-[90px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <PromoFloor />
        <FeedTab />
        <ProductFeed />
      </div>

      <BottomNav />
    </div>
  );
}

export default Home;
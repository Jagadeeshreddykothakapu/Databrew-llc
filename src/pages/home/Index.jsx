import React from 'react';

// section components
import Banner from './BannerSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import BottomBannerSection from './BottomBannerSection';
import Location from './Location';

export default function Index() {
  return (
    <>
      <Banner />
      <AboutSection />
     <ServiceSection /> 
     <Location/>
      
      <BottomBannerSection />
    </>
  )
}

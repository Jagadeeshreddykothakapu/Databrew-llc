import React from 'react';

// components
import Banner from "./BannerSection";
import BottomBanner from "./BottomBannerSection";
import ServiceOverview from "./ServiceOverview";
import WhyChooseUse from './WhyChooseUs';


export default function Index() {
  return (
    <>
      <Banner />
      <ServiceOverview />
      <WhyChooseUse/>
      <BottomBanner />
    </>
  )
}

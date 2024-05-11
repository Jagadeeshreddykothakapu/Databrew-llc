import React from 'react';

import BannerSection from './BannerSection';
import BottomBannerSection from './BottomBannerSection';
import ServiceOverview from "./ServiceOverview";

export default function Index() {
  return (
    <>
      <BannerSection />
      <ServiceOverview/>
      <BottomBannerSection />
    </>
  )
}

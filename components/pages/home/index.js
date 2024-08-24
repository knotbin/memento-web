import Ribbon from '@/components/common/Ribbon';

import HeroSection from './sections/HeroSection';
import IntroFeaturesSection from './sections/IntroFeaturesSection';

import config from '@/data/config';

export default function HomePage(props) {
  return (
    <>
      <HeroSection {...props} />
      <IntroFeaturesSection />
    </>
  );
}

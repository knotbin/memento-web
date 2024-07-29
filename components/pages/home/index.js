import Ribbon from '@/components/common/Ribbon';

import HeroSection from './sections/HeroSection';
import IntroFeaturesSection from './sections/IntroFeaturesSection';

import config from '@/data/config';

export default function HomePage(props) {
  return (
    <>
      <Ribbon onClick={() => window.open(config.links.download)}>Memento is coming soon. Pre-order it on the App Store.</Ribbon>
      <HeroSection {...props} />
      <IntroFeaturesSection />
    </>
  );
}

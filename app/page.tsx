'use client'
import { useEffect, useState } from 'react';
import AccessibilityMenu from './ui/AccessibilityMenu'
import HeaderTitle from './ui/HeaderTitle'
import HeroSection from './ui/HeroSection'
import HeaderNav from './ui/HeaderNav'
import IntroduceSection from './ui/IntroduceSection'
import FindUs from './ui/FindUs'
import ServicesSection from './ui/ServicesSection'
import CareSection from './ui/CareSection'
import ContactSection from './ui/ContactSection'
import Footer from './ui/Footer'

export default function HomePage() {
  const [remainingHeight, setRemainingHeight] = useState(0);

  useEffect(() => {
    // Obtenir les éléments HeaderTitle et HeaderNav
    const headerTitle = document.querySelector('.header-title');
    const headerNav = document.querySelector('.header-nav');

    if (headerTitle && headerNav) {
      const headerTitleHeight = headerTitle.getBoundingClientRect().height;
      const headerNavHeight = headerNav.getBoundingClientRect().height;

      // Calculer la hauteur totale de HeaderTitle et HeaderNav
      const totalHeaderHeight = headerTitleHeight + headerNavHeight;

      // Calculer la hauteur restante du viewport
      const viewportHeight = window.innerHeight;
      const heightToUse = viewportHeight - totalHeaderHeight;

      // Mettre à jour l'état avec la hauteur restante
      setRemainingHeight(heightToUse);
    }
  }, []);
  return (
    <div>
      <AccessibilityMenu />
      <div className="header-title">
        <HeaderTitle />
      </div>
      <div className="header-nav sticky top-0 z-50">
        <HeaderNav />
      </div>
      <main>
        <HeroSection remainingHeight={remainingHeight} />
        <IntroduceSection />
        <FindUs />
        <ServicesSection />
        <CareSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

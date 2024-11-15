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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSizeMode, setFontSizeMode] = useState("normal");


  useEffect(() => {
    const headerTitle = document.querySelector('.header-title');
    const headerNav = document.querySelector('.header-nav');
    if (headerTitle && headerNav) {
      const headerTitleHeight = headerTitle.getBoundingClientRect().height;
      const headerNavHeight = headerNav.getBoundingClientRect().height;
      const totalHeaderHeight = headerTitleHeight + headerNavHeight;
      const viewportHeight = window.innerHeight;
      const heightToUse = viewportHeight - totalHeaderHeight;
      setRemainingHeight(heightToUse);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const toggleDarkMode = (mode: string) => {
    setIsDarkMode(mode === 'dark');
  };
  useEffect(() => {
    const fontSize = fontSizeMode === "normal" ? "100%" : "120%";
    document.documentElement.style.fontSize = fontSize;
  }, [fontSizeMode]);
  const setNormalFontSize = () => setFontSizeMode("normal");
  const setLargeFontSize = () => setFontSizeMode("large");

  return (
    <div>
      <AccessibilityMenu
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        fontSizeMode={fontSizeMode}
        setNormalFontSize={setNormalFontSize}
        setLargeFontSize={setLargeFontSize}
      />
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
        <CareSection isDarkMode={isDarkMode} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

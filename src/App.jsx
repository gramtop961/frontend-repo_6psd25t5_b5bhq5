import React from 'react'
import HeroSection from './components/HeroSection'
import CollectionsSection from './components/CollectionsSection'
import GiftingSection from './components/GiftingSection'
import AboutContactSection from './components/AboutContactSection'

function App() {
  return (
    <div className="font-sans bg-[#F5EDE3] text-[#4F4F4F]">
      {/* Hero */}
      <HeroSection />
      {/* Collections (Indian Stories + Floral) */}
      <CollectionsSection />
      {/* Gifting + Crafted to Last */}
      <GiftingSection />
      {/* About + Contact & Footer */}
      <AboutContactSection />
    </div>
  )
}

export default App

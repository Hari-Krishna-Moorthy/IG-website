export const metadata = {
  title: 'Home',
  description: 'Innovation Geeks - Unlocking Your Digital Potential',
  kewwords: 'Innovation Geeks, IG'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FancyTestimonialSliderPage from '@/app/fancy-testimonials-slider/page'
import Team from '@/components/our-team'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}

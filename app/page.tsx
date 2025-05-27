import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import WhoIsItFor from "@/components/who-is-it-for"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <HeroSection />
      <WhyChooseUs />
      <WhoIsItFor />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  )
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import PropertiesCarousel from '@/components/PropertiesCarousel';
import Pricing from '@/components/Pricing';
import Locations from '@/components/Locations';
import Amenities from '@/components/Amenities';
import Advantage from '@/components/Advantage';
import Testimonials from '@/components/Testimonials';
import EMICalculator from '@/components/EMICalculator';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-deep-forest text-white selection:bg-yellow-500/30 selection:text-yellow-400 font-sans">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Spacer to give room for the floating Stats card overlap since we removed mt-20 from wrapper */}
      <div className="h-20 bg-deep-forest w-full z-20 relative"></div>
      
      <PropertiesCarousel />
      <Pricing />
      <Locations />
      <Amenities />
      <Advantage />
      <Testimonials />
      <EMICalculator />
      <Process />
      <FAQ />
      <Contact />
      <FloatingCTA />
      <Footer />
    </main>
  );
}

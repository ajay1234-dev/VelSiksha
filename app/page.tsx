import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tutor from "@/components/Tutor";
import Courses from "@/components/Courses";
import FeaturesAndTimings from "@/components/FeaturesAndTimings";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tutor />
        <Courses />
        <FeaturesAndTimings />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

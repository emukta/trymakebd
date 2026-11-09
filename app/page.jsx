import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Showcase />
        <Process />
        <WhyUs />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </SmoothScroll>
  );
}

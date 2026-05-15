import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Suites from '@/components/Suites';
import Arraial from '@/components/Arraial';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import CtaFinal from '@/components/CtaFinal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <Navbar />
            <Hero />
            <Features />
            <Suites />
            <Arraial />
            <Testimonials />
            <Faq />
            <CtaFinal />
            <Contact />
            <Footer />
            <WhatsAppFloat />
            <ScrollReveal />
        </>
    );
}

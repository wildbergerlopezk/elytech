import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutSection from './components/aboutSection/AboutSection';
import ValuesSection from './components/valuesSection/ValuesSection';
import WhySection from './components/whySection/WhySection';
import ServicesSection from './components/serviceSection/ServiceSection';
import ContactSection from './components/contactSection/ContactSection';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ValuesSection />
        <WhySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
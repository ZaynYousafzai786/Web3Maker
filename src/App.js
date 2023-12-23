import Future from '../src/components/Future'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHead from './components/NavbarHead';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Section2 from './components/Section2';


function App() {
  return (
    <>

      <NavbarHead />
      <HeroSection />
      <Section2 />
      <Future />
      <Footer />

    </>
  );
}

export default App;

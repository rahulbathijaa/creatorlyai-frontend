import Image from "next/image";
import Header from './components/Header';
import Features from './components/Features';
import Examples from './components/Examples';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
       <Header />
       <Features />
       <Examples /> 
       <Footer />
    </main>
  );
}

import Image from "next/image";
import Header from './components/Header';
import Features from './components/Features';
import Examples from './components/Examples';

export default function Home() {
  return (
    <main>
       <Header />
       <Features />
       <Examples /> 
    </main>
  );
}

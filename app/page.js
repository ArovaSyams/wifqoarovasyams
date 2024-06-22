import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Portfolio from '../components/Portfolio'
import Certification from '@/components/Certification';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Aboutme/>
      <Portfolio/>
      <Certification/>
      <Experience/>
    </main>
  );
}

import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Portfolio from '../components/Portfolio'
import Certification from '@/components/Certification';
import Experience from '@/components/Experience';
import Summary from '@/components/Summary';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Summary/>
      <Aboutme/>
      <Portfolio/>
      <Certification/>
      <Experience/>
    </main>
  );
}

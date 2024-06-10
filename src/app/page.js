import About from '@containers/About';
import Contact from '@containers/Contact';
import Experience from '@containers/Experience';
import Footer from '@containers/Footer';
import Home from '@containers/Home';
import Portfolio from '@containers/Portfolio';
export default function Main() {
  return (
    <div className="">
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

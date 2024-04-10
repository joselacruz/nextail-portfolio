import About from '@containers/About';
import Contact from '@containers/Contact';
import Experience from '@containers/Experience';
import Home from '@containers/Home';
import Portfolio from '@containers/Portfolio';
export default function Main() {
  return (
    <div className="max-w-screen-2xl ">
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testmonials";
import Traffic from "./components/Traffic";
import Services from "./components/Services";
import BackToTop from "./services/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Traffic />
      <Blog />
      <Testimonial />
      <Project />
      <Pricing />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

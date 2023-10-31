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
import Faq from "./components/Faq";
import Features from "./components/Features";
import Teams from "./components/Teams";
import { Fragment } from "react";
import Drawer from "./mobile/Drawer";
import useToggle from "./Hooks/useToggle";

function App() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <Fragment>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <Hero />
      <Services />
      <Features />
      <Traffic />
      <Testimonial />
      <Teams />
      <Pricing />
      <Faq />
      <Blog />
      <Project />
      <Footer />
      <BackToTop />
    </Fragment>
  );
}

export default App;

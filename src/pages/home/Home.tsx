import NavBar from "./NavBar";
import BookingSteps from "./BookingSteps";
import HeroSection from "./HeroSection";
import NewsLetter from "./NewsLetter";
import Partners from "./Partners";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TopDestination from "./TopDestination";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <TopDestination />
      <BookingSteps />
      <Testimonials />
      <Partners />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;

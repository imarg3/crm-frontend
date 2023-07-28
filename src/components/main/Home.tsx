import NavBar from "./parts/NavBar";
import BookingSteps from "./parts/BookingSteps"
import HeroSection from "./parts/HeroSection"
import NewsLetter from "./parts/NewsLetter"
import Partners from "./parts/Partners"
import Services from "./parts/Services"
import Testimonials from "./parts/Testimonials"
import TopDestination from "./parts/TopDestination"
import Footer from "./parts/Footer";


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
    )
}

export default Home
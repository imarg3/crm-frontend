import BookingSteps from "../parts/BookingSteps"
import HeroSection from "../parts/HeroSection"
import NewsLetter from "../parts/NewsLetter"
import Partners from "../parts/Partners"
import Services from "../parts/Services"
import Testimonials from "../parts/Testimonials"
import TopDestination from "../parts/TopDestination"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            <Partners />
            <NewsLetter />
        </>
    )
}

export default Home
import Carsoul from "../components/Carsoul"
import FeaturedCohorts from "../components/FeaturedProds"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Podcasts from "../components/Podcasts"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

export default function HomePage() { 
    return<div className="relative"> 
        <Navbar className=""/>
        <Hero/>
        <Carsoul/>
        <FeaturedCohorts/>
        <Podcasts/>
        <FAQ/>
        <Footer/>
    </div>
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Slider from "../container/Home/Slider";
import Hero from "../container/Home/Header";
import Deals from "../container/Home/Deals";
import PopularCategory from "../container/Home/PopularCategory";

export default function Home() {

    return (
        <>
            <Navbar/>
            <div>
                <Slider />
                <Hero />
                <Deals />
                <PopularCategory />
            </div>
            <Footer />
        </>
    )
}



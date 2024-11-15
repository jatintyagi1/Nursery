import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Slider from "../container/Home/Slider";
import Hero from "../container/Home/Header";
import Deals from "../container/Home/Deals";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                <Slider />
                <Hero />
                <Deals />
            </div>
            <Footer />
        </>
    )
}



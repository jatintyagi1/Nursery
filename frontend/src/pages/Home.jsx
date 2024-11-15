import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Slider from "../container/Home/Slider";
import Deals from "../container/Home/Deals";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                <Slider />
                <Deals />
            </div>
            <Footer />
        </>
    )
}



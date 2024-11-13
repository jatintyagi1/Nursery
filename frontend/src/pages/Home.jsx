import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../container/Home/Slider";


export default function Home() {
    return (
        <>
            <Navbar />
            <div style={{ height: '100vh'}}>
                <Slider />
            </div>
            <Footer />
        </>
    )
}



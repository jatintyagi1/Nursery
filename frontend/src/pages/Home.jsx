import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';

import Slider from '../container/Slider';
import Headers from '../container/Header';
import Deals from '../container/Deals';
import PopularCategory from '../container/PopularCategory';

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <Slider />
                <Headers />
                <Deals />
                <PopularCategory />
            </div>
            <Footer />
        </>
    )
};


export default Home;
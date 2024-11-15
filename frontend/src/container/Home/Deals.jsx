import '../../styles/Home/Deals.css'

export default function Deals() {

    // section left
    const image1 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443ecd0c5dcaf96dbd4f23/flowering-plants_new-864x432.png';
    const image2 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443ee10c5dcaf96dbd5021/succulents-2--432x432.png';
    const image3 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443ef453fd07f98c29875d/low-maintenance-432x432.png';

    // section right
    const image4 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443f4178224d7aae14c0f5/indoor-plants_new-864x432.png';
    const image5 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443f1576444ef9a4fb7d2e/bonsai-plants-432x432.png';
    const image6 = 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/64443f2c76444ef9a4fb7ed5/herbs-432x432.png';

    return (
        <div className="deals">
            <h1>Top Lightening Deals</h1>
            <div className='deals-container'>
                <section className="deals-left">
                    <img src={image1} alt="image" />
                    <div className='deals-child-image'>
                        <img src={image2} alt="image" />
                        <img src={image3} alt="image" />
                    </div>
                </section>

                <section className="deals-right">
                    <img src={image4} alt="image" />
                    <div className='deals-child-image'>
                        <img src={image5} alt="image" />
                        <img src={image6} alt="image" />
                    </div>
                </section>
            </div>
        </div>
    )
}
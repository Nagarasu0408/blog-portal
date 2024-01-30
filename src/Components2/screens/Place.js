
import { useRef, useState } from 'react';
import { PlaceCard, PlaceData } from './PlaceData';
import PhotoGrid from './PhotoGallery';
import NavBar from '../NavBar';
import Footer from './Footer';
import Carousel_View from './Carosual';
import GoToTop from './GotoTop';
import NEWS from './NewsCrad';



function Place() {
    const ref = useRef(null);
    const Click = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const [index, setIndex] = useState(0);
    let PlaceInfo = PlaceData[index];
    const hasNext = index < PlaceData.length - 1;
    const handleImageClick = (newIndex) => {
        setIndex(newIndex);
    };
    return (<>
        <div className='Place_Body'>
            <NavBar />
            <button className='btn' onClick={Click}><svg><rect></rect></svg>Let's Go</button>
            <Carousel_View />
            <div className='Title'><p>Places</p></div>
            <div className="FullView" ref={ref}>
                <div className="card">
                    <img src={PlaceInfo.Image_url} alt='image' onClick={() => hasNext ? setIndex(index + 1) : setIndex(0)} />
                    <div className="Image">
                        {PlaceData.map((event, i) => (
                            // Below code take from GPT and {`Slide ${i === index ? 'active' : ''}`} this line is optional.
                            <div className={`Slide ${i === index ? 'active' : ''}`} key={event.Id} onClick={() => handleImageClick(i)}>
                                <img src={event.Image_url} />
                            </div>
                        ))}
                    </div>
                    <p className='Title'>{PlaceInfo.Name}</p>
                    <p>
                        {PlaceInfo.Info}
                    </p>
                </div>
            </div>
            <PlaceCard />
            <div className='Title'><p>Photos</p></div>
            <PhotoGrid />
            <div className='Title'><p>News</p></div>
            <NEWS />
            <Footer />
            <GoToTop />
        </div>
    </>)
}

export default Place;
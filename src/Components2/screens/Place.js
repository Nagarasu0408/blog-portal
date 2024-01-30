
import { useState } from 'react';
import { PlaceData } from './PlaceData';
import Card from '../card';
import { useNavigate } from 'react-router-dom'



function Place() {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    let PlaceInfo = PlaceData[index];
    const hasNext = index < PlaceData.length - 1;
    const handleImageClick = (newIndex) => {
        setIndex(newIndex);
    };
    return (<>
        <div>
            <div className='Navigation_Bar_Top'>
                <img id='logo' src='/./logo.png' alt='Logo'></img>
                <div className='Navigation_Bar'>
                    <button id='Nav_bar' onClick={() => navigate('/')}>Home</button>
                    <button id='Nav_bar'>About</button>
                    <button id='Nav_bar'>FAQ</button>
                    <button id='Nav_bar' onClick={() => navigate('Card')}>Login</button>
                </div>
            </div>
        </div>
        <div className="FullView">
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
        <div className='Vada'>
            <Card />
        </div>
    </>)
}

export default Place;
// SliderComponent.js

import React, { useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarIcon from '@mui/icons-material/Star';
// import PhotoGrid from '../Components2/screens/PhotoGallery';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TourIcon from '@mui/icons-material/Tour';
import Footer from '../Components2/screens/Footer';
import GoToTop from '../Components2/screens/GotoTop';
import ShopDetails from '../Components2/ShopDetails';
import Scale from '../Components2/Effect/scale';


const SliderComponent = () => {

    // State variables
    const [itemActive, setItemActive] = useState(0);

    // Data for items and thumbnails
    const items = [
        { imgSrc: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Steam Engine Train', content: 'The toy train passes through 16 tunnels, 250 bridges and 208 curves. The Nilgiri Railway is the only mountain railway in south India to conduct services daily.' },
        { imgSrc: 'https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2023/10/12/nilgri-train.jpg', title: 'Steam Engine Train', content: 'The toy train passes through 16 tunnels, 250 bridges and 208 curves. The Nilgiri Railway is the only mountain railway in south India to conduct services daily. ' },
        { imgSrc: 'https://images.unsplash.com/photo-1597165253287-d06597132da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slider 03', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { imgSrc: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slider 04', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { imgSrc: 'https://wallpaperswide.com/download/pine_forest_hdr-wallpaper-2400x1350.jpg', title: 'Slider 05', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
    ];

    // Event handlers
    const handleNextClick = () => {
        setItemActive((prevItem) => (prevItem + 1) % items.length);
    };

    const handlePrevClick = () => {
        setItemActive((prevItem) => (prevItem - 1 + items.length) % items.length);
    };

    // Auto run slider
    useEffect(() => {
        const refreshInterval = setInterval(() => {
            handleNextClick();
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(refreshInterval);
    }, [itemActive]);


    // Inside the renderSlider function in SliderComponent.js

    const renderSlider = () => {
        const handleScrollDown = () => {
            // Implement logic to scroll down
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        };
        return (
            <>
                <div id='body'>
                    <div className="slider">
                        {/* <div className='PlaceName'><h1>Ooty</h1></div> */}
                        <div class="smoke" >
                            <ul>
                                <li>O</li>
                                <li>o</li>
                                <li>t</li>
                                <li>y</li>
                            </ul>

                        </div>
                        {/* list Items */}
                        <div className="list">
                            {items.map((item, index) => (
                                <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                                    <img src={item.imgSrc} alt={`Slider ${index + 1}`} />
                                    <div className="content">
                                        <p>{item.title}</p>
                                        <h2>{item.title}</h2>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* button arrows */}
                        <div className="arrows">
                            <button className="arrows1" onClick={handlePrevClick}>&lt;</button>
                            <button className="arrows2" onClick={handleNextClick}>&gt;</button>
                        </div>

                        {/* thumbnail */}
                        <div className="thumbnail">
                            {items.map((item, index) => (
                                <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                                    <img src={item.imgSrc} alt={`Slider ${index + 1}`} />
                                    <div className="content">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='scroll-down-button-container'>
                    <button onClick={handleScrollDown} className="scroll-down-button">
                        Scroll To Explore<ArrowDownwardIcon style={{ height: '25px', width: '25px', marginLeft: '5px' }} />
                    </button>
                </div>

                <div className='Place_data'>
                    <div className='P1'>
                        <div className='Card'>
                            <div className="content1">Title</div>
                        </div>
                        <div className='Content'>
                            <div className="content">Deserunt incididunt nulla excepteur ea aliqua commodo aliquip id enim exercitation et. Lorem anim voluptate sint occaecat cillum deserunt ea dolore in irure. Excepteur enim ea duis tempor eiusmod nulla anim aute pariatur. Aute exercitation mollit fugiat proident elit culpa tempor.</div>
                        </div>
                        <div className='Review'>
                            <h3>Review</h3>
                            <h1>3.3<StarIcon id='startIcon' /></h1>
                            <h3>4.5k</h3>
                        </div>

                    </div>
                    <div className='P1'>
                        <div className='Card'>
                            <div className="content1">Title</div>
                        </div>
                        <div className='Content'>
                            <div className="content">Deserunt incididunt nulla excepteur ea aliqua commodo aliquip id enim exercitation et. Lorem anim voluptate sint occaecat cillum deserunt ea dolore in irure. Excepteur enim ea duis tempor eiusmod nulla anim aute pariatur. Aute exercitation mollit fugiat proident elit culpa tempor.</div>
                        </div>
                        <div className='Review'>
                            <h3>Review</h3>
                            <h1>3.3<StarIcon id='startIcon' /></h1>
                            <h3>4.5k</h3>
                        </div>

                    </div>
                </div>
                <div className='GridCard'>
                    <div id='Card'>
                        <TempleHinduIcon style={{ height: '50px', width: '50px', }} />
                        Temple
                    </div>
                    <div id='Card'>
                        <StoreIcon style={{ height: '50px', width: '50px', }} />
                        Store
                    </div>
                    <div id='Card'>
                        <LocalHospitalIcon style={{ height: '50px', width: '50px', }} />
                        Hospital
                    </div>
                    <div id='Card'>
                        <TourIcon style={{ height: '50px', width: '50px', }} />
                        Travel Archive
                    </div>
                </div>
                <div className='Shop_Card'>
                    {/* <div className='Scard'></div> */}
                    <ShopDetails className='Scard' />
                </div>
                {/* <Footer /> */}
                <GoToTop />
                <Scale />
            </>
        );
    };
    return renderSlider();

};

export default SliderComponent;


import ChatIcon from '@mui/icons-material/Chat';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Model from "./Model";
import Footer from './Footer';
import PhotoGrid from './PhotoGallery';
import NavBar from '../NavBar';
import GoToTop from './GotoTop';

function UserHomeScreen() {
    // const [UserName, setUserName] = useState("");

    // useEffect(() => {
    //     axios.get('http://localhost:3001/register').then(user => setUserName(user.username)).catch(err => console.log(err));
    // }, []);

    const navigate = useNavigate();
    const [openModel, setModel] = useState(false);
    const ModelClose = () => {
        setModel(false);
    }


    const location = useLocation();



    const ref1 = useRef(null);
    const HandleClick1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref2 = useRef(null);
    const HandleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref3 = useRef(null);
    const HandleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const ref4 = useRef(null);
    const HandleClick4 = () => {
        ref4.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <NavBar />
            {openModel && (<Model onCancel={ModelClose} data={"view"} />)}
            {/* <div className="UserView">
                <div className='Navigation_Bar_Top1'>
                    <p >Logo</p>
                    <div className='Navigation_Bar1'>
                        <button id='Nav_bar'>Home</button>
                        <button id='Nav_bar'>About</button>
                        <button id='Nav_bar'>Support</button>
                        <button id='Nav_bar'>LogOut</button>
                    </div>
                </div>
                <div className='User_Content'>
                    <div className='UserLocation'>
                        <div className='CurrentLocationMap'></div>
                        <div className='CurrentPlaceDes'></div>
                    </div>
                    <div className='places'>
                        <div className="scrolling-wrapper">
                            <div className="card" >
                                <img src="https://cdn-icons-png.flaticon.com/512/2928/2928185.png" alt='image' />
                                <h2>
                                    Hospital
                                </h2>
                                <p>
                                    Description about place
                                </p>
                            </div>
                            <div className="card">
                                <img src="https://cdn-icons-png.flaticon.com/512/6755/6755633.png" alt='image' />
                                <h2>
                                    Hotel
                                </h2>
                                <p>
                                    Description about place
                                </p>
                            </div>
                            <div className="card">
                                <img src="https://cdn-icons-png.flaticon.com/512/5176/5176238.png" alt='image' />
                                <h2>
                                    Government Office
                                </h2>
                                <p>
                                    Description about place
                                </p>
                            </div>
                            <div className="card">
                                <img src="https://cdn-icons-png.flaticon.com/512/10534/10534880.png" alt='image' />
                                <h2>
                                    Tourist Spot
                                </h2>
                                <p>
                                    Description about place
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="ChatBot"> <p><ChatIcon /></p></div>
            </div> */}
            <div className='User_Body'>
                <div className='Explore'>
                    <button>Explore</button>
                    <p>Welcome back....</p>
                    <div className='btns'>
                        <button onClick={HandleClick1}>NEWS</button>
                        <button onClick={HandleClick2}>Tickets</button>
                        <button onClick={HandleClick3}>Travel Info</button>
                        <button onClick={HandleClick4}>Place to go</button>
                    </div>
                </div>
                {/* <div className='OutSide2'><p>Welcome Back.....</p></div> */}
                <div className='Header1'><p>Place to GO</p></div>
                <div className="Place_to_go" ref={ref4}>
                    <div className="card" onClick={() => setModel(true)}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://www.techbuzzonline.com/wp-content/uploads/2018/05/21-Awesome-Field-Landscape-Background-1280x720.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://img.freepik.com/premium-photo/green-field-with-sunset-background_931576-17135.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://beautyharmonylife.com/wp-content/uploads/2013/09/nature-5.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://www.techbuzzonline.com/wp-content/uploads/2018/05/21-Awesome-Field-Landscape-Background-1280x720.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://img.freepik.com/premium-photo/green-field-with-sunset-background_931576-17135.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://beautyharmonylife.com/wp-content/uploads/2013/09/nature-5.jpg" alt='image' />
                        <h2>
                            Name
                        </h2>
                        <p>
                            Description about place
                        </p>
                    </div>
                </div>
                <div className='Header1'><p>Travel Info</p></div>
                <div className='Transport_info'>
                    <div>
                        <div className='Travel_info'>
                            <div className='BusImage'>
                                <img src='https://static.vecteezy.com/system/resources/previews/011/081/820/original/bus-illustration-free-vector.jpg' alt='bus_image'></img>
                            </div>
                            <div className='BusInfo'>
                                <p>Travels Name</p>
                                <p>From: Place_Name   To:Place_Name</p>
                                <p>Time:</p>
                            </div>
                        </div>
                        <div className='Travel_info'>
                            <div className='BusImage'>
                                <img src='https://static.vecteezy.com/system/resources/previews/011/081/820/original/bus-illustration-free-vector.jpg' alt='bus_image'></img>
                            </div>
                            <div className='BusInfo'>
                                <p>Travels Name</p>
                                <p>From: Place_Name   To:Place_Name</p>
                                <p>Time:</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='Travel_info' ref={ref3}>
                            <div className='BusImage'>
                                <img src='https://static.vecteezy.com/system/resources/previews/011/081/820/original/bus-illustration-free-vector.jpg' alt='bus_image'></img>
                            </div>
                            <div className='BusInfo'>
                                <p>Travels Name</p>
                                <p>From: Place_Name   To:Place_Name</p>
                                <p>Time:</p>
                            </div>
                        </div>  <div className='Travel_info'>
                            <div className='BusImage'>
                                <img src='https://static.vecteezy.com/system/resources/previews/011/081/820/original/bus-illustration-free-vector.jpg' alt='bus_image'></img>
                            </div>
                            <div className='BusInfo'>
                                <p>Travels Name</p>
                                <p>From: Place_Name   To:Place_Name</p>
                                <p>Time:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Transport' ref={ref2}>
                    <div className='Header1'><p>Transport Details</p><p> &</p><p> Ticket Booking</p></div>
                    <div>
                        <div className='Transport_type'>
                            <button onClick={() => navigate('/BusTicket')}>Book Now</button>
                        </div>
                        <div className='Transport_type'>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div>
                        <div className='Transport_type'>
                            <button>Book Now</button>
                        </div>
                        <div className='Transport_type'>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>

                {/* <div className='Header1'><p>NEWS</p></div>
                <div className='NEWS' ref={ref1}>
                    <div className='Card'>
                        <p>Ipsum esse qui pariatur ad incididunt laborum cillum eiusmod cillum et duis duis magna consectetur. Do esse officia quis excepteur ad. Ea esse ut eiusmod reprehenderit laborum ad.</p>
                        <button>View</button>
                    </div>
                    <div className='Card'>
                        <p>Ipsum esse qui pariatur ad incididunt laborum cillum eiusmod cillum et duis duis magna consectetur. Do esse officia quis excepteur ad. Ea esse ut eiusmod reprehenderit laborum ad.</p>
                        <button>View</button>
                    </div>
                    <div className='Card'>
                        <p>Ipsum esse qui pariatur ad incididunt laborum cillum eiusmod cillum et duis duis magna consectetur. Do esse officia quis excepteur ad. Ea esse ut eiusmod reprehenderit laborum ad.</p>
                        <button>View</button>
                    </div>
                </div> */}
                <PhotoGrid />
            </div>
            {/* <div className="ChatBot">
                <div className='left'></div>
                <div className='Right'></div>
                <p><ChatIcon />
                </p>
            </div> */}
            {/* <div className='Footer'><p>Designed By {location.state.id}</p></div> */}
            <Footer />
            <GoToTop />
        </>
    );
}
export default UserHomeScreen;
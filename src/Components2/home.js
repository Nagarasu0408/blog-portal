import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import localData from '../Data/localData.json';
// import user from '../img/user.png';
// import edit from '../img/edit.png';
// import inbox from '../img/envelope.png';
// import settings from '../img/settings.png';
// import help from '../img/question.png';
// import logout from '../img/log-out.png';


import React, { useEffect, useRef } from 'react';


function Home() {
    const navigate = useNavigate();
    const [StateName, setStateName] = useState('');
    const [DistrictName, setDistrict] = useState('');
    const isStateAndDistrictPresent = (stateName, districtName) => {
        const stateExists = localData.states.some(state => state.state === stateName);

        if (stateExists) {
            const state = localData.states.find(state => state.state === stateName);
            return state.districts.includes(districtName);
        }

        return false;
    };

    const result = isStateAndDistrictPresent(StateName, DistrictName);

    const getState = (e) => {
        setStateName(e.target.value)
    }
    const getDistrict = (e) => {
        setDistrict(e.target.value)
    }




    // const [open, setOpen] = useState(false);

    // let menuRef = useRef();

    // useEffect(() => {
    //     let handler = (e) => {
    //         if (!menuRef.current.contains(e.target)) {
    //             setOpen(false);
    //             console.log(menuRef.current);
    //         }
    //     };

    //     document.addEventListener("mousedown", handler);


    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     }

    // });

    return (
        <>

            <div className='Banner'>
                <div className='Navigation_Bar_Top'>
                    <img src='/./logo.png' id='logo' alt='Logo'></img>
                    <div className='Navigation_Bar'>
                        <button id='Nav_bar' onClick={() => navigate('/')}>Home</button>
                        <button id='Nav_bar'>About</button>
                        <button id='Nav_bar'>FAQ</button>
                        {/* {Props.Status === 'true' ? <button id='Nav_bar' onClick={() => navigate('Login')}>Profile</button> : <button id='Nav_bar' onClick={() => navigate('Login')}>Login</button>} */}
                        <button id='Nav_bar' onClick={() => navigate('Login')}>Login</button>
                        <button id='Nav_bar'>Profile</button>
                    </div>
                </div>
                <div className='Search_place'>
                    <p>
                        <input type='text' name='Uname' id='State_id' placeholder="State" value={StateName} onChange={getState} />
                    </p>
                    <p>
                        <input type='text' name='Pwd' id='District_id' placeholder="District" value={DistrictName} onChange={getDistrict} />
                    </p>
                    <p>
                        <button type='button' name='btn' id='Search_btn' onClick={() => result ? navigate('Place') : console.log("Sorry")}>Search</button>
                    </p>
                </div>
            </div>
            <div className='Body'>
                <div className="Famous_place">
                    <div id='Image_details'>
                        <div id='Place_Image_backGround'>
                            <div id='Place_Image2'></div>
                        </div>
                    </div>
                    <div className='Place_description'>
                        <center> <h1>Taj Mahal</h1></center>
                        <p>
                            The Taj Mahal celebrates the great love of India's Mughal ruler Shah Jahan for his beloved wife Arjumand Banu Begum, better known to history as Mumtaz Mahal or “jewel of the palace.” Jahan first spotted Mumtaz in the bazaar at Agra, selling silks and beads, and the young prince fell madly in love at first sight.
                        </p>
                        <p>
                            Shah Jahan, named after his wife Mumtaz Mahal, which is synonymous with the existence and ever-growing popularity of the Taj Mahal, was the fifth Mughal emperor of South Asia who ruled from 1628 to 1658. Born as Prince Shahab-ud-din Muhammad Khurram Lahore, Pakistan in 1592, Shah Jahan was the son of Nur-ud-din Muhammad Salim, known by his imperial name, Jahangir. His name Khurram, which means “happiness” in Persian, was given to him by his grandfather Akbar the Great.
                        </p>
                        <center>
                            <p>

                                <button id='readMore_btn'>Read More</button>

                            </p>
                        </center>
                    </div>
                </div>
                <div className="AchieveMents">
                    <div id='Price_Image'>
                        <div id='Place_Image_backGround'>
                            <div id='Place_Image2'></div>
                        </div>
                    </div>
                    <div className='Achieve_description'>
                        <center> <h1>India’s gold medals at the Olympics - From hockey’s dominance to Neeraj Chopra’s monster throw</h1></center>
                        <p>
                            India have won 10 gold medals at the Olympics. The men’s hockey team itself accounts for eight of them. After Abhinav Bindra, Neeraj Chopra is the second individual Olympic champion.
                        </p>
                        <p>
                            Winning the gold at the Olympics is the pinnacle of success for any athlete or team and javelin thrower Neeraj Chopra is the latest Indian to succeed at this level.

                            In all, India have 10 gold medals at the Olympics – winning eight times as a team. Only two individuals have won gold at the Summer Games in shooting and athletics. Here’s when and how India won the top honours at the Olympics.
                        </p>
                        <p>
                            <center>
                                <button id='readMore_btn'>View</button>
                            </center>
                        </p>
                    </div>
                </div>

                <div className="scrolling-wrapper">
                    <div className="card" onClick={() => navigate('Place')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg" alt='image' />
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg" alt='image' />
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://www.techbuzzonline.com/wp-content/uploads/2018/05/21-Awesome-Field-Landscape-Background-1280x720.jpg" alt='image' />
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://img.freepik.com/premium-photo/green-field-with-sunset-background_931576-17135.jpg" alt='image' />
                        <p>
                            Description about place
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://beautyharmonylife.com/wp-content/uploads/2013/09/nature-5.jpg" alt='image' />
                        <p>
                            Description about place
                        </p>
                    </div>
                </div>
                <div className='Info_About_Important_place'>
                    <div className='left'></div>
                    <center><div className='Right'>
                        <div className="scrolling-container">
                            <p className="scrolling-content">
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                            </p>
                            <p>
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                                Delhi is the national capital of India and is a city bustling with enthusiasm making it one of the top-most tourist destination. A city filled to the brim with cultural heritage, monuments, markets and some delectable street food. All of it evoking memories of the affluent Mughal era to the modern city that it has evolved into, complete with high-end malls, luxury hotels, restaurants, shopping complexes
                            </p>

                        </div>
                    </div></center>
                </div>
            </div>
            <footer>
                <div className="Developer_info">

                </div>
                <div className="Social_media">
                    <div className="instagram"></div>
                    <div className="twitter"></div>
                    <div className="linkedin"></div>
                    <div className="github"></div>
                    <div className="whatsapp"></div>
                    <div className="mail"></div>
                </div>
                <div className="container">
                    <p>&copy; 2023 Your Website. All rights reserved.</p>
                </div>
            </footer>



            {/* <div className="App">
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                        <img src={user}></img>
                    </div>

                    <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                        <h3>NAGARASU P<br /><span>FULLSTACK DEVELOPER</span></h3>
                        <ul>
                            <DropdownItem img={user} text={"My Profile"} />
                            <DropdownItem img={edit} text={"Edit Profile"} />
                            <DropdownItem img={inbox} text={"Inbox"} />
                            <DropdownItem img={settings} text={"Settings"} />
                            <DropdownItem img={help} text={"Helps"} />
                            <DropdownItem img={logout} text={"Logout"} />
                        </ul>
                    </div>
                </div>
            </div> */}



        </>
    );
}

export default Home;



// function DropdownItem(props) {
//     return (
//         <li className='dropdownItem'>
//             <img src={props.img}></img>
//             <a> {props.text} </a>
//         </li>
//     );
// }
//DataChecker.js

import { useRef, useState, useEffect } from 'react';
import { UserData } from './UserData';
import { useNavigate } from 'react-router-dom'
import { FAQData } from '../../Data/FAQData';

function DataChecker() {
    const navigate = useNavigate();
    const [Username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const NameValue = (e) => { setUserName(e.target.value) };
    const PasswordValue = (e) => { setPassword(e.target.value) };
    const [BacktoTop, setBacktoTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBacktoTop(true);
            }
            else {
                setBacktoTop(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    const HandleLogin = () => {
        const user = UserData.find(user => user.UserName === Username && user.Password === Password);
        user ? navigate('/') : alert('UserName or Password is wrong');
    };
    // useRef Hook
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

    const [progressHeight, setProgressHeight] = useState(0);

    useEffect(() => {
        const updateProgressBar = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const newProgressHeight = (window.pageYOffset / totalHeight) * 100;
            setProgressHeight(newProgressHeight);
        };

        window.addEventListener('scroll', updateProgressBar);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

    const progressBarStyle = {
        height: `${progressHeight}%`,
    };





    return (<>
        <div>
            <div className='progressbar' style={progressBarStyle}></div>
            <div className='scrollPath'></div>
            <div className='Body_Background'>

                <div className='Navigation_Bar_Top1'>
                    <p >Logo</p>
                    <div className='Navigation_Bar1'>
                        <button id='Nav_bar' onClick={HandleClick1}>Home</button>
                        <button id='Nav_bar' onClick={HandleClick2}>About</button>
                        <button id='Nav_bar' onClick={HandleClick3}>FAQ</button>
                        <button id='Nav_bar' >Login</button>
                    </div>
                </div >
                <div className='LoginPage_Container' ref={ref1}>
                    <div className='LeftSide'></div>
                    <div className='RightSide'></div>

                    <div id='Login'>
                        <h3>Log in</h3>

                        <p>
                            <input type="text" name="UserName" placeholder="User Name" id='input_box' value={Username} onChange={NameValue}></input>
                        </p>
                        <p>
                            <input type="password" name="Password" id='password_box' placeholder="Password" value={Password} onChange={PasswordValue}></input>
                        </p>
                        <div className='forgot_password'>
                            <button href='#'>Forgot password?</button>
                        </div>
                        <p>
                            <center><button type="button" id='btn' name="Login" onClick={HandleLogin}> Log in</button></center>
                        </p>
                        <div className='LoginMethod'>
                            <div className='Google'></div>
                            <div className='Phone'></div>
                        </div>
                        <div className='Create_Account'><button type="button" name="Register">Create account</button></div>
                    </div>
                </div >
                <div className='demo' ref={ref2}>
                    <p className='Header'>About Us</p>
                    <div className='About_Us'>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel vestibulum lorem. In hac habitasse platea dictumst. Ut eget mattis tortor, quis placerat nisi. Donec eleifend vel felis quis tristique. Maecenas suscipit lectus a ex suscipit, non dictum arcu pretium. Sed vitae arcu in leo fringilla mattis. Mauris quis odio dapibus, congue ante a, rutrum leo. Donec quis ante at enim viverra auctor et eu tortor. Integer eu lacinia ex. Ut vel eleifend dolor. Proin hendrerit, urna in fermentum ullamcorper, velit lectus lobortis lectus, vel cursus sem urna sit amet arcu. Morbi eu risus id nisi vulputate faucibus. Nulla vel aliquet dolor. Fusce tincidunt tortor id vehicula tempor. Morbi non hendrerit ligula.
                        </p>
                    </div>

                </div>

            </div>
            <div className='OutSide'><p>Welcome To India.....</p></div>

            <div className="scrolling-wrapper">
                <div className="card" onClick={() => navigate('Place')}>
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
            <div id='FAQ' ref={ref3}>
                <img src={require('F:/react/Personal/Project/blog-portal/src/image/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.webp')}></img>
                <div className='Questions_Card'>
                    <p id='Header'>FAQ?</p>
                    {FAQData.map((event) => (
                        <div className='Question'>
                            <p key={event.Id}>{event.Id}.{event.question}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='BacktoTop'>
                {BacktoTop && (
                    <div>
                        <p>
                            <button onClick={scrollUp}>
                                ^
                            </button>
                        </p>
                        <p>Top</p>
                    </div>

                )}
            </div>
        </div>
        <div className='Footer' >
            <div className='Developer_info'>
                <div className='foot'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='foot'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='foot'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='foot'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <hr />
                <div className="foot1">
                    <p>
                        <div className='Mail'></div>
                        <div className='Github'></div>
                        <div className='Linkedin'></div>
                        <div className='Instagram'></div>
                    </p>
                </div>
            </div>
        </div>
    </>)
}


export default DataChecker;
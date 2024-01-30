import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';
import { ReviewData, ShopData } from '../../Data/ReviewData';
function OwnerProfile() {
    const [index, setIndex] = useState(0);
    let ShopInfo = ShopData[index];
    const hasNext = index < ShopData.length - 1;
    const handleImageClick = (newIndex) => {
        setIndex(newIndex);
    };
    return (
        <>
            <div className="User_Profile_Details">
                <div className="Cover_img"></div>
                <div className="User_Profile_pic"></div>
                <div className='User_Info'>
                    <p id='User_Name'>Nagarasu P <VerifiedIcon id='verified_icon' /></p>
                    <p id='User_Id'>Id-717821F235np1103</p>
                    <div id='User_Des'>
                        <button><LocationOnIcon />Location</button>
                        <button><FacebookIcon />FaceBook</button>
                        <button><WhatsAppIcon />Whatsapp</button>
                        <button><InstagramIcon />Instagram</button>
                    </div>
                    <div id='StartIcon'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                </div>
            </div>
            <div className='User_content'>
                <div className='User_Container'>
                    <LocalPhoneRoundedIcon id='Icon' />
                    <div><p>044-444-999-222 (Office)</p>
                        <p>+91 9876543210 (Mobile)</p>
                    </div>
                    <MailIcon id='Icon' />
                    <div><p>Jp717821F235np1103@gmail.com</p>
                    </div>
                    <div>
                        <button><MessageIcon id='Icon' /> Chat</button>
                    </div>
                </div>
                <div className='Location'>
                    <p className='Location_Name'><LocationOnIcon />Theni</p>
                    <p className='City_Name'>Jakkampatty</p>
                </div>
                <div className='Slogan'>
                    <p>
                        “Live, Laugh, Love.”
                    </p>
                </div>
            </div>
            <div className='OverView'>
                <p id='header'>4.5 <StarIcon id='Star' /></p>
                <p id='count'>Overall "40,000" Reviews...</p>
            </div>
            <div className='Slogan1'>
                <p>
                    About Us
                </p>
                <p id='content'>
                    Dummy accounts are often created with fictitious information, and are typically not associated with real people or organizations. They can be useful for testing and training because they allow researchers or developers to simulate a wide range of scenarios without risking the security or privacy of real customers.a representation or copy of something, as for displaying to indicate appearance:a display of lipstick dummies made of colored plastic. a representation of a human figure, as for displaying clothes in store windows.
                </p>
            </div>
            <div className='Shop_details'>
                <p id='Header'>Shop details</p>
                <div className="FullView">
                    <div className="card">
                        <img src={ShopInfo.ImageUrl} alt='image' onClick={() => hasNext ? setIndex(index + 1) : setIndex(0)} />
                        <div className="Image">
                            {ShopData.map((event, i) => (
                                // Below code take from GPT and {`Slide ${i === index ? 'active' : ''}`} this line is optional.
                                <div className={`Slide ${i === index ? 'active' : ''}`} key={event.Id} onClick={() => handleImageClick(i)}>
                                    <img src={event.ImageUrl} />
                                </div>
                            ))}
                        </div>
                        <p className='Title'>NPL restaurant (Veg/Non-Veg)</p>
                        <p>
                            At NLP Restaurant, every dish is a masterpiece, carefully crafted to delight the senses and elevate the dining experience. The fusion of exceptional cuisine and cutting-edge NLP technology ensures a truly unique and unforgettable journey for all who appreciate the artistry of both culinary and linguistic excellence. NLP Restaurant is not just a place to savor delectable dishes; it's an immersive celebration of flavor, creativity, and the seamless integration of technology into the world of gastronomy."
                        </p>
                    </div>
                </div>
            </div>
            <div className='User_Review'>
                <p id='Header'>User Reviews</p>
                <div className='User_Review1'>
                    {ReviewData.map((Event) => {
                        return (
                            <div id='Review_Card'>
                                <div id='profile_pic' style={{ backgroundImage: `url(${Event.ImageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                </div>
                                <div id='Reviewer_Detail'>
                                    <p id='User_Id'>{Event.Id}</p>
                                    <p id='Review_content'>{Event.Review}</p>
                                </div>
                                <div id='Like'>
                                    <FavoriteBorderIcon />
                                    <p>Like</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='Comment'>
                <div>
                    <h1><textarea placeholder='Say Something nice....'></textarea></h1>
                </div>
                <div>
                    <StarBorderIcon id='StarIcon' />
                    <StarBorderIcon id='StarIcon' />
                    <StarBorderIcon id='StarIcon' />
                    <StarBorderIcon id='StarIcon' />
                    <StarBorderIcon id='StarIcon' />
                </div>
            </div>
            <div className='Submit_btn'>
                <button type='Submit'>Submit</button>
            </div>
            <div className='Footer'>
                <p>Designed by  NAGARASU P</p>
            </div>
        </>
    );
}

export default OwnerProfile;
//First Try

// Card.js

// import { CardDetails } from './data.js'
// import './Main.css'
// import { Banner } from './data.js'
// import { useState } from 'react';
// function Card() {
//     const [index, setIndex] = useState(0);
//     let [value, setValue] = useState(0);
//     let details = CardDetails[index];
//     let Banner1 = Banner[value];
//     // console.log(setValue(Banner1.Image))
//     return (<>
//         {/* <div>
//             <img id='Banner_Image' src={Banner1.Image} onClick={() => value < 4 ? setValue(value + 1) : setValue(0)}></img>
//             <button type='button' onClick={() => value < 4 ? setValue(value + 1) : setValue(0)}>Next</button>
//         </div> */}
//         <div style={{ margin: '10%' }}>
//             <img id="StoreImage_style" src={details.Image} style={{ width: '10%', borderRadius: '10px', margin: '0 10px 0 0', float: 'left' }}></img>
//             <p><h3>{details.StoreName}</h3></p>
//             <p>{details.Description}</p>
//             <p>{details.Rating}</p>
//             {/* <p style={{ float: 'right' }}>{details.Contect}</p> */}
//         </div>
//         <div style={{ margin: '10%' }}>
//             <img id="StoreImage_style" src={details.Image} style={{ width: '10%', borderRadius: '10px', margin: '0 10px 0 0', float: 'left' }}></img>
//             <p><h3>{details.StoreName}</h3></p>
//             <p>{details.Description}</p>
//             <p>{details.Rating}</p>
//             {/* <p style={{ float: 'right' }}>{details.Contect}</p> */}
//         </div>
//     </>)
// }

// export default Card;




//Second Try 

// Card.js

import { CardDetails } from './data.js'
import { UserData } from './Login form/UserData.js';
import './Main.css'
import { useState } from 'react';
import ShopDetails from './ShopDetails.js';
import Profile from './Login form/Profile.js';

function Card() {
    const [isSent, setIsSent] = useState(false);
    const [ViewProfile, setViewProfile] = useState(false)
    if (isSent) {
        return (<>
            <ShopDetails />
        </>)
    }
    if (ViewProfile) {
        return (<>
            <Profile />
        </>)
    }
    return (<>
        {/* Navigation bar 
        <div className="Navigation_Bar">
            <div >
                <img alt={UserData[0].UserName} className="Profile" src={UserData[0].Image} onClick={() => setViewProfile(true)}></img>
                <p className="Profile_Name">{UserData[0].UserName}</p>
            </div>
            <div className="Search_Box">
                <center><input type="text" placeholder="Search" ></input></center>
            </div>
        </div> */}
        <div className='MainContent'>
            {/* <div className="Booking">
                <h3>Travels Available</h3>
                <input type="text" placeholder='From'></input>
                <p>
                    <input type="text" placeholder='To'></input>
                </p>
                <p><button>Search</button></p>
            </div> */}

            <h1 id='Title'>Known Places</h1>
            <div className='SearchBar'>
                <center><input placeholder='Search Places...' /></center>
            </div>
            <br />
            {CardDetails.map((e) =>
                <div key={e.Id} className="Container" onClick={() => setIsSent(true)} >
                    <img className="StoreImage" src={e.Image}></img>
                    <p><h3>{e.StoreName}</h3></p>
                    <p>{e.Description}</p>
                    <p>{e.Rating}</p>
                </div>
            )}
            <br />
        </div>
        {/* <div className='Comment_Area'>

        </div> */}

    </>)
}

export default Card;














// import { Banner } from './data.js'


//  const[index,setIndex]=useState(0);

// let Banner1=Banner[value];

// let [value,setValue]=useState(0);

{/* <div>
        <img id='Banner_Image' src={Banner1.Image} onClick={()=>value<4?setValue(value+1):setValue(0)}></img>
    </div>
    <div id='Color'></div> */}
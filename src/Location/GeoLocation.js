// import { useEffect, useState } from "react";


// function Geolocation() {
//     const [getIp, setIpAddress] = useState('');
//     const [geoInfo, setGeoInfo] = useState({});

//     useEffect(() => {
//         getVisitorIp();
//     }, []);

//     const getVisitorIp = async () => {
//         try {
//             const response = await fetch('https://api.ipify.org');
//             const data = await response.text();

//             setIpAddress(data);

//         }
//         catch (error) {
//             console.error('Failed to fetch TP:', error);
//         }
//     }

//     const handleClick = (e) => {
//         setIpAddress(e.target.value);
//     }

//     const fetchIpInfo = async () => {
//         try {
//             // const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_yVYyYYEARLr5sFcEDZ1H5YuaQxeSS&ipAddress=${getIp}`);
//             const response = await fetch(`http://ip-api.com/json/${getIp}`)
//             const data = await response.json();

//             setGeoInfo(data);
//         } catch (error) {
//             console.error('Faild to location info:', error);
//         }

//     }
//     //https://www.ipify.org/   -   get API for Ip address
//     //https://ip-api.com/docs/api:json   - Geolocation
//     return (
//         <>
//             <div>
//                 <center>
//                     <input type="text" value={getIp} onChange={handleClick} />
//                     <button onClick={fetchIpInfo}>Get Location</button>
//                 </center>
//                 {geoInfo.country && (
//                     <div>
//                         <center><p>Country:{geoInfo.country}</p></center>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Geolocation;



import React, { useEffect, useState } from "react";

function Geolocation() {
    const [add, setAdd] = useState('')
    // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //         const { latitude, longitude } = pos.coords;
    //         console.log(latitude, longitude);
    //         // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat= ${latitude}&lon=${longitude}`;
    //         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    //         fetch(url).then(res => res.json()).then(data => setAdd(data.address))
    //     })
    // }, [])

    console.log(add, "no");
    return (
        <>
            <div className="Location_content">
                <div className="Location_info">
                    <p>Road : {add.road}</p>
                    <p>City : {add.county}</p>
                    <p>College:{add.amenity}</p>
                    <p>Country :{add.country}</p>
                    <p>village:{add.village}</p>
                </div>
                <div className="Map">

                </div>
            </div>
        </>
    )
}

export default Geolocation; 
// import React from 'react';
// import localData from '../Data/localData.json'; // Import your local JSON document

// const Demo = () => {
//     const isStateAndDistrictPresent = (stateName, districtName) => {
//         const stateExists = localData.states.some(state => state.state === stateName);

//         if (stateExists) {
//             const state = localData.states.find(state => state.state === stateName);
//             return state.districts.includes(districtName);
//         }

//         return false;
//     };

//     // Example usage
//     const stateToCheck = 'Tamil Nadu';
//     const districtToCheck = 'hennai';

//     const result = isStateAndDistrictPresent(stateToCheck, districtToCheck);

//     return (
//         <div>
//             <p>{`Is ${districtToCheck} in ${stateToCheck}? ${result ? 'Yes' : 'No'}`}</p>
//         </div>
//     );
// };

// export default Demo;
import React from 'react';
import { useState, useEffect } from 'react';

function Demo1() {
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
            behavior: "auto"
        })
    }
    return (
        <>

        </>
    )
}

export default Demo1;
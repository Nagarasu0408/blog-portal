// import React, { useState } from 'react';

// import { FAQData } from "./Data/FAQData";

// const CardDetails = ({ title, content }) => (
//     <div>
//         <h2>{title}</h2>
//         <p>{content}</p>
//     </div>
// );

// const DemoCode = () => {
//     const [selectedCard, setSelectedCard] = useState(null);

//     const cards = [
//         { id: 1, title: 'Card 1', content: 'This is the content of Card 1.' },
//         { id: 2, title: 'Card 2', content: 'This is the content of Card 2.' },
//         { id: 3, title: 'Card 3', content: 'This is the content of Card 3.' },
//     ];

//     const handleClick = (card) => {
//         setSelectedCard(card);
//     };

//     return (
//         <div>
//             <h1>Click a Card to See Details</h1>
//             <div className="card-list">
//                 {cards.map((card) => (
//                     <div
//                         key={card.id}
//                         className="card"
//                         onClick={() => handleClick(card)}
//                     >
//                         {card.title}
//                     </div>
//                 ))}
//             </div>
//             {selectedCard && (
//                 <CardDetails
//                     title={selectedCard.title}
//                     content={selectedCard.content}
//                 />
//             )}
//         </div>
//     );
// };

// export default DemoCode;



// {
//     BacktoTop && (<button style={{
//         position: "fixed",
//         bottom: "50px",
//         height: "50px",
//         width: "50px",
//         fontSize: "50px"
//     }}
//         onClick={scrollUp}
//     >
//         ^
//     </button>)
// }




import React, { useState, useEffect } from "react";
import Axios from "axios";

function Filter() {
    const [name, setName] = useState('');
    const [user, setUser] = useState([]);


    useEffect(() => {
        Axios.get("https://jsonplaceholder.org/users").then(response => setUser(response.data));
    }, [])


    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}></input >
            <div>
                {name.length > 0 && user.map(e => (<div>
                    {e.firstname.includes(name) ? e.firstname : ""}</div>)
                )
                }
            </div>
        </>
    );
};


export default Filter;
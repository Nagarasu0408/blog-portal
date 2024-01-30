
// import Masonry from 'react-masonry-css';

// // First Try

// import React, { useState } from 'react';
// export const PlaceCard = () => {
//     const cards = [
//         { details: dummy, imageSrc: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", alignLeft: true },
//         { details: dummy, imageSrc: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", alignLeft: false },
//         { details: dummy, imageSrc: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", alignLeft: true },
//         // Add more cards as needed
//     ];
//     return (
//         <>
//             <div className="main-container">
//                 {cards.map((card, index) => (
//                     <Card key={index} {...card} />
//                 ))}

//             </div>

//             {/* <Grid /> */}
//         </>
//     );
// };



// export const Card = ({ number, details, alignLeft }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentImage, setCurrentImage] = useState(0);

//     const toggleCard = () => {
//         setIsOpen(!isOpen);
//         if (!isOpen) {
//             const randomIndex = Math.floor(Math.random() * imageSources.length);
//             setCurrentImage(randomIndex);
//         }
//     };

//     const imageSources = [
//         'https://images.pexels.com/photos/13332170/pexels-photo-13332170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         'https://media.istockphoto.com/id/181071402/photo/autumn.jpg?s=612x612&w=0&k=20&c=Y-fmrp6EKE2pveWpanDdq-maGhmI-hpDHYObdgg41wg=',
//         'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
//     ];

//     return (
//         <div
//             className={`card_View ${isOpen ? 'open' : ''} ${alignLeft ? 'align-left' : 'align-right'}`}
//             onClick={toggleCard}
//         >
//             <div className="card-content">
//                 <div className="card-number">{number}</div>
//                 {isOpen && <div className="card-details">{details}</div>}
//             </div>
//             <img className="card-image" src={imageSources[currentImage]} alt={`Card ${number}`} />
//             <div className="view-button">View</div>
//         </div>
//     );
// };





// 2nd Try
// export

//     const Card = ({ number, details, imageSrc, alignLeft }) => {
//         const [isOpen, setIsOpen] = useState(false);

//         const toggleCard = () => {
//             setIsOpen(!isOpen);
//         };

//         return (
//             <div className={`card ${isOpen ? 'open' : ''} ${alignLeft ? 'align-left' : 'align-right'}`} onClick={toggleCard}>
//                 <div className="card-image-container">
//                     <img className="card-image" src={imageSrc} alt={`Card ${number}`} />
//                 </div>
//                 {isOpen && (
//                     <div className="card-content">
//                         <div className="card-details">{details}</div>
//                     </div>
//                 )}
//                 <div className="view-button" onClick={() => isOpen ? 'open' : ''}>View</div>
//             </div>
//         );
//     };












// 3rd Try
// const breakpointColumns = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1,
// };

// const cards = [
//     { number: 1, details: 'Details 1', imageSrc: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" },
//     { number: 2, details: 'Details 2', imageSrc: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" },
//     // Add more cards as needed
// ];

// export const Grid = () => {
//     return (
//         <Masonry
//             breakpointCols={breakpointColumns}
//             className="my-masonry-grid"
//             columnClassName="my-masonry-grid_column"
//         >
//             {cards.map((card) => (
//                 <Card key={card.number} {...card} />
//             ))}
//         </Masonry>
//     );
// };






// 4th Try
import React, { useState } from 'react';


export const PlaceCard = () => {
    const dummy = 'Eu duis ut sint culpa sunt velit officia ad enim tempor. Eiusmod ut aute et laboris deserunt commodo irure nostrud proident ea aute cillum minim. Enim consectetur consequat esse sit fugiat. Minim commodo id cillum enim voluptate ea laborum amet.'
    const [cards, setCards] = useState([
        {
            id: 1, details: dummy, imageSrc: 'https://miro.medium.com/v2/resize:fit:999/0*IpPuhvq5GoR0znBc.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 2, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_1280.jpg', alignLeft: false, isOpen: false
        },
        {
            id: 3, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/06/01/15/23/peafowl-2363750_1280.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 4, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg', alignLeft: false, isOpen: false
        },
        {
            id: 5, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_1280.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 6, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg', alignLeft: false, isOpen: false
        },
        {
            id: 7, details: dummy, imageSrc: 'https://miro.medium.com/v2/resize:fit:999/0*IpPuhvq5GoR0znBc.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 8, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_1280.jpg', alignLeft: false, isOpen: false
        },
        {
            id: 9, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/06/01/15/23/peafowl-2363750_1280.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 10, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg', alignLeft: false, isOpen: false
        },
        {
            id: 11, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_1280.jpg', alignLeft: true, isOpen: false
        },
        {
            id: 12, details: dummy, imageSrc: 'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg', alignLeft: false, isOpen: false
        },
        // Add more cards as needed
    ]);

    const toggleCard = (cardId) => {
        setCards((prevCards) =>
            prevCards.map((card) => ({
                ...card,
                isOpen: card.id === cardId ? !card.isOpen : false,
            }))
        );
    };

    return (
        <div className='main-container'>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    details={card.details}
                    imageSrc={card.imageSrc}
                    alignLeft={card.alignLeft}
                    isOpen={card.isOpen}
                    onToggle={() => toggleCard(card.id)}
                />
            ))}
        </div>
    );
};



export const Card = ({ details, imageSrc, alignLeft, isOpen, onToggle }) => {
    return (
        <div
            className={`card_View ${isOpen ? 'open' : ''} ${alignLeft ? 'align-left' : 'align-right'}`}
            onClick={onToggle}
        >
            <div className="card-content">
                {isOpen && <div className="card-details">{details}</div>}
            </div>
            <img className="card-image" src={imageSrc} alt="Image" />
            <div className="view-button">View</div>
        </div>
    );
};

























export const PlaceData = [
    {
        Id: 1,
        Name: "India Gate",
        Image_url: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
        Info: "India Gate, monumental sandstone arch in New Delhi, dedicated to the troops of British India who died in wars fought between 1914 and 1919. India Gate, which is located at the eastern end of the Rajpath (formerly called the Kingsway), is about 138 feet (42 metres) in height."
    },
    {
        Id: 2,
        Name: "Bahai (Lotus) Temple",
        Image_url: "https://www.nationsonline.org/gallery/India/Lotus-Temple-New-Delhi.jpg",
        Info: "A wonderful example of secularism, Bahai temple, famously called as Lotus temple symbolizes the unity of four religions viz. Hinduism, Islam, Buddhism and Jainism. The Bahai or Lotus Temples easily makes a spot for its self among the list of among the list of top tourist places in Delhi. Manifesting the secular faith of Bahai community, this magnificent temple has its doors opened for people of religions and beliefs."
    },
    {
        Id: 3,
        Name: "The Humayun’s Tomb",
        Image_url: "https://www.thedelhitours.com/blog/wp-content/uploads/2023/01/Humayuns-Tomb-Delhi.jpg",
        Info: "Hamida Banu Begum, who was the wife of the Mughal Emperor, Humayun, after nine years of his demise ordered the construction of this tomb. It was built with red sandstone. The unique feature about this tomb is that it is a garden tomb and was the first of its kind in India back then. Apart from the main tomb, there are four other surrounding structures, which add to the beauty of the complex. The last Mughal Emperor Bahadur Shah Zafar had taken refuge here during the 1857 revolts away from the British, but was finally captured. It is, thus, historically a very significant monument."
    },
    {
        Id: 4,
        Name: "Old Delhi",
        Image_url: "https://www.thedelhitours.com/blog/wp-content/uploads/2023/01/Old-Delhi.jpg",
        Info: "Still enclosed by failing town surfaces and three enduring gateways, the colourful and brilliant Purani Dilli is a network of small paths populated with rickshaws, covered with 17th-century havelis, and seems to be on an accident course – representing remains of the previous while being interested in what’s to come. There’s lot to do here, and we advise you employ a rickshaw to get the best of what the Old City has to provide – visit Chandni Chowk, the Sis Ganj Gurudwara (Guru Teg Bahadur was beheaded by Aurangzeb here), the Fatehpuri Masjid, Khari Baoli (reputed to be India’s biggest liven market), make pit prevents at the Paranthe Wali Gali, and Karim’s to satisfy any the urge to eat. Head further southern to Zeenat-ul Masjid (Daryaganj), or “Cloud Mosque” and Rajghat, where Gandhi was cremated."
    }
]
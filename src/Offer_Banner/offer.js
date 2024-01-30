import React from 'react';

const OfferBanner = () => {
    return (
        <div id="banner" style={bannerStyle}>
            <div id="offer-text" style={offerTextStyle}>
                Republic Day Special Offer!
            </div>
            <div id="discount" style={discountStyle}>
                Get Free Access To all Travel Packages
            </div>
        </div>
    );
};

// Styles
const bannerStyle = {
    color: 'navy',
    fontSize: '30px',
};

const offerTextStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
};

const discountStyle = {
    fontSize: '25px',
    marginLeft: '10px',
};


export default OfferBanner;

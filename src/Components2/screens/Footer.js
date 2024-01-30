import React from 'react';

import { Link } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={logoContainerStyle}>
                    <img src='logo4.svg' alt='logo' style={logoStyle} />
                    <p className='Header' style={logoTextStyle} >Travel <span style={{ color: ' rgb(254, 14, 162)' }}>Partner</span></p>
                </div>
                <div style={infoContainerStyle}>
                    <div style={infoSectionStyle}>
                        <h4 style={infoHeaderStyle}>Developed by</h4>
                        <p style={infoHeaderStyle1}> NAGARASU P</p>
                        <p style={infoHeaderStyle1}>Nagarasuponnusamy0408@gmail.com</p>
                    </div>
                    <div style={infoSectionStyle}>
                        <h4 style={infoHeaderStyle}>Connect with us</h4>
                        <Link href="#" color="inherit" style={{ marginRight: '1rem' }}>
                            <Facebook />
                        </Link>
                        <Link href="#" color="inherit" style={{ marginRight: '1rem' }}>
                            <Twitter />
                        </Link>
                        <Link href="#" color="inherit" style={{ marginRight: '1rem' }}>
                            <Instagram />
                        </Link>
                        <Link href="#" color="inherit">
                            <GitHub />
                        </Link>
                    </div>
                    <div style={infoSectionStyle}>
                        <h4 style={infoHeaderStyle}>Additional Information</h4>
                        <a href="#" style={infoLinkStyle}>Privacy Policy</a>
                        <a href="#" style={infoLinkStyle}>Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// CSS styles
const footerStyle = {
    marginTop: '2rem',
    zIndex: '-1',
    backgroundColor: '#f5f5f5',
    padding: '2rem 0',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Times New Roman',
};

const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
};

const logoStyle = {
    marginLeft: '-9rem',
    marginRight: '-2rem',
    height: '150px',
};


const logoTextStyle = {
    marginRight: '2rem',
    color: 'black',
    fontSize: '2em',
    textTransform: 'uppercase',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
    letterSpacing: '2px',
};

const infoContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1',
};

const infoSectionStyle = {
    marginRight: '2rem',
};

const infoHeaderStyle = {
    color: 'rgba(0,0,0,.5)',
};
const infoHeaderStyle1 = {
    fontSize: '1em',
    color: 'rgba(0,0,0,.5)',
    textTransform: 'uppercase',
}

const infoLinkStyle = {
    color: '#555',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
};

export default Footer;

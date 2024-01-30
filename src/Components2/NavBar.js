

function NavBar() {
    return (<>
        <div className='Navigation_Bar_Top1'>
            <p className='Header'><img src='logo4.svg' alt='logo' style={{ height: "150px" }} />Travel <span>Partner</span></p>
            <div className='Navigation_Bar1'>
                <button id='Nav_bar' >Home</button>
                <button id='Nav_bar' >About</button>
                <button id='Nav_bar' >FAQ</button>
                <button id='Nav_bar' >Support</button>
            </div>
        </div >
    </>
    );
}

export default NavBar;
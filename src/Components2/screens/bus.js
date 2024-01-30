import { useState } from "react";
import Model from "./Model";


function BusTicketBooking() {
    const [openModel, setModel] = useState(false);
    const [openFilter, setFilter] = useState(false);
    const [ButtonName, setButtonName] = useState("Filter");
    const handleClick = () => {
        setModel(false);
    }
    const buttonName = () => {
        if (openFilter) {
            setFilter(false);
            setButtonName("Filter");
            console.log(ButtonName);
        }
        else {
            setFilter(true);
            setButtonName("Close");
            console.log(ButtonName);
        }
    }
    return (
        <div className="Ticket_Booking">
            <div className="LeftSide_Search_bar">
                <button className="Btn" onClick={buttonName}>{ButtonName}</button>
                {openFilter && (<div className="Card_Header">
                    <p>Total bus</p>
                    <p>Depature</p>
                    <p>Duration</p>
                    <p>Arrival</p>
                    <p>Ratting</p>
                    <p>Fare</p>
                    <p>Seat Available</p>
                </div>)}
            </div>
            <div className="RightSide_Search_bar" onClick={(e) => {
                if (e.target.className === "RightSide_Search_bar") {
                    setFilter(false);
                    setButtonName("Filter")
                }
            }}>
                <div className="Search_bannar">
                    <div className="Search">
                        <input type="text" name="From" id="input" placeholder='from' />
                        <input type="text" name="To" id="input" placeholder="To" />
                        <input type="text" name="Calender" placeholder="Date"></input>
                        <button type="submit" id="btn" name="search_submit">Search</button>
                    </div>
                </div>
                <div className="Bus_Details">
                    <div className="Header"><p>Available:-</p></div>
                    <div className="BusCard">
                        {/* <div className="Card">
                        <div className="Card_Header">
                            <p>Total bus</p>
                            <p>Depature</p>
                            <p>Duration</p>
                            <p>Arrival</p>
                            <p>Ratting</p>
                            <p>Fare</p>
                            <p>Seat Available</p>
                        </div>
                    </div> */}
                        <div className="Card">
                            <div className="busDetails">
                                <p>Name of the Travels</p>
                                <p>Type (AC/Non-AC)</p>
                            </div>
                            <div className="busDetails">
                                <p>Timeing</p>
                                <p>Departure Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Duration</p>
                            </div>
                            <div className="busDetails">
                                <p>Arrival Time</p>
                                <p>Date</p>
                                <p>Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Ratting</p>
                                <p>Counts</p>
                            </div>
                            <div className="busDetails">
                                <p>Fare:</p>
                            </div>
                            <div className="busDetails">
                                <p>Total Seat Available</p>
                                <p>Single seat</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="busDetails">
                                <p>Name of the Travels</p>
                                <p>Type (AC/Non-AC)</p>
                            </div>
                            <div className="busDetails">
                                <p>Timeing</p>
                                <p>Departure Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Duration</p>
                            </div>
                            <div className="busDetails">
                                <p>Arrival Time</p>
                                <p>Date</p>
                                <p>Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Ratting</p>
                                <p>Counts</p>
                            </div>
                            <div className="busDetails">
                                <p>Fare:</p>
                            </div>
                            <div className="busDetails">
                                <p>Total Seat Available</p>
                                <p>Single seat</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="busDetails">
                                <p>Name of the Travels</p>
                                <p>Type (AC/Non-AC)</p>
                            </div>
                            <div className="busDetails">
                                <p>Timeing</p>
                                <p>Departure Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Duration</p>
                            </div>
                            <div className="busDetails">
                                <p>Arrival Time</p>
                                <p>Date</p>
                                <p>Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Ratting</p>
                                <p>Counts</p>
                            </div>
                            <div className="busDetails">
                                <p>Fare:</p>
                            </div>
                            <div className="busDetails">
                                <p>Total Seat Available</p>
                                <p>Single seat</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="busDetails">
                                <p>Name of the Travels</p>
                                <p>Type (AC/Non-AC)</p>
                            </div>
                            <div className="busDetails">
                                <p>Timeing</p>
                                <p>Departure Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Duration</p>
                            </div>
                            <div className="busDetails">
                                <p>Arrival Time</p>
                                <p>Date</p>
                                <p>Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Ratting</p>
                                <p>Counts</p>
                            </div>
                            <div className="busDetails">
                                <p>Fare:</p>
                            </div>
                            <div className="busDetails">
                                <p>Total Seat Available</p>
                                <p>Single seat</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="busDetails">
                                <p>Name of the Travels</p>
                                <p>Type (AC/Non-AC)</p>
                            </div>
                            <div className="busDetails">
                                <p>Timeing</p>
                                <p>Departure Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Duration</p>
                            </div>
                            <div className="busDetails">
                                <p>Arrival Time</p>
                                <p>Date</p>
                                <p>Place</p>
                            </div>
                            <div className="busDetails">
                                <p>Ratting</p>
                                <p>Counts</p>
                            </div>
                            <div className="busDetails">
                                <p>Fare:</p>
                            </div>
                            <div className="busDetails">
                                <p>Total Seat Available</p>
                                <p>Single seat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModel && (<Model onCancel={handleClick} />)}
        </div >

    )
}


export default BusTicketBooking; 
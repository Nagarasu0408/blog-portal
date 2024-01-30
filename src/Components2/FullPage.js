//FullPage.js


import { fullDescription } from "./data";
import './Main.css'
import { useState } from "react";
import Card from "./card";
function FullPage() {
    let index = 0;
    const [Value, setValue] = useState(index);
    const FullDescription = fullDescription[Value];
    const [isSent, setIsSent] = useState(false);
    if (isSent) {
        return <Card />;
    }
    return (<>
        <div>
            <button type="button" onClick={() => Value > 0 ? setValue(Value - 1) : setIsSent(true)}>Back</button>
            <button type="button" id="next" onClick={() => Value <= 0 ? setValue(Value + 1) : setIsSent(true)}>Next</button>
            <img id="StoreDetail" src={FullDescription.Image}></img>
            <p><h1>{FullDescription.StoreName}</h1></p>
            <p>{FullDescription.Description}</p>
            <p>{FullDescription.Rating}</p>
            <div id='commentbox'>
                <img id="map" src={FullDescription.Location}></img>
                <p>
                    <textarea type="text" rows={21} cols={78} placeholder={FullDescription.Comment}></textarea>
                </p>
                <p>
                    <button type="button">Send</button>
                    <button type="clear">Clear</button>
                </p>

            </div>
            <button onClick={() => (Value < 1 ? setValue(Value + 1) : setValue(0))}>Next</button>  {/*Changing the web Content*/}
        </div>
    </>);
}

export default FullPage;

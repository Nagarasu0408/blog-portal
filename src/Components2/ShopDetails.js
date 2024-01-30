//ShopDetails.js

import { IceCreamParlor } from "./data";
import { useState } from "react";
import "./Main.css";

function ShopDetails() {
    const [search, setSearch] = useState("");
    console.log(search);
    return (<>
        <center>
            <input className="Search" type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}></input>
        </center>
        {
            IceCreamParlor.filter(e => e.StoreName.toLowerCase().includes(search)).map((e) =>
                <div className="Container-2">
                    <img className="StoreImage-2" src={e.Image}></img>
                    <h3>{e.StoreName}</h3>
                    <p>{e.Description}</p>
                    <p>{e.Rating}</p>
                </div>
            )
        }</>
    )
}

export default ShopDetails;
//ShopDetails.js

import { IceCreamParlor } from "./data";
import { useState } from "react";
import "./Main.css";
import SearchIcon from '@mui/icons-material/Search';

function ShopDetails() {
    const [search, setSearch] = useState('');
    console.log(search);
    return (<>
        <center>
            <input className="Search" type="text" placeholder='Search' onChange={e => setSearch(e.target.value)}></input>
        </center>
        <div className="Shop_Card">
            {
                IceCreamParlor.filter(e => e.StoreName.toLowerCase().includes(search)).map((e) =>
                    <div className="Container" key={e.StoreName} >
                        <img className="StoreImage" src={e.Image} alt={e.StoreName}></img>
                        <h3>{e.StoreName}</h3>
                        <p>{e.Description}</p>
                        <p>{e.Rating}</p>
                    </div>
                )
            }
            {
                IceCreamParlor.filter(e => e.StoreName.toLowerCase().includes(search)).length === 0 &&
                <div className="NotFoundMessage">
                    <p>Not Found</p>
                </div>
            }
        </div>
    </>
    )
}

export default ShopDetails;
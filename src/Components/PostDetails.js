//PostDetails.js
import Post from "./Post";

function PostDetails() {
    function Search() {
        return document.getElementById('display').innerHTML = "hello";
    }
    return (
        <>
            <div style={{ margin: '0px', backgroundColor: "lightgreen" }}>
                <center><h1>BLOG PORTAL</h1></center>
            </div>
            <div id='SearchBox'>
                <center>
                    <input type='text' name='SearchBar' placeHolder="Search Something" style={{ width: '50%', height: '20px', borderRadius: '10px', border: '4px solid whitesmoke', fontSize: '20px', padding: '10px' }}></input>
                    <button type="button" name="SearchButton" id='SearchBtn' onClick={Search} style={{ margin: '20px', width: '10%', height: '40px', textAlign: 'center', backgroundColor: 'transparent', borderRadius: '10px', border: '4px solid whitesmoke' }}>Search</button>
                </center>
            </div>
            <center><p id='display'></p></center>
            <div>
                <Post />
            </div>
        </>
    );
}

export function FullPostDetails() {
    return (console.log("Silk Ah....."));
}

export default PostDetails;
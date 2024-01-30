//Profile.js
import { UserData } from "./UserData";

function Profile() {
    return (<>
        <p>{UserData[0].UserName}</p>
    </>)
}

export default Profile;
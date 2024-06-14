//App.js

import './App.css';
import React from "react";
// import PostDetails from './Components/PostDetails';
// import SinglePost from './Components/SinglePost';
// import Main from './Components2/Main';
// import Card from './Components2/card';
import Home from './Components2/home';
import Place from './Components2/screens/Place';
import { Routes, Route } from 'react-router-dom'
// import Post from './Components/Post';
import Login from './Components2/Login form/Login';
import Register from './Components2/Login form/Register';
// import Profile from './Components2/Login form/Profile';
import Scroll from './Components2/screens/demo';
import Profile from './Components2/screens/Profile';
import OwnerProfile from './Components2/screens/OwnerProfile';
import OwnerRegistrationForm from './Components2/Login form/OwnerRegistrationForm';
import Geolocation from './Location/GeoLocation';
import UserHomeScreen from './Components2/screens/UserHOmeScreen';
import BusTicketBooking from './Components2/screens/bus';
import SeachPlace from './Components2/screens/SeachPlace';
import WelcomScreen from './Components2/screens/Welcome';
import PhotoGrid from './Components2/screens/PhotoGallery';
import Chatbot from './chatbot';
import OfferBanner from './Offer_Banner/offer';
import SliderComponent from './Location/PlaceDetail';
import Filter from './demoCode';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomScreen />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/User' element={<UserHomeScreen />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/BusTicket' element={<BusTicketBooking />}></Route>
        <Route path='/Place' element={<Place />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/allplaces' element={<SeachPlace />}></Route>
        <Route path='/Demo' element={<SliderComponent />}></Route>
        <Route path='/Owner' element={<OwnerProfile />}></Route>
        <Route path='/OwnerRegistration' element={<OwnerRegistrationForm />}></Route>
        <Route path='/location' element={<Geolocation />}></Route>
        <Route path='/Photo' element={<PhotoGrid />} />
        <Route path='/Chat' element={<Chatbot />} />
        <Route path='/offer' element={<OfferBanner />} />
        <Route path='/DD' element={<Filter />}></Route>



        {/* <Route path='/PostDetails' element={<PostDetails />}></Route>
        <Route path='/SinglePost' element={<SinglePost />}></Route>
        <Route path='/Main' element={<Main />}></Route>
        <Route path='/Card' element={<Card />}></Route>
        <Route path='/Post' element={<Post />}></Route> */}


        <Route path='*' element={<div><h1>404 Page Not Found</h1></div>}></Route>
      </Routes>
    </>);
}

export default App;

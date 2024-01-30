//App.js

import './App.css';
import React from "react";
import PostDetails from './Components/PostDetails';
import SinglePost from './Components/SinglePost';
import Main from './Components2/Main';
import Card from './Components2/card';
import Home from './Components2/home';
import Place from './Components2/screens/Place';
import { Routes, Route } from 'react-router-dom'
import Post from './Components/Post';
import Login from './Components2/Login form/Login';
import Register from './Components2/Login form/Register';
// import Profile from './Components2/Login form/Profile';
import Scroll from './Components2/screens/demo';
import Profile from './Components2/screens/Profile';
import OwnerProfile from './Components2/screens/OwnerProfile';
import OwnerRegistrationForm from './Components2/Login form/OwnerRegistrationForm';
function App() {
  return (<>


    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Place' element={<Place />}></Route>
      <Route path='/PostDetails' element={<PostDetails />}></Route>
      <Route path='/SinglePost' element={<SinglePost />}></Route>
      <Route path='/Main' element={<Main />}></Route>
      <Route path='/Card' element={<Card />}></Route>
      <Route path='/Post' element={<Post />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/Demo' element={<Scroll />}></Route>
      <Route path='/Owner' element={<OwnerProfile />}></Route>
      <Route path='/OwnerRegistration' element={<OwnerRegistrationForm />}></Route>

    </Routes>


  </>);
}

export default App;

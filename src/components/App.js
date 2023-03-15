import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "../features/userSlice";
import Feed from "./Feed";
import { auth } from "../firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widget from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in 
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        //user is not logged
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
            <Feed />
            <Widget/>
        </div>
      )}
    </div>
  );
}

export default App;

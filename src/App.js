import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // If Logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // If Logged Out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;

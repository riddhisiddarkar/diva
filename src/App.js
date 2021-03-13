import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import AppRouter from "./Router/AppRouter";
import { auth } from "./firebase";
import { selectUser, login } from "./features/appSlice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

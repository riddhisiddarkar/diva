import React, { useEffect } from "react";

import "./App.css";
import AppRouter from "./Router/AppRouter";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
    });
  }, []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

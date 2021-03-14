import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAPost from "../components/AddAPost/AddAPost";
import FullPageArticle from "../components/Articles/FullPageArticle/FullPageArticle";
import Forum from "../components/Forum/Forum";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainApp from "../components/MainApp/MainApp";
import Register from "../components/Register/Register";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/app" exact={true}>
          <MainApp />
        </Route>
        <Route path="/app/forum">
          <Forum />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addpost">
          <AddAPost />
        </Route>
        <Route path="/app/articles">
          <FullPageArticle />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;

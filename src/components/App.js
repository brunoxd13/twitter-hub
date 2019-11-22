import React, { useEffect } from "react";
import LoadingBar from "react-redux-loading";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const loading = useSelector(state => state.authedUser);

  return (
    <Router>
      <>
        <LoadingBar />
        <div className="container">
          <Nav />
          {loading === true ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </div>
          )}
        </div>
      </>
    </Router>
  );
};

export default App;

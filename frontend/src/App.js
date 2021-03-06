import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/SplashPage";
import EventPage from "./components/EventPage";
import SingleEvent from "./components/SingleEvent";
import AttendingPage from "./components/Attending";
import HostingPage from "./components/Hosting";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/events">
            <EventPage />
          </Route>
          <Route path='/events/:eventId'>
            <SingleEvent />
          </Route>
          <Route path='/users/:userId/attending'>
            <AttendingPage />
          </Route>
          <Route path='/users/:userId/hosting'>
            <HostingPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;

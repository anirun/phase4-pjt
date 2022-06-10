import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import HikesList from "../pages/HikesList";
import NewReview from "../pages/NewReview";
import HikeCard from "../pages/HikeCard";
// import ReviewsList from '../pages/ReviewsList';
import HikeReviewsList from '../pages/HikeReviewsList';
import UserCard from '../pages/UserCard';
import ReviewCard from '../pages/ReviewCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <p/>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/hikes/:id/reviews">
            <HikeReviewsList user={user} />
          </Route>
          <Route path="/reviews/:id">
            <ReviewCard user={user} />
          </Route>
          {/* <Route path="/users/:id/reviews">
            <ReviewsList user={user} />
          </Route> */}
          <Route path="/profile">
            <UserCard user={user} />
          </Route>          
          <Route path="/hikes/:id">
            <HikeCard user={user} />
          </Route>
          <Route path="/new">
            <NewReview user={user} />
          </Route>
          <Route path="/">
            <HikesList />
          </Route>
        </Switch>
      </main>
    </>
  );
}


export default App;

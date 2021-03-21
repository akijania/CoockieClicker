import React from "react";
import CookieButton from "../../features/CookieButton/CookieButton";
import CookieCounter from "../../features/CookieCounter/CookieCounter";
import ResetCounterButton from "../../features/ResetCounterButton/ResetCounterButton";

const Home = () => (
  <div>
    <CookieCounter />
    <ResetCounterButton />
    <CookieButton />
  </div>
);

export default Home;

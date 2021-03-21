import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/views/Home/Home";
import Achievements from "./components/views/Achievements/Achievements";
import Shop from "./components/views/Shop/Shop";
import { loadClicksAmount } from "./redux/clicksRedux";
import "./styles/bootstrap.scss";
import "./styles/global.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookieClicks = JSON.parse(localStorage.getItem(`cookieClicks`));
    if (cookieClicks && cookieClicks.clicksNumber !== null) {
      dispatch(loadClicksAmount(cookieClicks));
    }
  });

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};
export default App;

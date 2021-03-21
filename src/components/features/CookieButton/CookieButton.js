import React, { useEffect } from "react";
import Cookie from "../../../images/cookie.png";
import PropTypes from "prop-types";
import styles from "./CookieButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../../redux/clicksRedux";

const CookieButton = () => {
  useEffect(() => {
    if (cookies.intervalClick) {
      const interval = setInterval(() => {
        handleSetCount();
      }, 3000);
      return () => clearInterval(interval);
    }
  });
  const cookies = useSelector((state) => state.clicks);
  const dispatch = useDispatch();

  const handleSetCount = () => {
    let newClicksNumber = cookies.clicksNumber;
    let newLevel = cookies.level;
    let newNextLevelClicksNumber = cookies.nextLevelClicksNumber;
    if (cookies.doubleClick) {
      newClicksNumber = cookies.clicksNumber + 2;
    } else {
      newClicksNumber = cookies.clicksNumber + 1;
    }
    if (newClicksNumber >= newNextLevelClicksNumber) {
      newLevel++;
      newNextLevelClicksNumber = cookies.clicksPerLevel[newLevel];
    }
    const cookieClicks = {
      clicksNumber: newClicksNumber,
      level: newLevel,
      nextLevelClicksNumber: newNextLevelClicksNumber
    };
    dispatch(setCount(cookieClicks));
    localStorage.setItem("cookieClicks", JSON.stringify(cookieClicks));
  };
  return (
    <div className={styles.root}>
      <img onClick={handleSetCount} src={Cookie} alt="cookie"></img>
    </div>
  );
};

CookieButton.propTypes = {
  setCount: PropTypes.func
};

export default CookieButton;

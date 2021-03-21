import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./CookieCounter.module.scss";

const CookieCounter = () => {
  const cookies = useSelector((state) => state.clicks);
  return (
    <div className={styles.root}>
      <p>
        {`You collect:    `}
        <span className={styles.cookiesValues}>
          {cookies.clicksNumber} cookies
        </span>
      </p>
      <p>
        {"Your level:  "}
        <span className={styles.cookiesValues}>{cookies.level}</span>
      </p>
    </div>
  );
};

CookieCounter.propTypes = {
  loadClicksAmount: PropTypes.func,
  cookies: PropTypes.object
};

export default CookieCounter;

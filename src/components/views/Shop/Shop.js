import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Achievement from "../../features/Achievement/Achievement";
import PropTypes from "prop-types";
import styles from "./Shop.module.scss";
import { doubleClick, intervalClick } from "../../../redux/clicksRedux";

const Shop = () => {
  const dispatch = useDispatch();
  const clicksNumber = useSelector((state) => state.clicks.clicksNumber);
  const doubleClicker = useSelector((state) => state.clicks.doubleClick);
  const intervalClicker = useSelector((state) => state.clicks.intervalClick);
  const doubleBot = useSelector((state) => state.doubleBot);
  const intervalBot = useSelector((state) => state.intervalBot);
  const handleDoubleClick = () => {
    if (clicksNumber >= doubleBot.clicksToGet) {
      dispatch(doubleClick());
    }
  };
  const handleIntervalClick = () => {
    if (clicksNumber >= intervalBot.clicksToGet) {
      dispatch(intervalClick());
    }
  };
  return (
    <div className={styles.root}>
      <p className={styles.textNoAchiv}>
        {(!clicksNumber || clicksNumber < 100) && `No bot yet :( Get some!`}
      </p>

      <div className={styles.achievementBox}>
        <p>
          {(!clicksNumber || clicksNumber < doubleBot.clicksToGet) &&
            ` You need ${
              doubleBot.clicksToGet - clicksNumber
            } more cookies to get this bot`}
        </p>
        <div
          className={doubleClicker ? styles.botBox : ""}
          onClick={handleDoubleClick}
        >
          <Achievement {...doubleBot} />
        </div>
      </div>
      <div className={styles.achievementBox}>
        <p>
          {(!clicksNumber || clicksNumber < intervalBot.clicksToGet) &&
            ` You need ${
              intervalBot.clicksToGet - clicksNumber
            } more cookies to get this bot`}
        </p>
        <div
          className={intervalClicker ? styles.botBox : ""}
          onClick={handleIntervalClick}
        >
          <Achievement {...intervalBot} />
        </div>
      </div>
    </div>
  );
};

Shop.propTypes = {
  clicksNumber: PropTypes.number,
  doubleBot: PropTypes.object,
  intervalBot: PropTypes.object
};

export default Shop;

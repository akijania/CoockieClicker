import React from "react";
import styles from "./Achievements.module.scss";
import { useSelector } from "react-redux";
import Achievement from "../../features/Achievement/Achievement";
import PropTypes from "prop-types";

const Achievements = () => {
  const clicksNumber = useSelector((state) => state.clicks.clicksNumber);
  const achievementsList = useSelector((state) => state.achievements);

  return (
    <div className={styles.root}>
      <p className={styles.textNoAchiv}>
        {(!clicksNumber || clicksNumber < 100) &&
          `No achievement yet :( Get some!`}
      </p>
      {achievementsList.map((achievement) => (
        <div key={achievement.id} className={styles.achievementBox}>
          <p>
            {(!clicksNumber || clicksNumber < achievement.clicksToGet) &&
              ` You need ${
                achievement.clicksToGet - clicksNumber
              } more cookies to get this achievement`}
          </p>
          <Achievement {...achievement} />
        </div>
      ))}
    </div>
  );
};

Achievements.propTypes = {
  clicksNumber: PropTypes.number,
  achievementsList: PropTypes.array
};

export default Achievements;

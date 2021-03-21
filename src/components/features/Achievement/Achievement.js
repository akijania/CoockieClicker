import React from "react";
import styles from "./Achievement.module.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Achievement = ({ title, description, image, clicksToGet }) => {
  const clicksNumber = useSelector((state) => state.clicks.clicksNumber);
  return (
    <div className={styles.root}>
      <div
        className={
          clicksToGet > clicksNumber
            ? `${styles.box} ${styles.overlay}`
            : styles.box
        }
      >
        <div className="card">
          <div className="row g-0">
            <div className={`col-md-4 ${styles.image}`}>
              <img src={image} alt={title}></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Achievement.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  clicksToGet: PropTypes.number,
  clicksNumber: PropTypes.number
};
export default Achievement;

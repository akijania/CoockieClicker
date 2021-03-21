import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { resetCount } from "../../../redux/clicksRedux";

const ResetCounterButton = () => {
  const dispatch = useDispatch();
  const handleResetCount = () => {
    dispatch(resetCount());
    const cookieClicks = {
      clicksNumber: 0,
      level: 0,
      nextLevelClicksNumber: 10
    };
    localStorage.setItem("cookieClicks", JSON.stringify(cookieClicks));
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleResetCount}
        className="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  );
};

ResetCounterButton.propTypes = {
  resetCount: PropTypes.func
};

export default ResetCounterButton;

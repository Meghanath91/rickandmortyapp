import React from "react";
import animation from "../Animation/loading.gif";
import '../css/style.css';

/**
   * @func Loading
   * @return {HTML}
   */
const Loading = () => {
  return (
    <div className="loading-container">
      <p>Loading..</p>
      <img className="loading-img" src={animation} alt="loading" />
    </div>
  );
};
export default Loading;

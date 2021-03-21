import React from "react";
import animation from "../Animation/loading.gif";

const Loading = () => {
  return (
    <div className="load-container">
      <img src={animation} alt="loading" />
    </div>
  );
};
export default Loading;

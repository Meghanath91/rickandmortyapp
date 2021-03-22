import React from 'react'
import animation from "../Animation/error.gif"
/**
   * @func Error
   * @return {HTML}
   */
export default function Error() {
  return (
    <div className="load-container">
      <img src={animation} alt="error" />
    </div>
  );
}

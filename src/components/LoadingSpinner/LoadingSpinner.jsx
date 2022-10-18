// https://contactmentor.com/how-to-add-loading-spinner-react-js/
import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      );
};

export default LoadingSpinner;
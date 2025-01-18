import React, { useEffect } from "react";

const EyeTracker = () => {
  useEffect(() => {
    // Initialize WebGazer
    const webgazer = window.webgazer;

    if (webgazer) {
      webgazer
        .setGazeListener((data, elapsedTime) => {
          if (data) {
            console.log(`X: ${data.x}, Y: ${data.y}, Time: ${elapsedTime}`);
          }
        })
        .begin();

      // Optional: Disable video preview and overlays
      webgazer.params.showVideoPreview = false;
      webgazer.params.showFaceOverlay = false;
      webgazer.params.showFaceFeedbackBox = false;
    }

    // Cleanup WebGazer on component unmount
    return () => {
      if (webgazer && typeof webgazer.end === "function") {
        webgazer.end();
      }
    };
  }, []); // Empty dependency array ensures this runs only once (on mount/unmount)

  return (
    <div>
      <h1>Eye Tracker</h1>
      <div
        id="focus-area"
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "lightblue",
          margin: "20px auto",
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        Focus Area
      </div>
    </div>
  );
};

export default EyeTracker;
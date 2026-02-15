import React, { useEffect } from "react";

const MapService = ({ timestamp, mapKey }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `loadMap('#daumRoughmapContainer${timestamp}', '${timestamp}', '${mapKey}')`;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="map"
      style={{
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <div
        id={`daumRoughmapContainer${timestamp}`}
        className="root_daum_roughmap root_daum_roughmap_landing daumRoughmapContainer"
      ></div>
    </div>
  );
};

export default MapService;

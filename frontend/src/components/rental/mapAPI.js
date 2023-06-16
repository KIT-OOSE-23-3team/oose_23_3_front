import React, { useEffect } from "react";

const { kakao } = window;

function MapAPI() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.145677, 128.3923179),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

export default MapAPI;

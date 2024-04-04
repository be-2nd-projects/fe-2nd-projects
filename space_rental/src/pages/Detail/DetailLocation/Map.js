import React, { useEffect, useRef } from 'react';

const { kakao } = window;

const Map = () => {

  const mapContainer = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);


  }, []);

  return (
    <div className='rounded-lg h-full' ref={mapContainer}></div>
  );
};

export default Map;
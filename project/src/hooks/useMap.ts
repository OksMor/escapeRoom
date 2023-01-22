import {useEffect, useState, useRef, MutableRefObject} from 'react';

import L, {Map, TileLayer} from 'leaflet';

import { CONTACTS_LOCATION, MAP_ZOOM } from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (map !== null && map !== undefined) {
      map.setView(new L.LatLng(CONTACTS_LOCATION.coords[0], CONTACTS_LOCATION.coords[1]));
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker){
          layer.remove();
        }
      });
    }
    if (mapRef.current !== null
      && !isRendered.current
    ) {
      if (map === null || map === undefined) {
        const instance = new Map(mapRef.current, {
          center: {
            lat: CONTACTS_LOCATION.coords[0],
            lng: CONTACTS_LOCATION.coords[1],
          },
          zoom: MAP_ZOOM,
        });
        const layer = new TileLayer (
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        );
        instance.addLayer(layer);
        setMap(instance);
      }
      isRendered.current = true;
    }
  }, [mapRef, map, isRendered]);

  return map;
}

export default useMap;

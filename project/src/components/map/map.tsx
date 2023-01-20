import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

import { Icon, Marker, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UrlMapMarket } from '../../const';
import { MarkerLocation } from '../../types/types';

type MapProps = {
  locations: MarkerLocation[];
  selectedPoint: MarkerLocation | undefined;
  onClickFunction: (e: LeafletMouseEvent) => void;
};

const defaultCustomIcon = new Icon ({
  iconUrl: UrlMapMarket.Default,
  iconSize: [27,39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon ({
  iconUrl: UrlMapMarket.Current,
  iconSize: [27,39],
  iconAnchor: [20,40],
});

function Map ({ locations, selectedPoint, onClickFunction } : MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const marker = new Marker ({
          lat: location.lat,
          lng: location.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && location.lat === selectedPoint.lat && location.lng === selectedPoint.lng
              ? currentCustomIcon
              : defaultCustomIcon
          ).on('click', onClickFunction)
          .addTo(map);
      });
    }
  }, [map, locations, selectedPoint, onClickFunction]);

  return(
    <div className = "map__container" ref = {mapRef}></div>
  );
}

export default Map;

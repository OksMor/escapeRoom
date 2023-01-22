import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

import { Icon, Marker, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UrlMapMarket } from '../../const';
import { QuestLocation } from '../../types/types';

type MapProps = {
  locations: QuestLocation[];
  selectedPoint: QuestLocation | undefined;
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
          lat: location.coords[0],
          lng: location.coords[1],
        });

        marker
          .setIcon(
            selectedPoint !== undefined && location.coords[0] === selectedPoint.coords[0] && location.coords[1] === selectedPoint.coords[1]
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

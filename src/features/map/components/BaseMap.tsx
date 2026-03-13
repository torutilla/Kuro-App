import {
  MapContainer,
  Marker,
  TileLayer,
  type MapContainerProps,
} from "react-leaflet";
import type { MarkerInfo } from "../types/mapTypes.ts";
import PopupCard from "./PopupCard.tsx";
import MapController from "./MapController.tsx";
import { useCurrentLocation } from "@shared/context/CurrentLocationProvider.tsx";
import { useMapProvider } from "./MapProvider.tsx";
import { useEffect } from "react";

type BaseMapProps = MapContainerProps & {
  markers: MarkerInfo[];
};
function BaseMap({ markers, center, zoom = 13, ...props }: BaseMapProps) {
  const { setFlyToTarget } = useMapProvider();
  const { location } = useCurrentLocation();
  useEffect(() => {
    if (!location) return;
    setFlyToTarget(location);
  }, [location]);
  return (
    <MapContainer
      {...props}
      zoom={zoom}
      center={center}
      className="h-full w-full z-1"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
      {markers.map((marker) => (
        <Marker position={marker.latLng} key={marker.title}>
          {marker.markerType !== "current" && <PopupCard />}
        </Marker>
      ))}
      {location && <Marker position={location} />}
    </MapContainer>
  );
}

export default BaseMap;

import {
  MapContainer,
  Marker,
  Pane,
  Popup,
  TileLayer,
  type MapContainerProps,
} from "react-leaflet";
import type { MarkerInfo } from "../types/mapTypes.ts";
import MapController from "./MapController.tsx";
import { useCurrentLocation } from "@shared/context/CurrentLocationProvider.tsx";
import { useMapProvider } from "./MapProvider.tsx";
import { useEffect } from "react";
import { createIcon, statusMarker } from "./Markers.tsx";
import PetPopup from "./PetPopup.tsx";

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
      <Pane name="base" style={{ zIndex: 400 }} />
      <Pane name="highlight" style={{ zIndex: 500 }} />
      <Pane name="top" style={{ zIndex: 600 }} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
      {markers.map((marker) => (
        <Marker
          pane={marker.markerType == "current" ? "top" : "base"}
          position={marker.latLng}
          key={marker.pet?.id}
          icon={createIcon(statusMarker[marker.markerType])}
        >
          <Popup>{marker.pet && <PetPopup pet={marker.pet} />}</Popup>
        </Marker>
      ))}
      {location && (
        <Marker position={location} icon={createIcon(statusMarker.current)} />
      )}
    </MapContainer>
  );
}

export default BaseMap;

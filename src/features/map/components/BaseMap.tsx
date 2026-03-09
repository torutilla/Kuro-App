import {
  MapContainer,
  Marker,
  TileLayer,
  type MapContainerProps,
} from "react-leaflet";
import type { MarkerInfo } from "../types/mapTypes.ts";
import PopupCard from "./PopupCard.tsx";

type BaseMapProps = MapContainerProps & {
  markers: MarkerInfo[];
};
function BaseMap({
  markers,
  center = [14.6507, 121.1029],
  zoom = 13,
  ...props
}: BaseMapProps) {
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
      {markers.map((marker) => (
        <Marker position={marker.latLng} key={marker.title}>
          {marker.markerType !== "current" && <PopupCard />}
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BaseMap;

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMapProvider } from "./MapProvider.tsx";
import PopupCard from "./PopupCard.tsx";
function Map() {
  const { markers } = useMapProvider();
  return (
    <MapContainer>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => {
        return (
          <Marker position={marker.latLng}>
            <PopupCard />
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;

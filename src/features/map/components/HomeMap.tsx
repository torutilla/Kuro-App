import { useMapProvider } from "./MapProvider.tsx";
import BaseMap from "./BaseMap.tsx";
import type { LatLngTuple } from "leaflet";

function HomeMap({ center }: { center: LatLngTuple }) {
  const { markers } = useMapProvider();
  return <BaseMap markers={markers} zoomControl={false} center={center} />;
}

export default HomeMap;

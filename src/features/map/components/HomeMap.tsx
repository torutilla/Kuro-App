import { useMapProvider } from "./MapProvider.tsx";

import BaseMap from "./BaseMap.tsx";

function HomeMap() {
  const { markers } = useMapProvider();
  return <BaseMap markers={markers} zoomControl={false} />;
}

export default HomeMap;

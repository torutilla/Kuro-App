import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useMapProvider } from "./MapProvider";

function MapController() {
  const map = useMap();
  const { flyToTarget, setFlyToTarget } = useMapProvider();

  useEffect(() => {
    if (flyToTarget) {
      map.flyTo(flyToTarget, 12, { duration: 1, easeLinearity: 1 });
    }
  }, [flyToTarget, map, setFlyToTarget]);

  return null;
}

export default MapController;

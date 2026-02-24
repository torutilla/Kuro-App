import { createContext, useContext, useState } from "react";
import type { MarkerInfo } from "../types/mapTypes.ts";

type MapProviderType = {
  markers: MarkerInfo[];
  setMarkers: React.Dispatch<React.SetStateAction<MarkerInfo[]>>;
};
const MapProviderContext = createContext<MapProviderType | null>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [markers, setMarkers] = useState<MarkerInfo[]>([]);
  return (
    <MapProviderContext value={{ markers, setMarkers }}>
      {children}
    </MapProviderContext>
  );
}

export function useMapProvider() {
  const context = useContext(MapProviderContext);
  if (!context) throw new Error("Provider not attached");

  return context;
}

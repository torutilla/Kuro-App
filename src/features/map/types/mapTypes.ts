import type { LatLngTuple } from "leaflet";
export type MarkerInfo = {
    title: string;
    description: string;
    latLng: LatLngTuple;
    markerType: "current" | "lost" | "found";
}
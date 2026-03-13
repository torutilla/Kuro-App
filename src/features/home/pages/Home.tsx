import useInfiniteScroll from "@shared/hooks/useInfiniteScroll.tsx";
import PetGrid from "../components/layout/PetGrid.tsx";
import useFetchPets from "../hooks/useFetchPets.tsx";
import { useEffect, useRef } from "react";
import LoadingScreen from "@shared/components/layout/LoadingScreen.tsx";
import HomeMap from "@features/map/components/HomeMap.tsx";

import { useCurrentLocation } from "@shared/context/CurrentLocationProvider.tsx";
import { useMapProvider } from "@features/map/components/MapProvider.tsx";
import type { MarkerInfo } from "../../map/types/mapTypes.ts";

function Home() {
  const { pets, loading, loadMore, hasMore } = useFetchPets();
  const { location } = useCurrentLocation();
  const { setMarkers } = useMapProvider();
  const { ref } = useInfiniteScroll({
    callback: loadMore,
    hasMore: hasMore,
    loading: loading,
  });
  const didRun = useRef(false);
  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    loadMore();
  }, []);
  useEffect(() => {
    if (pets.length > 0) {
      setMarkers(
        pets
          .filter((pet) => pet.location_point)
          .map((pet) => ({
            title: pet.name,
            description: pet.description,
            latLng: [pet.location_point!.lat, pet.location_point!.lng],
            markerType: pet.status,
          })),
      );
    }
  }, [pets]);
  return (
    <div className="bg-white h-full grid grid-cols-2">
      {loading && <LoadingScreen />}
      <HomeMap center={location ?? [14.6507, 121.1029]} />
      <div className="overflow-y-auto p-2">
        <PetGrid pets={pets} />
      </div>
    </div>
  );
}

export default Home;

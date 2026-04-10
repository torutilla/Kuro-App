import useFetchPets from "../hooks/useFetchPets.tsx";
import { useEffect, useRef } from "react";
import LoadingScreen from "@shared/components/layout/LoadingScreen.tsx";
import HomeMap from "@features/map/components/HomeMap.tsx";

import { useCurrentLocation } from "@shared/context/CurrentLocationProvider.tsx";
import { useMapProvider } from "@features/map/components/MapProvider.tsx";
import useSocketEvent from "@shared/hooks/useSocketEvent.tsx";
import PetDrawer from "../components/layout/PetDrawer.tsx";
import Button from "../../../shared/components/common/Button.tsx";
import { LocationSearching } from "@mui/icons-material";

function Home() {
  const { pets, loading, loadMore, addPet } = useFetchPets();
  const { location } = useCurrentLocation();
  const { setMarkers, setFlyToTarget } = useMapProvider();

  useSocketEvent({
    event: "pet:added",
    callback: addPet,
  });

  const didRun = useRef(false); // to be removed when prod.
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
            pet: pet,
            latLng: [pet.location_point!.lat, pet.location_point!.lng],
            markerType: pet.status,
          })),
      );
    }
  }, [pets]);

  return (
    <div className="bg-white h-full">
      {loading && <LoadingScreen />}
      <div className="absolute m-2 bottom-0 z-40 ">
        <Button
          variant={"solid"}
          color="grayscale"
          className="px-2 drop-shadow-sm"
          onClick={() => {
            if (!location) return;
            console.log(`flying to: ${location}`);
            setFlyToTarget([...location]);
          }}
        >
          <LocationSearching />
        </Button>
        <Button className="rounded-full pl-3 pr-3 lg:hidden">+</Button>
      </div>
      <HomeMap center={location ?? [14.6507, 121.1029]} />

      <PetDrawer pets={pets} />
    </div>
  );
}

export default Home;

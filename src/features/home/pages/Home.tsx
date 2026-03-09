import useInfiniteScroll from "@shared/hooks/useInfiniteScroll.tsx";
import PetGrid from "../components/layout/PetGrid.tsx";
import useFetchPets from "../hooks/useFetchPets.tsx";
import { useEffect, useRef } from "react";
import LoadingScreen from "@shared/components/layout/LoadingScreen.tsx";
import HomeMap from "@features/map/components/HomeMap.tsx";
import { useMapProvider } from "@features/map/components/MapProvider.tsx";

function Home() {
  const { pets, loading, loadMore, hasMore } = useFetchPets();
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
    setMarkers([
      {
        title: "Current location",
        latLng: [14.6507, 121.1029],
        description: "Desc",
        markerType: "current",
      },
    ]);
  }, []);

  return (
    <div className="bg-white h-screen">
      {loading && <LoadingScreen />}
      <HomeMap />
    </div>
  );
}

export default Home;

import useInfiniteScroll from "@shared/hooks/useInfiniteScroll.tsx";
import PetGrid from "../components/layout/PetGrid.tsx";
import useFetchPets from "../hooks/useFetchPets.tsx";
import { useEffect } from "react";
import LoadingScreen from "@shared/components/layout/LoadingScreen.tsx";

function Home() {
  const { pets, loading, loadMore, hasMore } = useFetchPets();
  const { ref } = useInfiniteScroll({
    callback: loadMore,
    hasMore: hasMore,
    loading: loading,
  });
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <div className="p-4 bg-white h-screen">
      {loading && <LoadingScreen />}
      <PetGrid pets={pets} />
      <div ref={ref} />
    </div>
  );
}

export default Home;

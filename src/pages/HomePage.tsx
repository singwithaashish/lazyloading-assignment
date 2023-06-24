import { useCallback, useEffect, useRef, useState } from "react";
import { APIResponse, Passenger } from "../typings";
import PassengerCard from "../components/ui/PassengerCard";
import Header from "../components/layout/Header";

export default function HomePage() {
  const [data, setData] = useState<Passenger[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => res.json())
      .then((res: APIResponse) => {
        setData((prevData) => [...prevData, ...res.data]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [page]);

  // using this instead of scroll listener because scroll listener can trigger many times per second and runs on the main thread which can cause jank when data is large and user is scrolling fast

  const observer = useRef<IntersectionObserver | null>(null);
  const lastDataElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      // if there is an observer already, disconnect it
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        // if the last data element is visible, load more data
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
        
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Header />
      <div className="flex pt-5 flex-col justify-center items-center min-h-screen w-screen bg-gray-200 text-gray-900 font-mono">
        {data.map((item: Passenger, index: number) => {
          if (data.length - index == 2) {
            // this is the second last data element so we add a ref to it to track when user reaches almost end of page
            return (
              <PassengerCard
                passenger={item}
                key={item._id+index.toString()}
                ref={lastDataElementRef}
              />
            );
          } else {
            return (
              <PassengerCard
                passenger={item}
                key={item._id + index.toString()}
              />
            );
          }
        })}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </div>
    </>
  );
}

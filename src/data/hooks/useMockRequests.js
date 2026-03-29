import { useEffect, useState } from "react";

export default function useMockRequest(requestFn, dependencies = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function runRequest() {
      setIsLoading(true);
      setError("");

      try {
        const result = await requestFn();

        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    runRequest();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, isLoading, error };
}

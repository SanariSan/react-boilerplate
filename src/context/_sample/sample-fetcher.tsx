import type { ReactNode } from "react";
import { useContext, useEffect } from "react";
import { SampleContext } from "./sample-context";

export const SampleFetcher = ({ children }: { children: ReactNode }) => {
  const { fetchSample } = useContext(SampleContext);

  // initial context data fetching
  useEffect(() => {
    const abortController = new AbortController();

    void fetchSample({ signal: abortController.signal });
    // void fetchSample2({ signal: abortController.signal });

    return () => {
      abortController.abort();
    };
  }, [fetchSample]);

  return <>{children}</>;
};

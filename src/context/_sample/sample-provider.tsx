import { useCallback, useRef, useState } from "react";
import type { TSampleProviderProps } from "./sample-provider.type";
import type {
  TSampleEffects,
  TSampleReactive,
  TSampleStates,
} from "./sample-context.type";
import { SAMPLE_DEFAULT } from "./sample-context.const";
import { SampleContext } from "./sample-context";
import { concatSampleEffect, fetchSampleEffect } from "./effects";
import { SampleFetcher } from "./sample-fetcher";

export const SampleProvider = ({ children }: TSampleProviderProps) => {
  // STATES & PRIVATE SETTERS -------------
  const [sampleState, _setSampleState] =
    useState<TSampleStates["sampleState"]>(SAMPLE_DEFAULT);

  // REACTIVE SETUP -------------
  const reactiveRef = useRef({} as TSampleReactive);
  reactiveRef.current = {
    states: { sampleState },
    setters: { _setSampleState },
  };

  // EFFECTS = PUBLIC SETTERS & SIDE EFFECTS -------------
  const concatSample: TSampleEffects["concatSample"] = useCallback(
    (...args) => {
      concatSampleEffect(reactiveRef)(...args);
    },
    []
  );

  const fetchSample: TSampleEffects["fetchSample"] = useCallback(
    (...args) => fetchSampleEffect(reactiveRef)(...args),
    []
  );

  return (
    <SampleContext.Provider value={{ sampleState, concatSample, fetchSample }}>
      <SampleFetcher>{children}</SampleFetcher>
    </SampleContext.Provider>
  );
};

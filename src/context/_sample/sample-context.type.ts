import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import type { TConcatSample, TFetchSample } from "./effects";

// STATES ------------------------
export type TSampleStates = {
  sampleState: string;
};

// STATES SETTERS -------------------
export type TSampleSetters = {
  _setSampleState: Dispatch<SetStateAction<string>>;
};

// REACTIVE SETUP ---------------------
export type TSampleReactive = {
  states: TSampleStates;
  setters: TSampleSetters;
};
export type TSampleReactiveRef = MutableRefObject<TSampleReactive>;

// EFFECTS -----------------------------
export type TSampleEffects = {
  concatSample: TConcatSample;
  fetchSample: TFetchSample;
};

// FINAL CONTEXT ------------------------
export type TSampleContext = TSampleStates & TSampleEffects;

import { createContext } from "react";
import type { TSampleContext } from "./sample-context.type";

export const SampleContext = createContext<TSampleContext>(
  {} as TSampleContext
);

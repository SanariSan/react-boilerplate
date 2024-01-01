import { sleep } from "helpers";
import type { TSampleReactiveRef } from "../sample-context.type";

// showcase only, use actual controller
const apiController = { req: async () => sleep(1000).then(() => "ok") };

export const fetchSampleEffect =
  (reactiveRef: TSampleReactiveRef) =>
  async ({ signal }: { signal: AbortSignal }) => {
    const {
      setters: { _setSampleState },
    } = reactiveRef.current;

    const response = await apiController.req();

    if (signal.aborted) return;

    _setSampleState(response);
  };

export type TFetchSample = ReturnType<typeof fetchSampleEffect>;

import type { TSampleReactiveRef } from "../sample-context.type";

export const concatSampleEffect =
  (reactiveRef: TSampleReactiveRef) => (someParam: string) => {
    const {
      states: { sampleState },
      setters: { _setSampleState },
    } = reactiveRef.current;

    if (someParam === "test") {
      _setSampleState(`${sampleState} ${someParam}`);
    }
  };

export type TConcatSample = ReturnType<typeof concatSampleEffect>;

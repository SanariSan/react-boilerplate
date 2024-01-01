import { type FC } from "react";
import { ContentComponent } from "./content.component";
import type { TContentContainer } from "./content.type";

export const ContentContainer: FC<TContentContainer> = () => {
  const x = 1;

  return <ContentComponent />;
};

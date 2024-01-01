import { Box, Button } from "@mui/material";
import { useState, type FC } from "react";
import s from "./content.module.scss";
import type { TContentComponent } from "./content.type";

export const ContentComponent: FC<TContentComponent> = () => {
  const [rerenderTrigger, forceRerender] = useState("");

  const onActionCb = () => {
    forceRerender(Math.random().toString());
  };

  return (
    <Box className={s.contentInnerWrap}>
      <Box key={rerenderTrigger}>to be rerendered</Box>
      <Button
        onClick={onActionCb}
        variant="contained"
        fullWidth
        color="secondary"
        sx={{ minHeight: "55px", fontWeight: 600 }}
      >
        Action
      </Button>
    </Box>
  );
};

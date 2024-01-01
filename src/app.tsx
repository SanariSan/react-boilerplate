import { Box, Typography } from "@mui/material";
import { ContentContainer } from "components/content";
import { LogsComponent } from "logs";
import "react-toastify/dist/ReactToastify.css";
import s from "./app.module.scss";

const App = () => (
  <Box className={s.App}>
    <Typography variant="h2">Title</Typography>
    <Box className={s.contentWrap}>
      <ContentContainer />
      <LogsComponent />
    </Box>
  </Box>
);

export { App };

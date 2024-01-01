import { SampleProvider } from "context/_sample";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { App } from "./app";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SampleProvider>
      <App />
    </SampleProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      limit={20}
      theme="dark"
    />
  </React.StrictMode>
);

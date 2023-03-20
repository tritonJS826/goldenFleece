import {StrictMode, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "src/App";
import "src/Index.scss";

const loadingMarkup = (
  <h2 style={{textAlign: "center"}}>
    Loading...
  </h2>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Suspense fallback={loadingMarkup}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Suspense>,
);


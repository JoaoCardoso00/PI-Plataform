import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

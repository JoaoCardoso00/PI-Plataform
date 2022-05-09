import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/index";
import { AppRoutes } from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
    
  );
}

export default App;

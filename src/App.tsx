import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;

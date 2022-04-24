import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home.js";
import RenderEvent from "./Events/RenderEvent";
import Header from "./Header";
import Footer from "./Footer";
import RenderFruit from "./Events/RenderFruit";
import { Label } from "@mui/icons-material";
function App() {
  return (
    <>
      <Header />
      {/* <RenderFruit />/ */}
      <RenderEvent />
      {/* <Footer/> */}
    </>
  );
}

export default App;

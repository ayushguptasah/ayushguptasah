import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./PortfolioContainer/Footer";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;

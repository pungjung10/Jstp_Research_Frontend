import Business from "./components/Business";
import Farmer from "./components/Farmer";
import Header from "./components/Header";

import "./styles/App.css";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* <Business /> */}
        <Farmer />
      </div>
    </div>
  );
}

export default App;

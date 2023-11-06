import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design1 from "./Designs/Design1/Design1";
import Design2 from "./Designs/Design2/Design2";
import Design3 from "./Designs/Design3/Design3";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/design/1" element={<Design1 />} />
          <Route path="/design/2" element={<Design2 />} />
          <Route path="/design/3" element={<Design3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Design1 from "./Designs/Design1/Design1";
import Design2 from "./Designs/Design2/Design2";
import Design3 from "./Designs/Design3/Design3";
import Design4 from "./Designs/Design4/Design4";
import Design5 from "./Designs/Design5/Design5";
import Design6 from "./Designs/Design6/Design6";
import Layout from "./Layout";
import { useRef } from "react";
import Header from "./components/Header/Header";
import Design7 from "./Designs/Design7/Design7";

const App = () => {
  const resumeRef = useRef();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/design/1" element={<Design1 />} />
          <Route path="/design/2" element={<Design2 />} />
          <Route path="/design/3" element={<Design3 />} />
          <Route path="/design/4" element={<Design4 />} />
          <Route path="/design/5" element={<Design5 />} />
          <Route path="/design/6" element={<Design6 />} />
          <Route path="/design/7" element={<Design7 />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

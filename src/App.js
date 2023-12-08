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
import Layout from "./Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/resume/" element={<Layout />}>
        <Route path="design/1" element={<Design1 />} />
        <Route path="design/2" element={<Design2 />} />
        <Route path="design/3" element={<Design3 />} />
        <Route path="design/3" element={<Design4 />} />
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

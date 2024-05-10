import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default App;

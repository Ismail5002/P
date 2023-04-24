import React from "react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";

const App = () => {
  return (
    <div className="bg-background  w-[100%] h-[100%]">
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;

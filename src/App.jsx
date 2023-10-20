import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SelectButtons  from "./components/SelectButtons";
import Footer from "./components/Footer";


function App() {
  return (
    <>
  

      <div className="app-container w-3/4 m-auto md:my-10 lg:my-10" >
        < NavBar />
        < Banner />
        < SelectButtons />

        < Footer />

      </div>

  

    </>
  );
}

export default App;

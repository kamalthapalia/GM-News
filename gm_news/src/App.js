import React, { useEffect } from "react";
import "./App.css";
import NewsPage from "./components/NewsPage/NewsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Upload from "./components/Upload/Upload";
import { GET } from "./fetch";
import Breaking from "./components/Breaking/Breaking";
import Hot from "./components/Hot/Hot";
import All from "./components/All/All";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Home from "./Pages/Homepage/Home";

function App() {
  useEffect(() => {
    document.title = "GM News";
  }, []);

  // const test = true;
  // if (test) document.title = "Test Mode";
  // return (
  //   <React.Fragment>
  //     <NewsPage />
  //   </React.Fragment>
  // );

  return (
    <div className=" text-slate-100">
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Hot" element={<Hot />} />
          <Route path="/All" element={<All />} />
        </Route>
      </Routes>

      {/* <NavBar />
      <Upload />
      <NewsPage />
      <Breaking />
      <Hot />
      <All /> */}
    </div>
  );
}

export default App;

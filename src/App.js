import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import Home from "../src/pages/Home";
import NBA from "./pages/NBA";
import NFL from "./pages/NFL";
import NHL from "./pages/NHL";
import MLB from "./pages/MLB";
import NCAAF from "./pages/NCAAF";
import NCAAB from "./pages/NCAAB";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />}>
            <Route index element={<Home />} />
            <Route path="/NBA" element={<NBA />} />
            <Route path="/NFL" element={<NFL />} />
            <Route path="/MLB" element={<MLB />} />
            <Route path="/NHL" element={<NHL />} />
            <Route path="/NCAAF" element={<NCAAF />} />
            <Route path="/NCAAB" element={<NCAAB />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

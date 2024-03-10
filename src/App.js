import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Display from "./components/Display";
import Home from "../src/pages/Home";
import NBA from "./pages/NBA";
import NFL from "./pages/NFL";
import NHL from "./pages/NHL";
import MLB from "./pages/MLB";
import NCAAF from "./pages/NCAAF";
import NCAAB from "./pages/NCAAB";
import { util } from "./data-and-functions/Utility";
import "./App.css";

function App() {
  const [state, setState] = useState({
    topGamesUrl: "https://sportspage-feeds.p.rapidapi.com/games",
    logosUrl: "https://score-room.p.rapidapi.com/SCOREROOM_CLIENT?fetchTeams=true",
    topGamesArray: "",
    gameOptions: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "sportspage-feeds.p.rapidapi.com",
      },
    },
    logoOptions: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "score-room.p.rapidapi.com",
      },
    },
    getData: (url, options, saveLocation) => {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setState((prevstate) => {
            return { ...prevstate, [saveLocation]: data };
          });
        });
    },
  });
  console.log(state);
  useEffect(() => {
    state.getData(state.topGamesUrl, state.gameOptions, state.topGamesArray);
  }, []);
  console.log(state);
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

// [NEXT STEP]
// WE ARE TRYING TO GET THE GET DATA FUNCTION TO TAKE A PARAMETER THAT SPECIFIES THE LOCATION OF
// WHERE IT IS SUPPOSED TO BE SAVED .... WE SUCCESSFULLY SAVE THE RESULTS IN TO STATE BUT IT
// IS BEING SAVED UNDER A NAMELESS STRING AND NOT THE STRING WE CURRENTLY WANT WHICH IS
// TOPGAMESARRAY... TRY TO SEE IF WE CAN SUCCESSFULLY USE SETSTATE TO SPECIFICALLY UPDATE
// STATE.TOPGAMESARRAY WITH THE DATA BEING RETURNED FROM THE API.

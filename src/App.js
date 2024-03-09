import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Display from "./components/Display";
import Home from "../src/pages/Home";
import NBA from "./pages/NBA";
import NFL from "./pages/NFL";
import NHL from "./pages/NHL";
import MLB from "./pages/MLB";
import NCAAF from "./pages/NCAAF";
import NCAAB from "./pages/NCAAB";
import { util } from "./pages/Utility";
import "./App.css";

function App() {
  const [state, setState] = useState({
    top100GamesUrl: "https://sportspage-feeds.p.rapidapi.com/games",
    restOfGamesUrl: "https://sportspage-feeds.p.rapidapi.com/games?skip=100",
    apiOptions: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "sportspage-feeds.p.rapidapi.com",
      },
    },
    getData: (url, options) => {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    getAllGames: (url1, url2, options, getDataFunc) => {
      let top100games = getDataFunc(url1, options);
      let restOfGames = getDataFunc(url2, options);
      let topGamesArr = top100games.results;
      let restOfGamesArr = restOfGames.results;
      let allGames = [...topGamesArr, ...restOfGamesArr];
      console.log(allGames);
      return allGames;
    },
  });

  function setUpPage() {
    let allGames = state.allGames(state.top100GamesUrl, state.restOfGamesUrl, state.apiOptions, state.getData);
    let lessThan = allGames.length;
    let randomNumber = util.createRandomNumber(lessThan);
    let featuredGame = allGames[randomNumber];
    util.saveToLocalStorage("featuredGame", featuredGame);
  }

  // **********************************************************************************
  //Test area for trying our code without calling the actual API due to restrictions.

  //NEXT STEPS:
  //  - begin tentative layout using this featured game using api data

  // **********************************************************************************

  // setUpPage starts the app and api call;

  // try {
  //  setUpPage();
  // } catch (error) {
  //   console.error(error);
  // }

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

// Below is the code that will actually call the API when we start using it

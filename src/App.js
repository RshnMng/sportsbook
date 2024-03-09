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
import "./App.css";
import { restOfGames, top100Games } from "./trailpage";

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

  function testgetAllGames() {
    let topGamesArr = top100Games.results;
    let restOfGamesArr = restOfGames.results;
    let allGames = [...topGamesArr, ...restOfGamesArr];
    return allGames;
  }

  let allGames = testgetAllGames();

  console.log(allGames);

  // **********************************************************************************
  //Test area for trying our code without calling the actual API due to restrictions.

  //NEXT STEPS:
  //  - create a utility js file for utility function like random number, local storage
  //  - import to this file
  //  - create a random number function that creates a number between 0 and 200
  //  - use that random number to select a game that will be our featured game of the day
  //  - begin tentative layout using this featured game using api data

  // **********************************************************************************

  //We are going to create a function inside our Try block that runs on page load that will call our API and
  //handle the data that returns. The code below is the beginning of that function.

  // try {
  //  let allGames =  state.allGames(state.top100GamesUrl, state.restOfGamesUrl, state.apiOptions, state.getData);
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

const [state, setState] = useState({
  top100GamesUrl: "https://sportspage-feeds.p.rapidapi.com/games",
  restOfGamesUrl: "https://sportspage-feeds.p.rapidapi.com/games?skip=100",
  logoUrl: "https://score-room.p.rapidapi.com/SCOREROOM_CLIENT?fetchTeams=true",
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
      "X-RapidAPI-Key": "747c15a066mshdc6c13f655bce16p12190fjsn1def5f2fbea7",
      "X-RapidAPI-Host": "score-room.p.rapidapi.com",
    },
  },
  getData: (url, options) => {
    let results = fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[40]);
        return results;
      });
    return results;
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
  getLogos: (url, options, getDataFunc) => {
    let results = getDataFunc(url, options);
    let NhlTeams = results[40];

    console.log(NhlTeams);
  },
});

function setUpPage() {
  let allGames = state.getAllGames(state.top100GamesUrl, state.restOfGamesUrl, state.apiOptions, state.getData);
  let lessThan = allGames.length;
  let randomNumber = util.createRandomNumber(lessThan);
  let featuredGame = allGames[randomNumber];
  util.saveToLocalStorage("featuredGame", featuredGame);
  let allLogos = state.getLogos(state.logoUrl, state.logoOptions, state.getData);
}

state.getLogos(state.logoUrl, state.logoOptions, state.getData);

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

import React from "react";
import Team from "../components/Team";
import { util } from "../data-and-functions/Utility";

export default function Home() {
  let featuredGame = util.getLocalStorage("featuredGame");

  let homeTeam = featuredGame.teams.home;
  let awayTeam = featuredGame.teams.away;

  return (
    <>
      <div className="container-fluid home-container">
        <div className="col-12 home-title"> FEATURED GAME </div>
        <div className="col-12 game-col d-flex">
          <div className="col-4 away-team-col one">
            <div> Away </div>
            <Team info={awayTeam} />
          </div>
          <div className="col-4 game-info-col one">game-info</div>
          <div className="col-4 home-team-col one">
            <div>Home</div>
            <Team info={homeTeam} />
          </div>
        </div>
      </div>
    </>
  );
}

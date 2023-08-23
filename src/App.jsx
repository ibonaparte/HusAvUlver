import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import matchData from "./recentgames.json";
import memberData from "./memberstats.json";
import rosterInfo from "./rosterInfo.json";

import Scoreboard from "./Scoreboard";
import Navigation from "./Navigation";
import HomePageBanner from "./HomepageBanner";
import Roster from "./Roster";

const App = () => {
  //TODO: REFACTOR THIS
  var recentGames = [];

  //loop through each currentGame
  for (var i = 0; i < matchData.length; i++) {
    var currentGame = [];

    //loop through each team in the currentGame
    for (var key in matchData[i].clubs) {
      var team = new Object();

      team.logo =
        matchData[i].clubs[key]["details"]["customKit"]["crestAssetId"];
      team.name = matchData[i].clubs[key]["details"]["name"];
      team.score = matchData[i].clubs[key]["score"];

      currentGame.push(team);
    }

    recentGames.push(currentGame);
  }
  //END REFACTOR

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Scoreboard scores={recentGames} />

        <Routes>
          <Route
            path="/roster"
            element={
              <Roster
                members={memberData.members}
                playerInfo={rosterInfo.clubMembers}
              />
            }
          />
          <Route
            path="/"
            element={
              <HomePageBanner
                image="./img/center-ice-logo.png"
                title="Hus Av Ulver HC"
                subtitle="Est. 2021"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

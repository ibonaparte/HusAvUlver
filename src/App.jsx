import { createRoot } from "react-dom/client";
import Scoreboard from "./Scoreboard";
import Navigation from "./Navigation";
import matchData from "./recentgames.json";

const App = () => {
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

  return (
    <>
      <Navigation />
      <Scoreboard scores={recentGames} />
      <h1> Hello World! </h1>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

/*
TO DO
1. getRecentGames
    - get most recent games from JSON file (NHL API CALL)
    - parse JSON to...
        a) Was HUS AL AVER home or away?
        b) setScore()
        c) create array of scores to be used as props (cache this somehow?)
*/

//Props should be an array of...
//[ [homeTeamScore] , [awayTeamScore] ]
// console.log(score[0].name + " VS " + score[1].name);
//[homeTeamScore] = [homeLogo, homeName, homeScore]

const Scoreboard = (props) => {
  const scores = props.scores;
  console.log(scores);

  const scoreboards = scores.map((score) => (
    <div className="scoreboard-score-container">
      <div className="scoreboard-away-score-container">
        <img
          className="away-team-logo"
          src={`https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/custom-crests/${score[0].logo}.png`}
        ></img>
        <span className="away-team-name">{score[0].name}</span>
        <span className="away-team-score">{score[0].score}</span>
      </div>
      <div className="scoreboard-home-score-container">
        <img
          className="home-team-logo"
          src={`https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/custom-crests/${score[1].logo}.png`}
        ></img>
        <span className="home-team-name">{score[1].name}</span>
        <span className="home-team-score">{score[1].score}</span>
      </div>
    </div>
  ));

  return (
    <div className="scoreboard-container">
      <div className="scoreboard-controls-container">
        <div className="scoreboard-prev">
          <img className="left-arrow" src="img/right-arrow.svg" />
        </div>
        <div className="scoreboard-next">
          <img className="right-arrow" src="img/right-arrow.svg" />
        </div>
      </div>
      <div className="scoreboard-wrapper">
        <>{scoreboards}</>
      </div>
    </div>
  );
};

export default Scoreboard;

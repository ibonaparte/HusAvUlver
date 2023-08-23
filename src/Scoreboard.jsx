const Scoreboard = (props) => {
  const scores = props.scores;

  const scoreboards = scores.map((score) => (
    //Add key to div, matchId
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

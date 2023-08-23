const Roster = (props) => {
  const positions = [
    { eaPos: "leftWing", webPos: "Left Wing" },
    { eaPos: "center", webPos: "Center" },
    { eaPos: "rightWing", webPos: "Right Wing" },
    { eaPos: "defenseMen", webPos: "Defenseman" },
    { eaPos: "goalie", webPos: "Goalie" },
  ];

  const eaPlayers = props.members;
  const internalPlayers = props.playerInfo;

  const playerCards = eaPlayers.map((player) => {
    const thisPlayerInfo = internalPlayers.find((obj) => {
      return obj.gt === `${player.name}`;
    });

    const thisPlayerPos = positions.find((obj) => {
      return obj.eaPos === `${player.favoritePosition}`;
    });

    console.log(thisPlayerPos);
    return (
      <div key={player.name} className="player-card-container">
        <div className="player-card-top">
          <div className="player-image-container">
            <img className="player-image" src="https://placehold.co/110x110" />
          </div>

          <div className="player-info-container">
            <div className="player-name">
              <p className="first-name">{thisPlayerInfo.firstName} </p>
              <span className="lastName">{thisPlayerInfo.lastName}</span>
              <span className="player-separator"> | </span>
              <span className="player-number">#{thisPlayerInfo.number}</span>
            </div>
            <p className="player-pos">{thisPlayerPos.webPos}</p>
          </div>
        </div>

        <div className="player-card-stats-container">
          <div className="player-card-stats">
            <table className="stats-table">
              <thead>
                <tr>
                  <td>GP</td>
                  <td>G</td>
                  <td>A</td>
                  <td>P</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{player.skgp}</td>
                  <td>{player.goals}</td>
                  <td>{player.assists}</td>
                  <td>{player.points}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="roster-container">
      <h2>Roster</h2>
      {playerCards}
    </div>
  );
};

export default Roster;

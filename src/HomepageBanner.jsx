const HomePageBanner = (props) => {
  return (
    <>
      <div className="banner-container">
        <img src="./img/center-ice-logo.png" />
        <div className="title-container">
          <h1 className="title"> {props.title} </h1>
          <h2 className="sub-title"> {props.subtitle}</h2>
        </div>
      </div>
      <div className="body-content">
        <p className="body-header">WELCOME TO THE DEN</p>
        <p className="body-copy">
          HUS AV ULVER is an EASHL club that was founded in 2021 by the team’s
          leader, SwerveWalker. HUS AV ULVER is an elite group of EA NHL players
          who not only love to be competitive, but equally enjoy the camaraderie
          that comes along with playing chel together.
        </p>
      </div>
    </>
  );
};
export default HomePageBanner;

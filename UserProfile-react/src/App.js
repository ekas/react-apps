import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={process.env.PUBLIC_URL + '/assets/header_img.jpg'} className="header-bg" alt="header" />
      </div>
      <div className="content-container">
        <div className="site-bar">
          <div className="site-bar-logo-container">
            <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} className="logo" alt="header" />
          </div>
          <div className="site-bar-names">
            <div className="name blue g6 active">Vito Corleone</div>
            <div className="name blue g3">Carmelia Corleone</div>
            <div className="name g2">Carlo Rizzi</div>
            <div className="name blue g4">Luci Mancini</div>
            <div className="name g5">Tom Hagen</div>
            <div className="name g1">Kay Adams</div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-pic">
            <img src={process.env.PUBLIC_URL + '/assets/profiles/Vito Corleone.jpg'} className="photo" alt="profile_photo" />
          </div>
          <div className="profile">
            <div className="profile-name">Vito Corleone</div>
            <div className="profile-popularity-slider">
              <span className="slider-label">Popularity</span>
            </div>
            <p className="profile-bio">
              <div className="profile-bio-heading">
                Biography
              </div>
              Carmela was born in Sicily Italy in 1897, and emigrated to the United States shortly after the turn of the century. She married Vito Corleone in 1914; they were married for just over 40 years until Vito's death in 1955. They had four children – Sonny, Fredo, Michael and Connie. They also took in Sonny's friend Tom Hagen, who later served as the family consigliere. In the novel, Carmela Corleone is portrayed as a traditional Italian immigrant woman who speaks in very broken English. In the movies, however, she speaks fluent English as an adult, with a marked New York accent. In the novel, she develops a close relationship with Michael's girlfriend and future wife, Kay.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

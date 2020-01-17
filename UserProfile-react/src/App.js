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
        <div className="main-container">

        </div>
      </div>
    </div>
  );
}

export default App;

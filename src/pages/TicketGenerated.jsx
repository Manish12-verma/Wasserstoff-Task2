import React from 'react';
import Footer from '../components/Footer';

const TicketGenerated = () => {
  return (
    <div id="display-data" className="display-data">
      <header className="header" style={{ marginBottom: '4.5rem' }}>
        <div className="header__logo">
          <img src="assets/images/logo-full.svg" alt="logo" />
        </div>
        <h1 className="header__text">
          Congrats, <span className="header__text--gradient display-name" id="header-name"></span>! <br />
          Your ticket is ready. <br />
          <span className="header__text--subtitle">
            We've emailed your ticket to
            <span className="header__text--email" id="display-email"></span>
            and will send updates in the run-up to the event.
          </span>
        </h1>
      </header>

      <div className="ticket">
        <div className="ticket__logo">
          <img src="assets/images/logo-mark.svg" alt="Coding Conf logo" />
          <span className="ticket__name">Coding Conf</span>
        </div>

        <p className="ticket__date">Jan 31, 2025 / Austin, TX</p>

        <div className="ticket__user">
          <img
            id="display-image"
            className="ticket__user-image"
            src="assets/images/image-avatar.jpg"
            alt="User image"
          />
          <div className="ticket__user-info">
            <span id="display-name" className="ticket__user-name display-name"></span>
            <div className="ticket__user-github">
              <img
                src="assets/images/icon-github.svg"
                alt="GitHub icon"
                className="ticket__user-github-icon"
              />
              <span id="display-github" className="ticket__user-github-username"></span>
            </div>
          </div>
        </div>
        <p className="ticket__number">#01609</p>
      </div>
      <Footer/>
    </div>
    
  );
};

export default TicketGenerated;

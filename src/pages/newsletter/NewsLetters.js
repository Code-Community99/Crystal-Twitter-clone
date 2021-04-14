import { Button } from '@material-ui/core';
import React from 'react';
import './../../styles/newsletters/NewsLetters.css';

function NewsLetters() {
  return (
    <div className="news-letters">
      <div className="news-letters-top">
        <img src="https://abs.twimg.com/responsive-web/client-web/logo_revue.31c21585.svg" alt="from Twitter itself" />
      </div>
      <div className="news-letters-title">
        <h2>Start a newsletter for free</h2>
      </div>
      <div className="news-letters-body">
        <p className="news-letters-body-text">
          Looking for other ways to reach your audience? Ready to get paid for your work? It’s time to try out <span className="news-letters-body-text-unique">@Revue</span> - Twitter’s newsletter tool for writers and publishers
        </p>
        <div className="news-letters-body-list">
          {/* <ul> */}
          <li>Compose and schedule newsletters</li>
          <li>Embed Tweets</li>
          <li>Import email lists</li>
          <li>Analyze engagement</li>
          <li>Earn money from paid subscribers</li>
          {/* </ul> */}
        </div>
      </div>
      <div className="news-letters-footer">
        <Button className="news-letters-footer-button">Found out more</Button>
      </div>
    </div>
  )
}

export default NewsLetters

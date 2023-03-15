import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import "./Widgets.css";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__article__left">
        <FiberManualRecord/>
      </div>

      <div className="widget__article__right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info/>
      </div>
      {newsArticle("Ahmed Faroolle is back!", "Top news - 9099 readers")}
      {newsArticle("Is Redux better than context API", "Top news - 8029 readers")}
      {newsArticle("Front-End vs Back-End", "Top news - 7809 readers")}
      {newsArticle("Will AI replace developers", "Top news - 5039 readers")}
      {newsArticle("How to break into tech industry", "Top news - 2399 readers")}
    </div>
  )
}

export default Widget

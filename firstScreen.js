import React from 'react'

const firstScreen = (props) => {

  return(
    <section className="firstScreenDiv">
      <div className="content-wrap">
        <div className="blurbfirstscreen">
          <h3>Most of us tend to rely heavily on just one sense.</h3>
          <h4>Take a moment to connect with your other senses. Give your main sense a break and see what you notice.</h4>
        </div>
        <p>Take your pick:</p>
        <button onClick={props.dimfirst}>Dim the screen for 15 seconds</button>
        <button onClick={props.writefirst}>Skip ahead</button>
      </div>
    </section>
  )
};



export default firstScreen;

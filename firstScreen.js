import React from 'react'

const firstScreen = (props) => {

  return(
    <div>
      <h1>The Other Four</h1>
      <h3>Most of us tend to rely heavily on just one sense. Take a moment to connect with your other senses. Give your main sense a break and see what you notice.</h3>
      <p>Dim the screen for 30 seconds or skip ahead.</p>
      <button onClick={props.dimfirst}>Dim Screen</button>
      <button onClick={props.writefirst}>Go straight to notes</button>
    </div>
  )
};



export default firstScreen;

import React from 'react';
import './fontawesome-free-5.7.0-web/js/all';


var stringValue = "";
// var twitterShare = document.querySelector('[data-js="twitter-share"]');
// var facebookShare = document.querySelector('[data-js="facebook-share"]');

class writingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      stringValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.target.value === " " ? stringValue += "%20" : stringValue = event.target.value
    this.setState({stringValue: stringValue});
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }


  twitterShare(e) {
    e.preventDefault();
    var twitterWindow = window.open('https://twitter.com/share?text=' + stringValue + ' -The%20Other%20Four&url=' + document.URL + '&via=nikkster.tech', 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) { twitterWindow.focus(); }
      return false;
    }


  facebookShare(e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/dialog/feed?&link=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) { facebookWindow.focus(); }
      return false;
  }

  render() {
    return (
      <div className="bodyWrapper">
         <div className="mainContent">
           <div className="writingSpace">
             <h4>Take this time to reflect and jot down your observations.</h4>
             <p>A list of descriptive words are available on the right to get your creative juices flowing.</p>

             <form onSubmit={this.handleSubmit}>
               <label>
                 <textarea className="writingBox" type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <div className="postToSocialMediaIcons">

                 <button onClick={this.twitterShare}>
                   <i className="fab fa-twitter fa-fw fa-2x"></i>
                 </button>

               </div>
             </form>
           </div>

         </div>
         <div className="sideBar"><h4>Adjectives and Adverbs</h4>
          <p>accidentally
afterwards
almost
always
anxiously
boldly
bravely
brightly
daily
deliberately
easily
elegantly
exactly
gladly
gracefully
happily
honestly
innocently
inquisitively
kindly
nearly
perfectly
politely
powerfully
sharply
suddenly
tenderly
truthfully
unexpectedly
calmly
carefully
cheerfully
foolishly
loudly
madly
merrily
monthly
more
mortally
mysteriously
quietly
smoothly
softly
yearly
glamorous
magnificent
scruffy
shapely
short
green
icy
lemon
mango
orange
yellow
alive
better
careful
clever
powerful
rich
shy
tender
ambitious
brave
calm
delightful
eager
kind
lively
witty
wonderful
nervous
obnoxious
panicky
pitiful
scary
shallow
gigantic
great
microscopic
short
small
tall
teeny
tiny
crashing
deafening
echoing
melodic
noisy
purring
thundering
tinkling
fast
prehistoric
quick
swift
bitter
cool
salty
savory
sour
spicy
spoiled
stale
tasty
yummy
breezy
damp
dirty
dry
loose
melted
prickly
rough
weak
wet
wooden
abundant
sparse</p>
         </div>
       </div>
    );
  }
}

export default writingView;

// const writingView = (props) => {
//
//   return(
//     <div className="bodyWrapper">
//       <div className="mainContent">
//         <div className="writingSpace">
//           <h4>Take this time to reflect and jot down your observations.</h4>
//           <p>A list of descriptive words are available on the right to get your creative juices flowing.</p>
//           <form onSubmit={props.submit}>
//             <label>
//               Input here:
//               <textarea className="writingBox" defaultValue="some text">
//               </textarea>
//             </label>
//             <input type="submit" value="Submit"/>
//           </form>
//         </div>
//         <div className="postToSocialMediaIcons"><p>postToSocialMediaIcons</p></div>
//       </div>
//       <div className="sideBar"><p>sideBar</p></div>
//     </div>
//   )
// };
//




// <button onClick={this.facebookShare}>
//   <i className="fab fa-facebook fa-fw fa-2x"></i>
// </button>






//
// export default writingView;

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
    var twitterWindow = window.open('https://twitter.com/share?text=' + stringValue + ' -The%20Other%20Four&url=' + "http://nikkster.tech" + '&via=nikkster.tech', 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) { twitterWindow.focus(); }
      return false;
    }

  //
  // facebookShare(e) {
  //   e.preventDefault();
  //   var facebookWindow = window.open('https://www.facebook.com/dialog/feed?&link=' + document.URL, 'facebook-popup', 'height=350,width=600');
  //   if(facebookWindow.focus) { facebookWindow.focus(); }
  //     return false;
  // }

  render() {
    return (
      <section className="bodyWrapper">
         <section className="mainContent">
           <div className="writingSpace">
            <div className="content-wrap">
               <h3>Take this time to reflect and jot down any observations you made.</h3>
               <p className="mediaOnly">A list of example adjectives and adverbs are below.</p>
               <form onSubmit={this.handleSubmit}>
                 <label>
                   <textarea className="writingBox" type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <div className="postToSocialMediaIcons">

                   <button className="twitterBtn" onClick={this.twitterShare}>
                     <i className="fab fa-twitter fa-fw fa-2x"></i>
                   </button>

                 </div>
               </form>
            </div>
           </div>

         </section>
         <section className="sideBar">
          <div className="content-wrap">
            <h3>Adjectives and Adverbs</h3>
            <h4>Use these example words to get your creative juices flowing.</h4>

            <p>accidentally
afterwards
anxiously
boldly
bravely
brightly
daily
elegantly
exactly
gracefully
honestly
inquisitively
perfectly
powerfully
sharply
tenderly
unexpectedly
calmly
carefully
cheerfully
merrily
monthly
glamorous
magnificent
scruffy
green
icy
lemon
orange
clever
powerful
shy
ambitious
brave
delightful
witty
wonderful
obnoxious
gigantic
microscopic
tiny
deafening
echoing
melodic
noisy
thundering
tinkling
prehistoric
swift
bitter
cool
salty
tasty
yummy
breezy
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
       </section>
     </section>
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

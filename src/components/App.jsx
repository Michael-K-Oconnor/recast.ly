import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };

    this.videoSelected = this.videoSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  videoSelected(video) {
    this.setState({
      currVideo: video 
    });
  }

  handleInput(e){

  }
  
  handleSubmit(e){
    console.log(e);
    //get string 

    //create Options 
    //Get request Youtube API
    //update State 
  }





  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSubmit={this.handleSubmit}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} listenerFn={this.videoSelected}/>
          </div>
        </div>
      </div>
    );
  }
}



// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

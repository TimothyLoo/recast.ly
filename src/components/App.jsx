import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(event) {
    for (let video of this.state.videos) {
      if (video.id.videoId === event.target.id) {
        this.setState({ currentVideo: video });
      }
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
            {/*<div><h5><em>search</em> view goes here</h5></div>*/}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
            {/*<div><h5><em>videoPlayer</em> view goes here</h5></div>*/}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onTitleClick={this.onTitleClick}/>
            {/*<div><h5><em>videoList</em> view goes here</h5></div>*/}
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
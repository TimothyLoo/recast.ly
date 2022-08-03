import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0],
      query: ''
    };
  }

  componentDidMount() {
    searchYouTube('', (data)=>{
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
    });
  }


  // debounce(func, timeout = 500) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
  //   };
  // }

  getQuery (q) {
    this.setState({ query: q });
    searchYouTube(this.state.query, (data)=>{
      this.setState({ videos: data });
    });
  }

  onSubmit (event) {
    searchYouTube(this.state.query, (data)=>{
      this.setState({ videos: data });
    });
  }

  onTitleClick(video) {
    this.setState({ currentVideo: video });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getQuery={this.getQuery.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
            {/*<div><h5><em>search</em> view goes here</h5></div>*/}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
            {/*<div><h5><em>videoPlayer</em> view goes here</h5></div>*/}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onTitleClick={this.onTitleClick.bind(this)}/>
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
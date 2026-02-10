import VideoCard from "./components/videocard";
import { youtubeVideos, driveVideos } from "./components/videos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Video Editing Portfolio of Drei</h1>
        <p>
          Mostly gameplay edited videos but is very versatile and can learn
          different approaches and style of editing.
        </p>
      </header>

      {/* YouTube Section */}
      <section>
        <h2>YouTube Videos</h2>
        <div className="video-grid">
          {youtubeVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              link={video.link}
              platform="YouTube"
            />
          ))}
        </div>
      </section>

      {/* Google Drive Section */}
      <section>
        <h2>Google Drive Videos</h2>
        <div className="video-grid">
          {driveVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              link={video.link}
              platform="Google Drive"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;



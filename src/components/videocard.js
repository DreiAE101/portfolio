const VideoCard = ({ title, thumbnail, link, platform, className }) => {
  return (
    <div className={`video-card ${className ? className : ""}`}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        Watch on {platform}
      </a>
    </div>
  );
};

export default VideoCard;
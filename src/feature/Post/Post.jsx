import "./Post.css";

function Post({ post }) {
  const dateObject = new Date(post.created * 1000);

  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth() + 1; // getUTCMonth() returns 0-indexed month
  const day = dateObject.getUTCDate();
  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();
  const seconds = dateObject.getUTCSeconds();

  // Custom formatted string (e.g., YYYY-MM-DD HH:mm:ss UTC)
  const formattedUTC = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} UTC`;

  return (
    <div className="post">
      <h3>
        {post.title}
      </h3>
      { post.selftext ? <p>{ post.selftext }</p> : '' }
      { post.url.includes('.jpeg') || post.url.includes('.jpg') || post.url.includes('.png') ? <img src={post.url} alt="post img" /> : '' }
      { post.is_video ? <video src={post.secure_media.reddit_video.fallback_url} controls></video> : '' }
      Likes: <b>{ post.ups }</b> Comments: <b>{ post.num_comments }</b> { formattedUTC }
      <span className="author">posted by { post.author }</span>
    </div>
    
  );
}

export default Post;
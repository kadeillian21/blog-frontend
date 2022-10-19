export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image}></img>
          <p>{post.body}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

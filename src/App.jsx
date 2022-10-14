import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function NewPosts() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <label for="title">Title:</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <label for="body">Body:</label>
        <br />
        <input type="text" id="body" name="body" />
        <br />
        <label for="image">Image:</label>
        <br />
        <input type="text" id="image" name="image" />
        <br />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  props.blogs;
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.blogs.map((blog) => (
        <div className="blogs">
          <h2>{blog.title}</h2>
          <img src={blog.image}></img>
          <p>{blog.body}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

function Home() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog",
      image: "https://res.cloudinary.com/dwvh1fhcg/image/upload/w_600,c_scale/v1644695294/fgzurlajtusdrzupyrsd.jpg",
      body: "This is a blog",
    },
    {
      id: 2,
      title: "Blog2",
      image: "https://res.cloudinary.com/dwvh1fhcg/image/upload/w_600,c_scale/v1643955653/dztp4zuyi0l8thztuv9b.jpg",
      body: "This is a blog2",
    },
    {
      id: 3,
      title: "Blog3",
      image: "https://res.cloudinary.com/dwvh1fhcg/image/upload/v1608748018/tutorials/bootstrap_tut_img_1.png",
      body: "This is a blog3",
    },
  ]);
  return (
    <div>
      <NewPosts />
      <PostsIndex blogs={blogs} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

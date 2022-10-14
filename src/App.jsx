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
        <div className="blogs" key={blog.id}>
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
      user_id: 1,
      title: "Advanced bandwidth-monitored array",
      body: "Actually cray heirloom master. Vice yr street readymade locavore art party. Cornhole lomo kale chips carry cronut. Bitters kickstarter chillwave flexitarian cleanse viral tilde. Flannel gastropub dreamcatcher try-hard slow-carb everyday. Letterpress flexitarian pinterest viral goth heirloom photo booth.",
      image: "https://i.picsum.photos/id/302/200/300.jpg?hmac=b5e6gUSooYpWB3rLAPrDpnm8PsPb84p_NXRwD-DK-1I",
      created_at: "2022-10-14T16:14:03.505Z",
      updated_at: "2022-10-14T16:14:03.505Z",
    },
    {
      id: 2,
      user_id: 1,
      title: "Reactive web-enabled product",
      body: "Pickled sriracha tote bag cornhole. 8-bit flexitarian park kinfolk selfies mustache ethical fingerstache. Sartorial microdosing tofu kogi. Cardigan sustainable post-ironic. Cronut you probably haven't heard of them selfies five dollar toast beard pitchfork cornhole. Master crucifix bushwick irony stumptown tumblr.",
      image: "https://i.picsum.photos/id/131/200/300.jpg?hmac=9q7mRSOguNBFGg_gPPRKlfjNINGjXWeDBTYPP1_gEas",
      created_at: "2022-10-14T16:14:03.514Z",
      updated_at: "2022-10-14T16:14:03.514Z",
    },
    {
      id: 3,
      user_id: 1,
      title: "Sharable holistic system engine",
      body: "You probably haven't heard of them five dollar toast ramps knausgaard. Irony pour-over xoxo tousled iphone yr skateboard. Crucifix muggle magic 90's tote bag etsy. Knausgaard heirloom plaid dreamcatcher. Yolo occupy authentic pbr\u0026b etsy knausgaard messenger bag. +1 jean shorts five dollar toast park mixtape ramps quinoa asymmetrical. Normcore distillery beard tacos keytar.",
      image: "https://i.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g",
      created_at: "2022-10-14T16:14:03.527Z",
      updated_at: "2022-10-14T16:14:03.527Z",
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

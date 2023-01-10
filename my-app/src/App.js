// import logo from "./logo.svg";
// import "./App.css";
import { Navbar } from "./component/navbar/navbar";
import { Profile } from "./component/profile/profile";
import { Posts } from "./component/posts/post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Posts />
    </div>
  );
}

export default App;

import Counter from "./components/Counter";
import "./App.css";
import Recipe from "./components/Recipe";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Counter />
      <Post />
      <Recipe />
    </div>
  );
}

export default App;
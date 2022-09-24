import "./App.css";
import Head from "./Head";
import Body from "./Body";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main style={{ width: "100%" }}>
        <Router>
          <Head />
          <Body />
        </Router>
      </main>
    </div>
  );
}

export default App;


import { Route, Router } from "@solidjs/router";
import Root from "./Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Sponsors from "./routes/Sponsors";
import About from "./routes/About";

function App() {
  return (
    <>
      <Router root={Root}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="*" component={NotFound} />
      </Router>

    </>
  )
}

export default App;

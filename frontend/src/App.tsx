import "bootstrap/dist/css/bootstrap.css";
import { RouterConfig } from "./navigation/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  );
}

export default App;

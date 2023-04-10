import "bootstrap/dist/css/bootstrap.css";
import { RouterConfig } from "./navigation/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./hoc/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <RouterConfig />
      </Router>
    </ErrorBoundary>
  );
}

export default App;

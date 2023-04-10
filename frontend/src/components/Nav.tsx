import { Link } from "react-router-dom";
import { ROOT, CHART, CREATE } from "../navigation/CONSTANTS";

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={ROOT} className="navbar-brand">
          Products
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={CREATE}>
                Create
              </Link>
            </li>
            <li>
              <Link to={CHART} className="nav-link active">
                Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

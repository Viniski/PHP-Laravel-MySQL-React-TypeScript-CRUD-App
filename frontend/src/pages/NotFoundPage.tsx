import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { ROOT } from "../navigation/CONSTANTS";

export function NotFoundPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="container-fluid mb-3 mt-5">
          <h1>404</h1>
          <h2>Ups... coś poszło nie tak :/</h2>
          <Link to={ROOT} className="nav-link active">
            Kliknij aby wrócić do strony głównej
          </Link>
        </div>
      </div>
    </>
  );
}

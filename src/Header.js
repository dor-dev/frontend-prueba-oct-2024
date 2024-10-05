import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b-2">
      <nav className="p-3 lg:px-8">
        <ul>
          <li>
            <Link to="/" className="p-1.5 text-sky-600 font-bold">Podcaster</Link>
          </li>
        </ul>
      </nav>
  </header>
  );
}

export default Header;
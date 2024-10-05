import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow">
      <h1 className="p-3 lg:px-8">
        <Link to="/" className="p-1.5 text-sky-600 font-bold">Podcaster</Link>
      </h1>
  </header>
  );
}

export default Header;
import { Link } from "react-router-dom";

function Header({loading}) {
  return (
    <header className="p-2 px-3 bg-white shadow flex items-center">
      <h1 className="lg:px-8">
        <Link to="/" className="p-1.5 text-sky-600 font-bold">Podcaster</Link>
      </h1>
      {loading && <span className="ml-auto custom-loader border-2 border-sky-200 after:border-b-sky-500"></span>}
  </header>
  );
}

export default Header;
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { addFilter } from "../../features/books/bookSlice";
import SearchIcon from "../ui/SearchIcon";

const Navbar = () => {
  const { filter } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={Logo} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="font-semibold cursor-pointer"
            id="lws-bookStore">
            <li>Book Store</li>
          </Link>
          <Link to="/add" className="cursor-pointer" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <SearchIcon />
            <input
              type="text"
              value={filter}
              onChange={handleSearch}
              placeholder="Filter books..."
              className="search"
              id="lws-search"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

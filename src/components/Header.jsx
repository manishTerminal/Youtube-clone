import logo from "../assets/img/logo.png";
import ham from "../assets/img/hamburger.png";
import search from "../assets/img/search.png";
import user from "../assets/img/user.png";
import { useDispatch } from "react-redux";
import { clicked } from "../redux/sliceSidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SERCH_API } from "../utils/constants";
import axios from "axios";

const Header = () => {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const showSearchResponse = () => {
    let a = 2;
    let b = 4;
    console.log("search list is clicked", a + b);
  };

  const getSuggestions = async () => {
    try {
      const response = await axios.get(YOUTUBE_SERCH_API + searchQuery);
      setSuggestion(response.data[1]);
    } catch (error) {
      console.log("fetch api failed");
    }
  };

  const clickHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white flex justify-between shadow-md py-1 fixed w-full top-0 left-0 z-0">
      <div className="flex mx-2">
        <button onClick={(e) => dispatch(clicked())}>
          <img className="h-6" src={ham} />
        </button>
        <Link to="/">
          <img className="h-10 mx-4" src={logo} />
        </Link>
      </div>

      {/* search bar */}
      <div>
        <div className="flex">
          <input
            className="border rounded-l-full w-96 border-gray-500 px-4"
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={clickHandler}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          ></input>
          <button
            className="border rounded-r-full border-gray-500 px-2 bg-slate-100"
            onClick={() => showSearchResponse()}
          >
            <img className="h-8" src={search} />
          </button>
        </div>
        {focus && (
          <ul className="fixed bg-white shadow-md w-[24rem] p-2 border rounded-md m-1">
            {suggestion.map((s) => (
              <li
                key={s}
                className="flex border my-2 hover:cursor-pointer hover:bg-green-300"
              >
                {" "}
                <img className="w-4 m-1" src={search} />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex mx-2">
        <Link to="/profile">
          <button>
            <img className="h-10" src={user} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

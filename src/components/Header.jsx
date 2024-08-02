import logo from "../assets/img/logo.png";
import ham from "../assets/img/hamburger.png";
import search from "../assets/img/search.png";
import user from "../assets/img/user.png";

const Header = () => {
  return (
    <div className="flex justify-between my-2 shadow-sm py-1">
      <div className="flex mx-2">
        <button>
          <img className="h-6" src={ham} />
        </button>

        <img className="h-10 mx-4" src={logo} />
      </div>
      <div className="flex">
        <input
          className="border rounded-l-full w-96 border-gray-500 px-4"
          type="text"
          placeholder="search"
        ></input>
        <button className="border rounded-r-full border-gray-500 px-2 bg-slate-100">
          <img className="h-8" src={search} />
        </button>
      </div>
      <div className="flex mx-2">
        <button>
          <img className="h-10" src={user} />
        </button>
      </div>
    </div>
  );
};

export default Header;

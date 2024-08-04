import subs from "../assets/img/subscriptions.png";
import home from "../assets/img/home.png";
import shorts from "../assets/img/shorts.png";
import next from "../assets/img/next.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-60">
      <div>
        <Link to="/">
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg bg-slate-100 font-medium">
          <img className="h-6 pr-10" src={home} />
          Home
        </button>
        </Link>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={shorts} />
          Shorts
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          subscriptions
        </button>
      </div>
      <hr></hr>
      <div>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100 mt-2 text-xl" >
          You
          <img className="h-8 pr-10" src={next} />
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          Your channel
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          History
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          Playlists
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          Your videos
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          Watch later
        </button>
        <button className="flex mx-4 py-2 px-3 w-52 mb-2 rounded-lg font-medium hover:bg-slate-100">
          <img className="h-6 pr-10" src={subs} />
          Liked videos
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

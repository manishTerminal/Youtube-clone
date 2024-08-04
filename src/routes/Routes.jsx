import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../components/Profile";
import Home from "../components/Home";
import WatchPage from "../components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default appRouter;

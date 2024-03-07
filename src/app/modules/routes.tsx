// Libraries
import { createBrowserRouter } from "react-router-dom";
// Constants
import { ROUTES } from "@/constants/routes.ts";

// Types
import { TRoutes } from "@/types/routes.ts";

// Components
import NotFoundPage from "@/app/modules/NotFoundPage";
import SnapGram from "@/app/modules/SnapGram";
import Register from "@/app/modules/Authentication/Register";
import Login from "@/app/modules/Authentication/Login";
import PrivateRoute from "@/app/components/common/PrivateRoute";
import Home from "@/app/modules/SnapGram/containers/Home";
import Explore from "@/app/modules/SnapGram/containers/Explore";
import Saved from "@/app/modules/SnapGram/containers/Saved";
import AllUsers from "@/app/modules/SnapGram/containers/All_User";
import Profile from "@/app/modules/SnapGram/containers/Profile";

const routes: TRoutes = [
  {
    key: ROUTES.LOGIN.key,
    name: ROUTES.LOGIN.name,
    path: ROUTES.LOGIN.path,
    exact: ROUTES.LOGIN.exact,
    isPrivate: ROUTES.LOGIN.isPrivate,
    component: Login,
  },
  {
    key: ROUTES.REGISTER.key,
    name: ROUTES.REGISTER.name,
    path: ROUTES.REGISTER.path,
    exact: ROUTES.REGISTER.exact,
    isPrivate: ROUTES.REGISTER.isPrivate,
    component: Register,
  },
  {
    key: ROUTES.SNAP_GRAM.key,
    name: ROUTES.SNAP_GRAM.name,
    path: ROUTES.SNAP_GRAM.path,
    exact: ROUTES.SNAP_GRAM.exact,
    isPrivate: ROUTES.SNAP_GRAM.isPrivate,
    component: SnapGram,
  },
  {
    key: ROUTES.NOT_FOUND.key,
    name: ROUTES.NOT_FOUND.name,
    path: ROUTES.NOT_FOUND.path,
    exact: ROUTES.NOT_FOUND.exact,
    isPrivate: ROUTES.NOT_FOUND.isPrivate,
    component: NotFoundPage,
  },
];

const rootRoutes = createBrowserRouter([
  {
    path: ROUTES.NOT_FOUND.path,
    element: <NotFoundPage />,
  },
  {
    path: ROUTES.LOGIN.path,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER.path,
    element: <Register />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTES.SNAP_GRAM.path,
        element: <SnapGram />,
        children: [
          {
            path: ROUTES.HOME.path,
            element: <Home />,
          },
          {
            path: ROUTES.EXPLORE.path,
            element: <Explore />,
          },
          {
            path: ROUTES.SAVED.path,
            element: <Saved />,
          },
          {
            path: ROUTES.ALL_USERS.path,
            element: <AllUsers />,
          },
          {
            path: ROUTES.PROFILE.path,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default rootRoutes;

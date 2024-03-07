import { ROUTES } from "@/constants/routes.ts";
import { TRoutes } from "@/types/routes.ts";
import Explore from "@/app/modules/SnapGram/containers/Explore";
import Saved from "@/app/modules/SnapGram/containers/Saved";
import Profile from "@/app/modules/SnapGram/containers/Profile";
import AllUsers from "@/app/modules/SnapGram/containers/All_User";
import Home from "@/app/modules/SnapGram/containers/Home";

export const routesSnapGram: TRoutes = [
  {
    key: ROUTES.HOME.key,
    name: ROUTES.HOME.name,
    path: ROUTES.HOME.path,
    exact: ROUTES.HOME.exact,
    component: Home,
  },
  {
    key: ROUTES.EXPLORE.key,
    name: ROUTES.EXPLORE.name,
    path: ROUTES.EXPLORE.path,
    exact: ROUTES.EXPLORE.exact,
    component: Explore,
  },
  {
    key: ROUTES.SAVED.key,
    name: ROUTES.SAVED.name,
    path: ROUTES.SAVED.path,
    exact: ROUTES.SAVED.exact,
    component: Saved,
  },
  {
    key: ROUTES.PROFILE.key,
    name: ROUTES.PROFILE.name,
    path: ROUTES.PROFILE.path,
    exact: ROUTES.PROFILE.exact,
    component: Profile,
  },
  {
    key: ROUTES.ALL_USERS.key,
    name: ROUTES.ALL_USERS.name,
    path: ROUTES.ALL_USERS.path,
    exact: ROUTES.ALL_USERS.exact,
    component: AllUsers,
  },
];

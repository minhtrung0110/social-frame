// Libraries

// Constants
import { ROUTES } from "@/constants/routes.ts";

// Types
import { TRoutes } from "@/types/routes.ts";

// Components
import NotFoundPage from "@/app/modules/NotFoundPage";
import SnapGram from "@/app/modules/SnapGram";
import Register from "@/app/modules/Authentication/Register";
import Login from "@/app/modules/Authentication/Login";

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

export default routes;

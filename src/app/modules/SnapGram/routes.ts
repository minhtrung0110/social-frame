import { ROUTES } from "@/constants/routes.ts";
import { TRoutes } from "@/types/routes.ts";

const routes: TRoutes = [
  {
    key: ROUTES.HOME.key,
    name: ROUTES.HOME.name,
    path: ROUTES.HOME.path,
    exact: ROUTES.HOME.exact,
    component: Design,
  },
];

export default routes;

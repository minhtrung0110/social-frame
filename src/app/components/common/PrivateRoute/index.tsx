// Libraries
import React from "react";
import { Navigate, Outlet, PathRouteProps } from "react-router-dom";
import { ROUTES } from "@/constants/routes.ts";

// constants

// Hooks

// interface PrivateRouteProps extends RouteProps {}
interface PrivateRouteProps extends PathRouteProps {}

export const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const auth = false; //useAuth();

  if (!auth) {
    // if (APP_CONFIG.APPLICATION_ENV === "development") {
    return <Navigate replace to={ROUTES.LOGIN.path} />;
    // } else {
    //   window.location.href = APP_CONFIG.LOGIN_URL;
    // }
  }

  return <Outlet />;
};

export default PrivateRoute;

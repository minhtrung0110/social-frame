// Libraries
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "@/store/AuthContext.tsx";
import { PathRouteProps } from "react-router/dist/lib/components";
import { ROUTES } from "@/constants/routes.ts";

// constants

// Hooks

// interface PrivateRouteProps extends RouteProps {}
// interface PrivateRouteProps extends PathRouteProps {}

export const PrivateRoute: React.FC<PathRouteProps> = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN.path} />;
  // if (!isAuthenticated) {
  //   return <Outlet />;
  // }
  //
  // return <Route {...props} />;
};

export default PrivateRoute;

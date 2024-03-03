// Libraries
import { Navigate, Route, Routes } from "react-router-dom";

// Component
import PrivateRoute from "@/app/components/common/PrivateRoute";

// Style
import "@/globals.css";

// Types
import routes from "@/app/modules/routes.ts";

export default function App() {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, component, key, isPrivate } = route;

        if (isPrivate) {
          return <PrivateRoute key={key} path={path} element={component} />;
        }

        return <Route key={key} path={path} element={component} />;
      })}
      <Navigate to={"/"} />
    </Routes>
  );
}

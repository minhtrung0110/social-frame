// Libraries
import { Route, Routes } from "react-router-dom";

// Component
import PrivateRoute from "@/app/components/common/PrivateRoute";

// Style
import "@/globals.css";

// Types
import routes from "@/app/modules/routes.ts";

export default function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {routes.map((route) => {
          const { path, component: Component, key, isPrivate } = route;

          if (isPrivate) {
            return (
              <PrivateRoute key={key} path={path} element={<Component />} />
            );
          }

          return <Route key={key} path={path} element={<Component />} />;
        })}
        {/*<Navigate to={"/"} />*/}
      </Routes>
    </main>
  );
}

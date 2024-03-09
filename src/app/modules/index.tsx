// Libraries
// Component
// Style
import "@/globals.css";
import rootRoutes from "@/app/modules/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/app/components/ui/toaster.tsx";

// Types

export default function App() {
  // const isRoute = (obj: any): obj is RouteProps => {
  //   return obj.type === Route;
  // };
  return (
    <main className="flex h-screen">
      <RouterProvider router={rootRoutes} />
      {/*<Router>*/}
      {/*  <Routes>*/}
      {/*    {routes.map((route) => {*/}
      {/*      const { path, component: Component, key, isPrivate } = route;*/}

      {/*      // if (isPrivate) {*/}
      {/*      //   console.log("Typeof:", PrivateRoute instanceof Route);*/}
      {/*      //   return (*/}
      {/*      //     <PrivateRoute key={key} path={path} element={<Component />} />*/}
      {/*      //   );*/}
      {/*      // }*/}

      {/*      return <Route key={key} path={path} element={<Component />} />;*/}
      {/*    })}*/}
      {/*  </Routes>*/}
      {/*</Router>*/}
      <Toaster />
    </main>
  );
}

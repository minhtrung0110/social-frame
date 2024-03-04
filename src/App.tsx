// import React from "react";
//
// import { Routes } from "react-router-dom";
//
// export default function App() {
//   return (
//     <main className={"flex h-screen"}>
//       <Routes>
//         {routes.map((route, index) => {
//           const { exact, path, component, key, isPrivate } = route;
//
//           if (isPrivate) {
//             return (
//               <PrivateRoute key={key} path={path} element={<component />} />
//             );
//           }
//
//           return <Route key={key} path={path} element={<component />} />;
//         })}
//       </Routes>
//     </main>
//   );
// }

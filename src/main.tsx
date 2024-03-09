import ReactDOM from "react-dom/client";
import App from "@/app/modules";
import { QueryProvider } from "@/app/queries/QueryProvider.tsx";
import { AuthProvider } from "@/store/AuthContext.tsx";
import React from "react";
// import { AuthProvider } from "@/store/AuthContext.tsx";
//
// import { AuthProvider } from "@/context/AuthContext";
// import { QueryProvider } from "@/lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>

  <QueryProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryProvider>
  // </React.StrictMode>
);

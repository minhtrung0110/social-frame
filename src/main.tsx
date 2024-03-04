import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/modules";
import { QueryProvider } from "@/app/queries/QueryProvider.tsx";
import { AuthProvider } from "@/store/AuthContext.tsx";
// import { AuthProvider } from "@/store/AuthContext.tsx";
//
// import { AuthProvider } from "@/context/AuthContext";
// import { QueryProvider } from "@/lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

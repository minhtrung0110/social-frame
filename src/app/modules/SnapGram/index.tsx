import { Outlet } from "react-router-dom";

// import Bottombar from "@/components/shared/Bottombar";
// import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/app/components/organisms/Topbar";

const SnapGram = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      {/*<LeftSidebar />*/}

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      {/*<Bottombar />*/}
    </div>
  );
};

export default SnapGram;

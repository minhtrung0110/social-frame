// Libraries
// Components
import TopBar from "@/app/components/organisms/Topbar";
import LeftSidebar from "@/app/components/organisms/LeftSidebar";

// Constants
import BottomBar from "@/app/components/organisms/BottomBar";
import { Outlet } from "react-router-dom";

const SnapGram = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <BottomBar />
    </div>
  );
};

export default SnapGram;

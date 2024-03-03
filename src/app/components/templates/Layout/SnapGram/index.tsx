// Libraries
import { Outlet } from "react-router-dom";

// Components
import BottomBar from "@/app/components/organisms/BottomBar";
import TopBar from "@/app/components/organisms/Topbar";
import LeftSidebar from "@/app/components/organisms/LeftSidebar";

const SnapGramLayout = () => {
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

export default SnapGramLayout;

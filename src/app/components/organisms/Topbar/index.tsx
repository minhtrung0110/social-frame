// Libraries
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button.tsx";
import { useUserContext } from "@/store/AuthContext.tsx";
import { useSignOutAccount } from "@/app/queries/SnapGram/queries.ts";
import { ROUTES } from "@/constants/routes.ts";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const TopBar: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to={ROUTES.SNAP_GRAM.path} className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link
            to={`/${ROUTES.PROFILE.key}/${user.id}`}
            className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;

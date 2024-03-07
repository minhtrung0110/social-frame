// Libraries
import React from "react";
import Loader from "@/app/components/atoms/Loader";
import UserCard from "@/app/modules/SnapGram/components/modecules/UserCard";
import { useToast } from "@/app/components/ui/use-toast.ts";
import { useGetUsers } from "@/app/queries/SnapGram/queries.ts";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const AllUsers: React.FC<Props> = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;

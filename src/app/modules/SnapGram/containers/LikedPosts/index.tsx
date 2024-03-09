// Libraries
import React from "react";
import { useGetCurrentUser } from "@/app/queries/SnapGram/queries.ts";
import Loader from "@/app/components/atoms/Loader";
import GridPostList from "@/app/modules/SnapGram/components/modecules/GridPostList";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const LikedPosts: React.FC<Props> = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
};

export default LikedPosts;

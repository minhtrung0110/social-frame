// Libraries
import React from "react";
import Loader from "@/app/components/atoms/Loader";
import PostForm from "@/app/modules/SnapGram/components/modecules/PostForm";
import { useParams } from "react-router-dom";
import { useGetPostById } from "@/app/queries/SnapGram/queries.ts";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const UpdatePost: React.FC<Props> = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostById(id);

  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/assets/icons/edit.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>

        {isLoading ? <Loader /> : <PostForm action="Update" post={post} />}
      </div>
    </div>
  );
};

export default UpdatePost;

// Libraries
import React from "react";
import { Button } from "@/app/components/ui/button.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { multiFormatDateString } from "@/app/utils";
import Loader from "@/app/components/atoms/Loader";
import { useUserContext } from "@/store/AuthContext.tsx";
import {
  useDeletePost,
  useGetPostById,
  useGetUserPosts,
} from "@/app/queries/SnapGram/queries.ts";
import PostStats from "@/app/modules/SnapGram/components/modecules/PostStats";
import GridPostList from "@/app/modules/SnapGram/components/modecules/GridPostList";
import { useToast } from "@/app/components/ui/use-toast.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu.tsx";
import { DeleteIcon, EditIcon, MoreIcon } from "@/app/components/atoms/icons";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const PostDetail: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUserContext();
  const { toast } = useToast();
  const { data: post, isLoading } = useGetPostById(id);
  const { data: userPosts, isLoading: isUserPostLoading } = useGetUserPosts(
    post?.creator.$id
  );
  const { mutate: deletePost } = useDeletePost();

  const relatedPosts = userPosts?.documents.filter(
    (userPost) => userPost.$id !== id
  );

  const handleDeletePost = () => {
    deletePost({ postId: id, imageId: post?.imageId });
    toast({
      title: "Delete Post ....",
    });
    navigate(-1);
  };

  return (
    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>

      {isLoading || !post ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img
            src={post?.imageUrl}
            alt="creator"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={`/profile/${post?.creator.$id}`}
                className="flex items-center gap-3">
                <img
                  src={
                    post?.creator.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
                <div className="flex gap-1 flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                      {multiFormatDateString(post?.$createdAt)}
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className=" p-1 hover:border hover:border-solid hover:border-gray-700 hover:bg-gray-800 rounded">
                    <MoreIcon width={25} height={25} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className={"p-0 rounded-md"}>
                      <Link
                        to={`/update-post/${post?.$id}`}
                        className={`${user.id !== post?.creator.$id && "hidden"} px-4 py-1`}>
                        <span className="flex justify-content items-center">
                          <EditIcon className="mr-2" width={20} />
                          Update Post
                        </span>
                      </Link>{" "}
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"p-0 rounded-md"}>
                      <Button
                        onClick={handleDeletePost}
                        variant="ghost"
                        className={`ost_details-delete_btn ${
                          user.id !== post?.creator.$id && "hidden"
                        }`}>
                        <span className="flex justify-content items-center">
                          <DeleteIcon width={20} className="mr-2" />
                          Delete Post
                        </span>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <hr className="border w-full border-dark-4/80" />

            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{post?.caption}</p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((tag: string, index: string) => (
                  <li
                    key={`${tag}${index}`}
                    className="text-light-3 small-regular">
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <hr className="border w-full border-dark-4/80" />

        <h3 className="body-bold md:h3-bold w-full my-10">
          More Related Posts
        </h3>
        {isUserPostLoading || !relatedPosts ? (
          <Loader />
        ) : (
          <GridPostList posts={relatedPosts} />
        )}
      </div>
    </div>
  );
};

export default PostDetail;

// Libraries
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar.tsx";

// Component

// Style

// Types

interface Props {
  data: string | any;
  created: Date;
}

const CommentItem: React.FC<Props> = (props) => {
  return (
    <div className={"flex justify-between items-center"}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className={"flex"}>
        <span className="font-bold text-blue-800">cahdjhfasfsa</span>
        <span className="text-gray-800">You adb adkjklasdsandas ns</span>
      </div>
    </div>
  );
};

export default CommentItem;

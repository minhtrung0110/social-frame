// Libraries
import React, { useRef, useState } from "react";
import { Textarea } from "@/app/components/ui/textarea.tsx";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { EmotionIcon } from "@/app/components/atoms/icons";
import { EmotionWrapper } from "@/app/modules/SnapGram/components/modecules/Comments/styles.tsx";
// Component

// Style

// Types

interface Props {
  amount: number;
}

const Comments: React.FC<Props> = (props) => {
  const { amount } = props;
  const [hasText, setHasText] = useState(false);
  const [openEmotionDialog, setOpenEmotionDialog] = useState(false);
  const textareaRef = useRef(null);

  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Đặt chiều cao về auto để tính lại chiều cao thực tế
      textarea.style.height = `${textarea.scrollHeight}px`; // Đặt chiều cao là chiều cao thực tế
    }
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setHasText(inputValue !== "");
  };
  return (
    <div className={" my-5"}>
      <div className={"flex-col "}>
        <span className={"text-gray-500"}>View {amount} comments</span>
      </div>
      <div className={"flex flex-row"}>
        <Textarea
          placeholder={"Add your comment..."}
          ref={textareaRef}
          onChange={(event) => {
            handleTextareaChange();
            setHasText(true);
          }}
          rows={1}
          className={
            "!min-h-[45px] h-[45px] max-h-[120px] overflow-auto custom-scrollbar rounded-[3px]  flex items-center px-1 shad-textarea  bg-dark-1 border-0 text-[15px] text-gray-400 !focus-visible:shadow-none"
          }
        />
        {hasText && (
          <div className={"relative flex justify-between items-center"}>
            <span
              className={
                " flex items-center justify-center px-2 text-blue-500 cursor-pointer font-bold"
              }>
              Post
            </span>
            <EmotionIcon
              width={20}
              height={20}
              className={"cursor-pointer fill-pink-500"}
              onClick={() => setOpenEmotionDialog(true)}
              onBlur={() => setOpenEmotionDialog(false)}
            />
            {openEmotionDialog && (
              <EmotionWrapper>
                <Picker data={data} onEmojiSelect={console.log} />
              </EmotionWrapper>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;

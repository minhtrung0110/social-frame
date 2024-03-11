// Libraries
import React, { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { EmotionIcon } from "@/app/components/atoms/icons";

// Component
import { EmotionWrapper } from "@/app/modules/SnapGram/components/modecules/Comments/styles.tsx";
import { Textarea } from "@/app/components/ui/textarea.tsx";

// Style

// Types

interface Props {
  amount: number;
}

const Comments: React.FC<Props> = (props) => {
  const { amount } = props;
  // State
  const [hasText, setHasText] = useState(false);
  const [comment, setComment] = useState<any>("");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [newComments, setNewComments] = useState([]);

  // Ref
  const pickerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsPickerVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmotionIconClick = () => {
    setIsPickerVisible((prevShowPicker) => !prevShowPicker);
  };
  const handleTextareaChange = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Đặt chiều cao về auto để tính lại chiều cao thực tế
      textarea.style.height = `${textarea.scrollHeight}px`; // Đặt chiều cao là chiều cao thực tế
    }
  };

  // Handle pick emotion and insert to comment
  const handleEmojiPickup = (emoji: any) => {
    if (inputRef) {
      const cursorPosition = inputRef.current?.selectionStart || 0;
      // concat the emoji to the string
      const text =
        comments.slice(0, cursorPosition) +
        emoji.native +
        comments.slice(cursorPosition);
      setComments(text);
      const newCursorPosition = cursorPosition + emoji.native!.length;
      // allow to add multiple emojis in the same position of string
      setTimeout(() => {
        inputRef.current?.setSelectionRange(
          newCursorPosition,
          newCursorPosition
        );
      }, 10);
    }
  };

  // Create comment
  const handleSubmit = (e) => {
    e.preventDefault();

    // on Success
    setComment("");
    setHasText(false);
  };
  return (
    <div className={" my-5"}>
      <div className={"flex-col "}>
        <span className={"text-gray-500 cursor-pointer"}>
          View {amount} comments
        </span>
        <div className={"new-comments"}>{!!newComments && {}}</div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={"flex flex-row"}>
          <Textarea
            placeholder={"Add your comment..."}
            id="messageInput"
            name={"message"}
            value={comment}
            onChange={(event) => {
              handleTextareaChange();
              setHasText(true);
              setComment(event.target.value);
            }}
            ref={inputRef}
            rows={1}
            className={
              "!min-h-[45px] h-[45px] max-h-[120px] overflow-auto custom-scrollbar rounded-[3px]  flex items-center px-1 shad-textarea  bg-dark-1 border-0 text-[15px] text-gray-400 !focus-visible:shadow-none"
            }
          />
          {hasText && (
            <div className={"relative flex justify-between items-center"}>
              <button
                type="submit"
                className={
                  " flex items-center justify-center px-2 text-blue-500 cursor-pointer font-bold"
                }>
                Post
              </button>
              <EmotionIcon
                width={20}
                height={20}
                className={"cursor-pointer fill-pink-500"}
                onClick={handleEmotionIconClick}
              />
              {isPickerVisible && (
                <EmotionWrapper>
                  <div ref={pickerRef}>
                    <Picker
                      data={data}
                      //onSelect={handleEmojiPickup}
                      onClick={() => inputRef.current?.focus()}
                      onEmojiSelect={handleEmojiPickup}
                    />
                  </div>
                </EmotionWrapper>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Comments;

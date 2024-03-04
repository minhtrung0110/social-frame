// Libraries
import React from "react";

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const Loader: React.FC<Props> = () => {
  return (
    <div className="flex-center w-full">
      <img
        src="/assets/icons/loader.svg"
        alt="loader"
        width={24}
        height={24}
        className="animate-spin"
      />
    </div>
  );
};

export default Loader;

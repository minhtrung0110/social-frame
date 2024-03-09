import React, { FC, ReactNode, useEffect, useState } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: Error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // Hiển thị giao diện khi có lỗi
    return <div>Something went wrong!</div>;
  }

  // Hiển thị nội dung bình thường nếu không có lỗi
  return <>{children}</>;
};

export default ErrorBoundary;

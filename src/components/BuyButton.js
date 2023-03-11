import React from "react";
import classNames from "classnames";

const BuyButton = ({ onClick }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick && onClick();
  };
  return (
    <button
      className={classNames(
        "w-full sm:w-2/3 lg:w-full mx-auto px-10 py-2 rounded-md bg-blue-500 text-white font-semibold text-base transition ease-in-out duration-150",
        {
          "hover:bg-blue-600": !isLoading,
          "flex justify-center items-center space-x-2 cursor-not-allowed opacity-50":
            isLoading,
        }
      )}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {isLoading ? "正在跳转支付..." : "购买"}{" "}
    </button>
  );
};

export default BuyButton;

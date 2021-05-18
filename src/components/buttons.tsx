import clsx from "clsx";
import { HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  danger?: boolean;
  iconOnly?: boolean;
}

export const TextButton = ({
  className = "",
  primary,
  danger,
  iconOnly = false,
  children,

  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, "font-medium", {
        "text-gray": !primary && !danger,
        "text-indigo-400": primary,
        "text-red-400": danger,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const HighlightButton = ({
  className = "",
  primary,
  danger,
  iconOnly = false,
  children,

  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, "font-medium rounded-md text-xs p-sm", {
        "text-gray bg-gray-50": !primary && !danger,
        "text-indigo-500 bg-indigo-100": primary,
        "text-red-400 bg-red-100": danger,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ElevatedButton = () => {};

import { FC } from "react";
import { TButton } from "./types";
import cn from "classnames";
import styles from "./button.module.scss";

export const Button: FC<TButton> = ({
  className,
  children,
  onClick,
  isGreen,
}) => {
  const bgColor = isGreen ? styles.green : styles.purple;

  return (
    <button className={cn(styles.btn, bgColor, className)} onClick={onClick}>
      {children}
    </button>
  );
};

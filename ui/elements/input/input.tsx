import { ChangeEvent, FC, useState } from "react";
import { TInput } from "./types";
import cn from "classnames";
import styles from "./button.module.scss";

export const Input: FC<TInput> = ({
  className,
  onChange,
}) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(onChange) onChange(e.currentTarget.value);

    setValue(e.currentTarget.value)
  }

  return (
    <input type="text" className={cn(styles.input, className)} onChange={changeHandler} />
  );
};

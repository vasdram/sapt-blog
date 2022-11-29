import cn from "classnames";
import { FC } from "react";
import { TLink } from "../../types";
import styles from "./link.module.scss";

export const Link: FC<TLink> = ({ name, isActive, onClick }) => (
  <li className={cn(styles.link, {[styles.active]: isActive})} onClick={onClick} >{name}</li>
);

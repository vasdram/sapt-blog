import { FC, useEffect, useState } from "react";
import { TCategories } from "./types";
import styles from "./categories.module.scss";
import { Link } from "./components/link";

export const Categories: FC<TCategories> = ({ list }) => {
  const [category, setCategory] = useState("all");

  const clickHandler = (id: string) => () => {
    setCategory((prew) => (prew !== id ? id : prew));
  };

  return (
    <ul className={styles.categories}>
      <Link
        name="All"
        isActive={"All" === category}
        onClick={clickHandler("All")}
      />
      {list.map(({ id, name, isShow }) => {
        if (!isShow) return;
        return (
          <Link
            name={name}
            isActive={id === category}
            onClick={clickHandler(id)}
          />
        );
      })}
    </ul>
  );
};

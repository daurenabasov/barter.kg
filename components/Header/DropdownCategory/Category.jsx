import React from "react";
// import next
import Link from "next/link";
// import styles
import s from "./category.module.css";

const Dropdown = () => {
  return (
    <div>
      <div className={s.dropdown}>
        <span className={s.dropbtn}>Категория</span>
        <div className={s.dropdown__content}>
          <Link href="/">
            <a>Новые</a>
          </Link>
          <Link href="/">
            <a>Популярные</a>
          </Link>
          <Link href="/">
            <a>Лента</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

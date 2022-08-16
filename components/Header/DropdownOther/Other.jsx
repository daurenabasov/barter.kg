// import next
import Link from "next/link";
// import styles
import s from "./other.module.css";
const Dropdown = () => {
  return (
    <div>
      <div className={s.dropdown}>
        <span className={s.dropbtn}>Другое</span>
        <div className={s.dropdown__content}>
          <Link href="/">
            <a>Профиль</a>
          </Link>
          <Link href="/">
            <a>Реклама</a>
          </Link>
          <Link href="/">
            <a>Конфеденциальность</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

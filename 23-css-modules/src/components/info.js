import "./info.css";

import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello frm Info</h1>
      <button className="my-button">Click me</button>
      <button className={styles.myOtherButton}>NewButton</button>
    </div>
  );
}

export default Info;

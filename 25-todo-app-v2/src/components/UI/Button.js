import styles from "./Button.module.css";

function Button(props) {
  const { title, children, onClick, disabled = false } = props;
  return (
    <button
      {...props}
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;

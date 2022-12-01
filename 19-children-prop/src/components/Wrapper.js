function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    padding: "20px",
    widht: "250px",
    margin: "20px auto",
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;

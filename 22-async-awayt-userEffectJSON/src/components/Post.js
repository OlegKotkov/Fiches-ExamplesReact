import "./Post.css";

function Post(props) {
  const { id, title, userId, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{userId}</p>
      <h3>{body}</h3>
    </div>
  );
}
export default Post;

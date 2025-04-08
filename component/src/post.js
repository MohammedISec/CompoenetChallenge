function Post({ title = "no title", body = "no Body" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        margin: "25px",
      }}
    >
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
    </div>
  );
}
export default Post;

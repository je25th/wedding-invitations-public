const Comment = ({ id, name, body, createdAt }) => {
  return (
    <li key={id}>
      <p className="writer" style={{ marginBottom: ".5%" }}>
        {name} <span>{createdAt.replace("T", " ")}</span>
      </p>
      <p
        className="content"
        style={{ whiteSpace: "pre-wrap", lineHeight: "1.5em" }}
      >
        {body}
      </p>
    </li>
  );
};

export default Comment;

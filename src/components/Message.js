import { useState, useRef, useEffect } from "react";
import Comment from "./Comment";

const auth1 = "=====";
const auth2 = "======";
const auth3 = "=======";
const auth4 = "========";

const Message = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/========/======/issues", {
      method: "GET",
      headers: {
        Authorization:
          "token " +
          auth1.substring(0, 10) +
          auth2.substring(0, 10) +
          auth3.substring(0, 10) +
          auth4.substring(0, 10),
      },
    })
      .then((response) => response.json())
      .then((issues) => {
        let commentList = issues.map((issue) => {
          let newObj = {};
          newObj["id"] = issue.id;
          newObj["name"] = issue.title;
          newObj["body"] = issue.body;
          newObj["createdAt"] = issue.created_at;
          return newObj;
        });
        setComments(commentList);
      });
  }, []);

  const handleSubmit = () => {
    if (name.length < 1 || body.length < 1) {
      return;
    }

    fetch("https://api.github.com/repos/========/======/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "token " +
          auth1.substring(0, 10) +
          auth2.substring(0, 10) +
          auth3.substring(0, 10) +
          auth4.substring(0, 10),
      },
      body: JSON.stringify({
        title: name, // issue 제목
        body: body, // issue 본문
      }),
    })
      .then((response) => response.json())
      .then((newIssue) => {
        setName("");
        setBody("");

        let newObj = {};
        newObj["id"] = newIssue.id;
        newObj["name"] = newIssue.title;
        newObj["body"] = newIssue.body;
        newObj["createdAt"] = newIssue.created_at;
        setComments([newObj, ...comments]);
      });
  };

  return (
    <div className="message">
      <ul className="message-list-container">
        {comments.map((comment) => (
          <Comment
            id={comment.id}
            name={comment.name}
            body={comment.body}
            createdAt={comment.createdAt}
          />
        ))}
      </ul>
      <div className="message-write-container">
        <div className="message-write-box">
          <div className="write-input-box">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="이름"
            ></input>
            {/* <input type="password" placeholder="비밀번호"></input> */}
          </div>
          <div className="write-textarea-box">
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button onClick={() => handleSubmit()}>
              댓글
              <br />
              작성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

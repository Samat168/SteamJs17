import React, { useState } from "react";
import ProductComment from "./ProductComment";
import { useAuth } from "../../contexts/AuthContextProvider";

const ProductCommentList = ({ productId }) => {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  const {
    user: { email },
  } = useAuth();

  const addComment = (content) => {
    const newComment = {
      id: Date.now(),
      productId: productId,
      author: email,
      content,
      date: new Date().toLocaleString(),
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const content = event.target.elements.comment.value;
    if (content) {
      addComment(content);
      event.target.elements.comment.value = "";
    }
  };

  const filteredComments = comments.filter(
    (comment) => comment.productId === productId
  );

  return (
    <div>
      <form onSubmit={handleAddComment} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="comment"
          placeholder="Напишите комментарий"
          style={{
            width: "100%",
            height: "80px",
            fontSize: "14px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "19px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#171a21",
            color: "#c6d4df",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Добавить комментарий
        </button>
      </form>
      {filteredComments.map((comment, index) => (
        <ProductComment
          key={index}
          author={comment.author}
          date={comment.date}
          content={comment.content}
          onDelete={() => deleteComment(comment.id)}
        />
      ))}
    </div>
  );
};

export default ProductCommentList;

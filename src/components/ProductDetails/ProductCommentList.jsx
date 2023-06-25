import React, { useState } from "react";
import ProductComment from "./ProductComment";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";

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
      <form
        onSubmit={handleAddComment}
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <textarea
          type="text"
          name="comment"
          placeholder="Напишите комментарий"
          style={{
            width: "40%",
            height: "80px",
            fontSize: "14px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            backgroundColor: "#030521",
            color: "white",
            resize: "vertical",
          }}
        />
        {email ? (
          <button
            type="submit"
            style={{
              backgroundColor: "#171a21",
              color: "#c6d4df",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.875em",

              marginLeft: "20px",
              flex: "0 0 10%",
            }}
          >
            Добавить отзыв
          </button>
        ) : (
          <Link to="/auth">
            <button
              style={{
                backgroundColor: "#171a21",
                color: "#c6d4df",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.875em",

                marginLeft: "20px",
                flex: "0 0 10%",
              }}
            >
              Добавить отзыв
            </button>
          </Link>
        )}
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

import React from "react";
import "./ProductComment.css";

const ProductComment = ({ author, date, content, onDelete }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="comment-date">{date}</span>
      </div>
      <p className="comment-content">{content}</p>
      <button className="delete-comment" onClick={onDelete}>
        Удалить комментарий
      </button>
    </div>
  );
};

export default ProductComment;

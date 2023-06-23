import React from "react";
import "./ProductComment.css";

const ProductComment = ({ author, date, content }) => {
  return (
    <div className="comment-people">
      <p className="text-comment">ОТЗЫВЫ ПОКУПАТЕЛЕЙ</p>
      <div className="comment">
        <div className="comment-header">
          <span className="comment-author">{author}</span>
          <span className="comment-date">{date}</span>
        </div>
        <div className="comment-content">{content}</div>
      </div>
    </div>
  );
};

export default ProductComment;

import React from "react";

import ProductComment from "./ProductComment";

const ProductCommentList = () => {
  const addComment = (author, content) => {
    // Получаем текущие комментарии из localStorage (если они есть)
    const existingComments = localStorage.getItem("comments");
    const comments = existingComments ? JSON.parse(existingComments) : [];

    // Создаем новый комментарий
    const newComment = {
      author,
      content,
      date: new Date().toLocaleString(), // Добавляем текущую дату и время
    };

    // Добавляем новый комментарий в массив комментариев
    comments.push(newComment);

    localStorage.setItem("comments", JSON.stringify(comments));
  };

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const currentUser = "John";

  const handleAddComment = (content) => {
    addComment(currentUser, content);
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <ProductComment
          key={index}
          author={comment.author}
          date={comment.date}
          content={comment.content}
        />
      ))}

      <form>
        <input type="text" placeholder="Напишите комментарий" />
        <button onClick={handleAddComment} type="submit">
          Добавить комментарий
        </button>
      </form>
    </div>
  );
};

export default ProductCommentList;

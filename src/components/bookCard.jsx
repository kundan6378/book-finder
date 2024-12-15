import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <img
        src={book.cover}
        alt={book.title}
        className="w-32 h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{book.title}</h3>
      <p className="text-gray-600 text-center">{book.author}</p>
    </div>
  );
};

export default BookCard;

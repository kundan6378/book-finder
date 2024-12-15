import React from "react";
import BookCard from "./bookCard";

const BookList = ({ books }) => {
  if (!books.length) {
    return null; 
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

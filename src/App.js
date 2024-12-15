import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import BookList from "./components/bookList";
import { searchBooks } from "./api";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const results = await searchBooks(query);
      setBooks(results);

      if (results.length === 0) {
        setError("No books found. Try a different search!");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {!loading && error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && hasSearched && books.length === 0 && (
        <p className="text-center text-gray-500">No books found. Try a different search!</p>
      )}
      <BookList books={books} />
    </div>
  );
};

export default App;

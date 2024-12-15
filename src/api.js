// src/api.js
export const searchBooks = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Transform the data to extract necessary information
      const books = data.docs.map((doc) => ({
        id: doc.key, // Unique identifier
        title: doc.title,
        author: doc.author_name ? doc.author_name.join(', ') : 'Unknown Author',
        cover: doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
          : 'https://via.placeholder.com/150', // Placeholder image if no cover
      }));
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  };
  
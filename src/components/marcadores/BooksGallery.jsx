import React from 'react';
import './BooksGallery.css';

export default function BooksGallery({ children }) {
  return (
    <div className="books-gallery">
      <div className="books-gallery__grid">
        {children}
      </div>
    </div>
  );
}

import React from 'react';
import './BookCard.css';

export default function BookCard({ book }) {
  const { title, author, description, coverImage, goodreadsUrl } = book;

  return (
    <div className="book-card">
      <div className="book-card__cover">
        {coverImage ? (
          goodreadsUrl ? (
            <a
              href={goodreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="book-card__cover-link"
            >
              <img
                src={coverImage}
                alt={`Portada de ${title}`}
                className="book-card__image"
              />
            </a>
          ) : (
            <img
              src={coverImage}
              alt={`Portada de ${title}`}
              className="book-card__image"
            />
          )
        ) : (
          <div className="book-card__placeholder">
            <span className="book-card__placeholder-text">📚</span>
          </div>
        )}
      </div>

      <div className="book-card__content">
        <h3 className="book-card__title">
          {goodreadsUrl ? (
            <a
              href={goodreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="book-card__title-link"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <p className="book-card__author">
          de <strong>{author}</strong>
        </p>

        <p className="book-card__description">
          {description}
        </p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

const SimpleRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>Rate Us</h3>
      <div style={{ display: 'inline-flex', cursor: 'pointer' }}>
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => handleHover(starValue)}
              onMouseLeave={handleMouseLeave}
              style={{
                fontSize: '2rem',
                color: starValue <= (hoverRating || rating) ? '#FFD700' : '#ccc',
                transition: 'color 0.2s',
              }}
            >
              ★
            </span>
          );
        })}
      </div>
      <p style={{ marginTop: '10px' }}>
        {rating > 0 ? `You rated us ${rating} star${rating > 1 ? 's' : ''}!` : 'Click to rate!'}
      </p>
    </div>
  );
};

export default SimpleRating;

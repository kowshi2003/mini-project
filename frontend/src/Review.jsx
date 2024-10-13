// Review.js
import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [reviews, setReviews] = useState([
    { name: 'John Doe', review: 'Great gym with excellent trainers!' },
    { name: 'Jane Smith', review: 'Love the yoga studio, very relaxing.' },
  ]);
  const [newReview, setNewReview] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddReview = () => {
    if (newReview && newName) {
      setReviews([...reviews, { name: newName, review: newReview }]);
      setNewReview('');
      setNewName('');
    }
  };

  return (
    <section className="review-section">
      <h2>Reviews</h2>
      <div className="reviews-list">
        {reviews.map((item, index) => (
          <div key={index} className="review-item">
            <h4>{item.name}</h4>
            <p>{item.review}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
        <textarea 
          placeholder="Write your review here..." 
          value={newReview} 
          onChange={(e) => setNewReview(e.target.value)} 
        />
        <button onClick={handleAddReview}>Submit Review</button>
      </div>
    </section>
  );
};

export default Review;

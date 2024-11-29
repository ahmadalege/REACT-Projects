import { useState } from "react";
import "../style.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used! (proper narc this one!)",
      author: "John Doe",
    },
    {
      quote: "I highly recommend this product to everyone! (bro yaps a lot)",
      author: "Jackson Smith",
    },
    {
      quote: "This product has completely changed my life! (paid to cap)",
      author: "Ariana Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length
    );
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimnials-author">
        -{testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;

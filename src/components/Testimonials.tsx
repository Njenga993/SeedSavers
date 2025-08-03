import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Agnes Wanjiru",
    role: "Farmer, Murang’a",
    quote: "Seed Savers Kenya helped me preserve my traditional seeds. Now I harvest better and more nutritious food for my family.",
  },
  {
    name: "Joseph Otieno",
    role: "Agronomist",
    quote: "Their dedication to local seed banks is inspiring. This initiative protects biodiversity and empowers communities.",
  },
  {
    name: "Mary Njeri",
    role: "Nutritionist",
    quote: "Indigenous vegetables promoted by Seed Savers are key to fighting malnutrition in rural areas.",
  },
  {
    name: "David Kiptoo",
    role: "Youth Farmer, Eldoret",
    quote: "With support from Seed Savers, I started a kitchen garden using traditional crops. The results are amazing.",
  },
  {
    name: "Grace Achieng",
    role: "NGO Partner",
    quote: "Working with Seed Savers Kenya has been fulfilling — their community impact is genuine and lasting.",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, role } = testimonials[index];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <FaQuoteLeft className="quote-icon" />
        <p className="testimonial-quote">"{quote}"</p>
        <p className="testimonial-author">— {name}</p>
        <p className="testimonial-role">{role}</p>

        <div className="testimonial-arrows">
          <button onClick={prevTestimonial} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button onClick={nextTestimonial} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

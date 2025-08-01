
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        Whether you have a question, want to volunteer, or partner with us — we’d love to hear from you.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@seedsaverskenya.org</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
          <p><strong>Working Hours:</strong> Mon - Fri | 9:00AM - 5:00PM</p>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="Write your message..." required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

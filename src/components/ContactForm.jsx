import { useState } from "react";
import { validateForm } from "../utils/validation";
import { saveSubmission } from "../utils/storage";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      saveSubmission(formData);

      alert("Form Submitted Successfully...!!!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you. Fill out the form below and our team will
          get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <p className="error-text">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Subject</label>

          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
          />

          {errors.subject && (
            <p className="error-text">{errors.subject}</p>
          )}
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            rows="5"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <p className="error-text">{errors.message}</p>
          )}

          <small className="char-count">
            {formData.message.length}/500 Characters
          </small>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

import { useState } from "react";

function Contact() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.category ||
      !formData.message
    ) {
      setError(
        "All fields are required"
      );
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(
        formData.email
      )
    ) {
      setError(
        "Invalid Email"
      );
      return;
    }

    if (
      !/^\d{10}$/.test(
        formData.phone
      )
    ) {
      setError(
        "Phone must contain exactly 10 digits"
      );
      return;
    }

    const messages =
      JSON.parse(
        localStorage.getItem(
          "contactMessages"
        )
      ) || [];

    messages.push(formData);

    localStorage.setItem(
      "contactMessages",
      JSON.stringify(messages)
    );

    alert(
      "Message Submitted Successfully"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });

    setError("");
  };

  return (
  <div className="contact-container">

    <div className="contact-card">

      <h1>📞 Contact Us</h1>

      <p className="contact-subtitle">
        Have feedback or questions? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">
            Select Category
          </option>

          <option value="Feedback">
            Feedback
          </option>

          <option value="Bug Report">
            Bug Report
          </option>

          <option value="General Query">
            General Query
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Type your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="contact-btn"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
);
}

export default Contact;
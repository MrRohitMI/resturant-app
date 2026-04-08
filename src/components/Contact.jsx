import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50 px-4 md:px-10 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>📧 support@foodapp.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 India</p>
            <p>⏰ 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Send Message</h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [note, setNote] = useState({ text: '', color: '#7b3b59' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!formData.name.trim() || !formData.message.trim() || !isEmailValid) {
      setNote({ text: 'Please fill all fields with valid details.', color: '#b00045' });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        setNote({ text: result.message || 'Unable to send message.', color: '#b00045' });
      } else {
        setNote({ text: 'Message sent successfully. Thank you!', color: '#127a40' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setNote({ text: 'Error sending message. Please try again.', color: '#b00045' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        <i className="fa-solid fa-paper-plane"></i> {loading ? 'Sending...' : 'Send Message'}
      </button>
      <p className="form-note" style={{ color: note.color }}>{note.text}</p>
    </form>
  );
}

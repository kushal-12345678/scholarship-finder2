import React, { useState } from 'react';

const ScholarshipForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    year: '',
    gpa: '',
    income: '',
    category: '',
    goals: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent (App.jsx)
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="degree" placeholder="Degree (e.g., B.Tech CSE)" onChange={handleChange} required />
      <input name="year" placeholder="Year of Study (e.g., 3rd Year)" onChange={handleChange} required />
      <input name="gpa" placeholder="GPA or % (e.g., 8.2 or 75%)" onChange={handleChange} required />
      <input name="income" placeholder="Family Income (optional)" onChange={handleChange} />
      <input name="category" placeholder="Category (GEN/OBC/SC/ST/EWS)" onChange={handleChange} required />
      <textarea name="goals" placeholder="Your career goals..." onChange={handleChange} required />
      <button type="submit">Find Scholarships</button>
    </form>
  );
};

export default ScholarshipForm;

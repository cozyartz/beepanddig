import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.name && formData.email && formData.message) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });

    await toast.promise(
      submitPromise,
      {
        loading: 'Sending message...',
        success: 'Message sent! We\'ll get back to you soon.',
        error: 'Please fill out all fields.'
      }
    );

    // Reset form on success
    if (formData.name && formData.email && formData.message) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-light rounded-xl bg-background text-text focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
          placeholder="Your name"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-light rounded-xl bg-background text-text focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-light rounded-xl bg-background text-text focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
          placeholder="Tell us about your metal detecting adventures or questions..."
        />
      </motion.div>

      <motion.button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Send Message ⚒️
      </motion.button>
    </motion.form>
  );
}
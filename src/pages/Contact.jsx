
import React, { useRef, useState } from 'react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus('Enquiry sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Email send failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full md:w-[90%] h-full text-white overflow-hidden text-center bg-black hover:bg-[#020617] shadow-xl mx-0 md:mx-20 bg-opacity-30 p-2 py-12 rounded-lg"
    >
      <h1 className="text-4xl font-bold my-8 leading-normal tracking-wide text-[#2563eb]">
        Contact
      </h1>

      <div className="m-3 mt-0 md:mt-3 flex flex-col md:justify-between md:items-center md:flex-row">
        <div className="flex-col mr-2">
          <div className="flex items-center mb-4">
            <FaPhone color="#2563eb" size={20} />
            <h2 className="ml-2 text-lg font-semibold text-white">
              <span className="text-[#2563eb] font-semibold text-xl mx-2">
                Number:
              </span>
              6261475554
            </h2>
          </div>

          <div className="flex items-center">
            <FaMailBulk color="#2563eb" size={20} />
            <h2 className="ml-2 text-lg font-semibold text-white">
              <span className="text-[#2563eb] font-semibold text-xl mx-2">
                Mail:
              </span>
              ajaysahu1442015@gmail.com
            </h2>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-xl border-2 mt-5 md:mt-2 border-solid border-blue-500 py-2 shadow-xl text-center flex flex-col md:w-2/4"
        >
          <h2 className="font-bold text-2xl text-[#2563eb] my-4">
            Enquiry Form
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="First Name"
            required
            className="bg-white border-2 rounded-xl px-4 py-2 m-2 text-lg text-blue-900"
          />

          <input
            type="text"
            name="user_last"
            placeholder="Last Name"
            required
            className="bg-white border-2 rounded-xl px-4 py-2 m-2 text-lg text-blue-900"
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Mobile Number"
            required
            className="bg-white border-2 rounded-xl px-4 py-2 m-2 text-lg text-blue-900"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="bg-white border-2 rounded-xl px-4 py-2 m-2 text-lg text-blue-900"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="bg-white border-2 rounded-xl p-3 m-2 text-black text-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#2563eb] text-white p-3 m-2 mt-5 rounded-xl font-bold disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Submit Details'}
          </button>

          {status && (
            <p role="status" aria-live="polite" className="p-3 text-sm">
              {status}
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

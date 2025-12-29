import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ivpc35j",
        "template_60ydeow",
        form.current,
        "N2loFOVzu1s68O2jw"
      )
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        CONTACT ME
      </motion.h2>

      <p className={styles.description}>
        Interested in working together or hiring me? Send me a message!
      </p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className={styles.successMessage}>
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Akash Anand. All rights reserved.</p>
      </footer>
    </section>
  );
};

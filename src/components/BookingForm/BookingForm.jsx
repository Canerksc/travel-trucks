import { useState } from "react";
import toast from "react-hot-toast"; // Bildirim için
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  // Form verilerini tutacak state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basit doğrulama 
    if (!formData.name || !formData.email || !formData.date) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Başarılı senaryo 
    toast.success("Booking successfully submitted!");
    console.log("Form Data:", formData);
    
    // Formu temizle
    setFormData({ name: "", email: "", date: "", comment: "" });
 
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            placeholder="Booking date*"
            className={styles.input}
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Comment"
            className={styles.textarea}
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>Send</button>
      </form>
    </div>
  );
};

export default BookingForm;
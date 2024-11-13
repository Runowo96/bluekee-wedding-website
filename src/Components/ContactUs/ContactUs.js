import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.scss";
import deleteBtn from "../../assets/icons/delete-btn.svg";

function ContactUs({ cart, setCart }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    weddingDate: "",
    guestNumber: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});




  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
        // eslint-disable-next-line

  }, [cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate form fields
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send email using EmailJS
      emailjs
        .send(
          "service_6aggdkg",
          "template_vxmm33o",
          {
            user_name: formData.fullName,
            user_email: formData.email,
            user_phone: formData.phone,
            wedding_date: formData.weddingDate,
            guest_number: formData.guestNumber,
            additional_info: formData.additionalInfo,
            cart_items: cart.map((item) => item.name).join(", "),
          },
          "bNHkh4Uu5v7BiqybB"
        )
        .then((response) => {
          alert("Form submitted successfully!");
          console.log(response);
          // Clear the form and cart
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            weddingDate: "",
            guestNumber: "",
            additionalInfo: "",
          });
          setCart([]);
        })
        .catch((error) => {
          console.log("Failed to send email:", error.text);
        });
    }
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to remove a single item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="contact-us">
      <h2 className="contact-us__header">Contact Us / Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label>Wedding Date:</label>
          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
          />
          {errors.weddingDate && (
            <span className="error">{errors.weddingDate}</span>
          )}
        </div>

        <div>
          <label>Estimated Guest Number:</label>
          <input
            type="number"
            name="guestNumber"
            value={formData.guestNumber}
            onChange={handleChange}
            min="1"
          />
          {errors.guestNumber && (
            <span className="error">{errors.guestNumber}</span>
          )}
        </div>

        <div className="cart">
          <h3>Your Cart ({cart.length} items)</h3>
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name}
                  <button
                  type="button"
                    className="cart__btn"
                    onClick={() => removeFromCart(index)}
                  >
                    <img src={deleteBtn} alt="delete icon"/>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button type="button" className="cart__clear" onClick={clearCart}>Clear Cart</button>
        </div>

        <div>
          <label>Additional Info:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

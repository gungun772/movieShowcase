// src/components/ContactForm.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or API call here
    console.log("Form Data:", formData);
  };

  return (
    <div className="contact_div">
      <div className="map">
        <iframe
          className="contact_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219985.13239228545!2d76.49830977065896!3d30.51346873495391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec00d166f58b%3A0x8a8c7b6ac3c8b0b1!2sCinepolis!5e0!3m2!1sen!2sin!4v1725277871006!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact_start">
        <div className="c_head">
          <h1>Contact us form</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <div className="input-group flex-nowrap c_name f_name">
              <input
                type="text"
                className="form-control p-3 mb-2 bg-transparent text-white border border-dark fw-bolder"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group flex-nowrap c_name l_name">
              <input
                type="text"
                className="form-control p-3 mb-2 bg-transparent text-white border border-dark fw-bolder"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact_email">
            <div className="mb-3 c_name">
              <input
                type="email"
                className="form-control p-3 mb-2 bg-transparent text-white border border-dark fw-bolder"
                placeholder="Write Your Email..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 c_name">
              <input
                type="tel"
                className="form-control p-3 mb-2 bg-transparent text-white border border-dark fw-bolder"
                placeholder="Write Your Mobile..."
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>
          <div className="area c_name1">
            <textarea
              name="message"
              id="textarea"
              className="form-control p-3 mb-2 bg-transparent text-white border border-dark fw-bolder massage"
              placeholder="Type your message here...."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="contact_send">
            <button type="submit" className="button mb-2 bg-white text-dark fw-bolder">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

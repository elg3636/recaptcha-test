import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setMessage("Please complete the CAPTCHA.");
      return;
    }

    setMessage("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center", paddingTop: "50px" }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <ReCAPTCHA
          sitekey="6LdW-dMqAAAAALBfYrr02lnA_qz5harceqpsGNI7"  
          onChange={handleCaptchaChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;

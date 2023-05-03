import React, { useState } from "react";
import "./HomePage.css";
import homeImg from "./assets/Homepage.png";
import titleImg from "./assets/title_img.png";

function HomePage() {
  const [responseMessage, setResponseMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const countryCode = document.getElementById("country-code").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const formData = {
      "coupon-id": document.querySelector('input[name="coupon-id"]').value,
      "country-code": countryCode,
      "phone-number": phoneNumber,
      type: "redeem_request",
    };
    fetch("https://dev-global.sp.smartretail.co/api/smart-engage/post/get-rewards-line", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          //redirect to url
          window.location.replace(data.url);
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="banner">
        <img src={titleImg} alt="title" />
        <img src={homeImg} alt="banner image" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="coupon-id" value="569" />
          <select id="country-code" name="country-code">
            <option value="65">Singapore(+65)</option>
            <option value="852">Hong Kong (+852)</option>
            <option value="81">Japan (+81)</option>
            <option value="60">Malaysia (+60)</option>
          </select>
          <input
            type="text"
            id="phone-number"
            name="phone-number"
            placeholder="Enter phone number"
          />
          <input type="submit" value="Submit" />
        </form>
        <div id="response-message">{responseMessage}</div>
      </div>
    </div>
  );
}

export default HomePage;
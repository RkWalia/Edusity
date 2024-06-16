import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import email from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bd82592-3724-4775-a65b-d72eb801bd9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={email} alt="" />Email</li>
            <li><img src={phone} alt="" />Phone No.</li>
            <li><img src={location} alt="" />Address</li>
        </ul>
      </div>
      <div className="col">
        <form onSubmit={onSubmit}> 
            <label>Your Name </label>
            <input type="text" name='name' placeholder='Enter your Name...' required />
            <label>Phone Number</label>
            <input type="tel" name='phone_no' placeholder='Enter your Phone Number...' required />
            <label>Your Email </label>
            <input type="email_id" name='email_id' placeholder='Enter your email id...' required />
            <label >Write your messages here</label>
            <textarea name="msges" id="msges" placeholder='Enter your message...' cols={25} rows={4} required ></textarea>
            <button type='submit' className='btn' >Submit Now</button>
            <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact

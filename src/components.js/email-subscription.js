import React from 'react';
import { useRef, useState } from 'react';
// import background from '..images/error_icon.png';
export default function Subscription() {
  const [email, setEmail] = useState('');
  const [verifyMail, setVerifyMail] = useState(true);
  const emailInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyEmail(emailInput.current.value);
  };

  const verifyEmail = (mail) => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const testMail = emailRegex.test(mail);
    setVerifyMail(testMail);
  };

  return (
    <section className="subscription">
      <p className="users">35,000+ ALREADY JOINED</p>
      <p className="check-in">Stay up-to-date with what we're doing</p>

      <form>
        <div className="verify">
          <input
            className="email"
            type="text"
            placeholder="example@email.com"
            ref={emailInput}
            style={{
              backgroundImage: `url(${!verifyMail && `/img/error_icon.png`})`,
            }}
          />
          <p style={{ textAlign: 'left' }} className="verify-text">
            {!verifyMail && "Whoops make sure it's an email"}
          </p>
        </div>
        <button className="email-submit" onClick={handleSubmit}>
          {' '}
          Contact Us
        </button>
      </form>
    </section>
  );
}

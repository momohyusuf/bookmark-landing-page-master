import { useState, useRef } from 'react';
import { app } from '../firebaseConfig';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const showPassword = useRef();

  console.log(app);

  const seePassword = () => {
    showPassword.current.type === 'password'
      ? (showPassword.current.type = 'text')
      : (showPassword.current.type = 'password');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(formData);
  return (
    <section className="login-section">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
        />{' '}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
          ref={showPassword}
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name=""
          id="showpassword"
          onClick={seePassword}
        />
        <label htmlFor="showpassword">Show password</label>
        <button id="login-btn">Login</button>
      </form>
    </section>
  );
}

import React, { useEffect } from 'react';
import './form.css';
import './littles.css';

function Form() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".form-input .input-field");
    inputs.forEach(input => {
      const label = input.nextElementSibling;
      input.addEventListener('input', () => {
        if (input.value !== '') {
          label.style.transform = "translateY(-2rem)";
          label.style.color = "#009dff";
        } else {
          label.style.transform = "translateY(0)";
          label.style.color = "#ddd";
        }
      });
    });
  }, []);

  return (
    <body className='center1'>
      <main className='fdc'>
        <h1 className="user-select-none">Form in React</h1>
        <form className='fdc gap' action='#'>
          <div className="form-input fdc center1">
            <input className='input-field' type="text" id="name" name="name" required />
            <label className="absolute user-select-none" htmlFor="name">Full Name</label>
          </div>

          <div className="form-input fdc center1">
            <input className='input-field' type="email" id="email" name="email" required />
            <label className="absolute user-select-none" htmlFor="email">Email</label>
          </div>

          <div className="form-input fdc center1">
            <input className='input-field' type="password" id="password" name="password" required />
            <label className="absolute user-select-none" htmlFor="password">Password</label>
          </div>

          <div className="form-input fdc center1">
            <input className='input-field' type="text" id="contact" name="contact" required />
            <label className="absolute user-select-none" htmlFor="contact">Contact</label>
          </div>

          <div className="gender-input faic gap">
            <label className='user-select-none' htmlFor="gender-male">Gender :</label>
            <div className="faic s-gap pointer">
              <input type="radio" id="gender-male" name="gender" value="male" required />
              <label className='user-select-none pointer' htmlFor="gender-male">Male</label>
            </div>
            <div className="faic s-gap pointer">
              <input type="radio" id="gender-female" name="gender" value="female" required />
              <label className='user-select-none pointer' htmlFor="gender-female">Female</label>
            </div>
            <div className="faic s-gap pointer">
              <input type="radio" id="gender-other" name="gender" value="other" required />
              <label className='user-select-none pointer' htmlFor="gender-other">Other</label>
            </div>
          </div>

          <div className="form-input button-parent gap flex">
            <input className="reset" type="reset" />
            <input className="submit" type="submit" />
          </div>
        </form>
      </main>
    </body>
  );
}

export default Form;
import React from 'react';

import './generalStyle.css'

export default function InputField() {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a task' className='input-box'/>
      <button className="input-submit" type='submit'>GO</button>
    </form>
  );
}

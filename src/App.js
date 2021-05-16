import React, { useState, Fragment } from 'react';
import './App.css';

import CustomSelect from './components/CustomSelect';
import { colors } from './data';

const App = () => {
  
  const [formData, setFormData] = useState({
    currentTheme: "dark",
    options: {
      value: '',
      error: '',
    },
  });


  const ToggleFnc = () => {
		this.classList.toggle('dark');
	}

  
  

  
  const changeHandler = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: {
        value,
        error: value !== '' ? '' : prev[name].error
      }
    }));
  }

  return (
    <Fragment>
      <header>
        <h1>ReactJS select</h1>
      </header>
      <div className="container">
        <form className="form page">

          <div className="form__check-options">
          <button className="toggler btn" onClick={ToggleFnc}>
            I wanna dark!
          </button>
            {/* <label for="small">Small</label>
            <input id="small" className="form__check-options--input" type="radio" name="size-small"/>

            <label for="Secondary">Secondary</label>
            <input id="secondary" className="form__check-options--input" type="radio" name="size-secondary"/>

            <label for="Large">Large</label>
            <input id="large" className="form__check-options--input" type="radio" name="size-large"/> */}
          </div>

          <div className="form__check-options">
            <label>
              Selected options:&nbsp; 
            </label>
            <span>{formData.options.value}</span>
          </div>
          <CustomSelect 
            searchPlaceholder="Search"
            data={colors}
            value={formData.options.value}
            onChange={changeHandler}
            error={formData.options.error}
            name="options"
          />
        </form>
      </div>
    </Fragment>
  );
}

export default App;

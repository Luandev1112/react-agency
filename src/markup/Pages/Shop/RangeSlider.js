import React from 'react';
import {  } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
 
  const [value, setValue] = React.useState([20, 80]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="price-slide-2">
		<Slider
			value={value}
			onChange={handleChange}
			valueLabelDisplay="auto"
			aria-labelledby="range-slider"
			getAriaValueText={valuetext}
		/>
    </div>
  );
}
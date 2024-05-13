// DaySlider.js
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DaySlider = ({ range, setRange }) => {
  const handleChange = (newValue) => {
    setRange(newValue);
  };

  const formatter = (value) => {
    return `${value.toLocaleString('vi-VN')}Day`;
  };

  return (
    <div>
      <h4 className="py-4">Day</h4>
      <Slider
        range
        min={0}
        max={7}
        value={range}
        onChange={handleChange}
        tipFormatter={formatter}
      />
      <div className="slider-values">
        <span>{formatter(range[0])}</span>
        <span>{formatter(range[1])}</span>
      </div>
    </div>
  );
};

export default DaySlider;

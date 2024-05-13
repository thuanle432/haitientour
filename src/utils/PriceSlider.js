// PriceSlider.js
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = ({ range, setRange }) => {
  const handleChange = (newValue) => {
    setRange(newValue);
  };

  const formatter = (value) => {
    return value.toLocaleString('vi-VN').replace(/,/g, '.') + '₫';
  };

  return (
    <div>
      <h4 className="py-4">Giá</h4>
      <Slider
        range
        min={0}
        max={5000000}
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

export default PriceSlider;
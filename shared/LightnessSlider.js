import React from 'react';
import Slider from 'react-native-slider';

const LightnessSlider = ({value, onValueChange}) => {
  return (
    <Slider
      maximumValue={100}
      step={1}
      minimumTrackTintColor={'#ce467b'}
      maximumTrackTintColor={'#767577'}
      thumbTintColor={'#c2185b'}
      value={value}
      onValueChange={onValueChange}></Slider>
  );
};
export default LightnessSlider;

import React from 'react';
import {Switch} from 'react-native';

const CustomSwitch = ({value, onValueChange}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#ce467b'}}
      thumbColor={value ? '#c2185b' : '#e0e0e0'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
    />
  );
};

export default CustomSwitch;

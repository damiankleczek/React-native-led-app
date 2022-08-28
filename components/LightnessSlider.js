import React from 'react';
import Slider from 'react-native-slider';
import {StyleSheet, Text, View} from 'react-native';

const LightnessSlider = ({value, onValueChange}) => {
  return (
    <View style={styles.lightnessArea}>
      <Text style={styles.lightnessAreaText}>Jasność: {value}%</Text>
      <Slider
        maximumValue={100}
        step={1}
        minimumTrackTintColor={'#ce467b'}
        maximumTrackTintColor={'#767577'}
        thumbTintColor={'#c2185b'}
        value={value}
        onValueChange={onValueChange}></Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  lightnessArea: {
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 5,
  },

  lightnessAreaText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default LightnessSlider;

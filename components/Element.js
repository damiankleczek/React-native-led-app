import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomSwitch from './CustomSwitch';
import LightnessSlider from './LightnessSlider';
import ColorPicker from './ColorPicker';
import tinycolor from 'tinycolor2';

const Element = ({
  led,
  updateSwitch,
  updateColorPicker,
  updateColorPickerOnOk,
  updateSlider,
  deleteElement,
}) => {
  const [recentsThree, setRecentsThree] = useState([
    '#247ba0',
    '#70c1b3',
    '#b2dbbf',
    '#f3ffbd',
    '#ff1654',
  ]);

  return (
    <View style={styles.elementHolder}>
      <View style={styles.elementHeader}>
        <Text style={styles.text}>{led.label}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              deleteElement(led.key);
            }}>
            <View>
              <Image
                source={require('../assets/icons/icons8-trash-24.png')}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <CustomSwitch
            value={led.isSwitchOn}
            onValueChange={() => {
              updateSwitch(led.key);
            }}
          />
        </View>
      </View>

      <View style={styles.spaceline}></View>

      <ColorPicker
        visible={led.isColorPickerVisible}
        color={led.color}
        swatches={recentsThree}
        onPress={() => {
          updateColorPicker(led.key);
        }}
        onCancel={() => {
          updateColorPicker(led.key);
        }}
        onOk={(colorHex) => {
          updateColorPickerOnOk(led.key, tinycolor(colorHex).toHsl()),
            setRecentsThree([
              colorHex,
              ...recentsThree.filter((c) => c !== colorHex).slice(0, 4),
            ]);
        }}
      />

      <LightnessSlider
        value={led.sliderValue}
        onValueChange={(value) => {
          updateSlider(led.key, value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  elementHolder: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: 175,
  },

  elementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
  },

  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 5,
  },

  spaceline: {
    backgroundColor: '#337f83',
    height: 2,
    marginHorizontal: 30,
  },
});

export default Element;

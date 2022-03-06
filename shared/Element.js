import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomSwitch from './CustomSwitch';
import LightnessSlider from './LightnessSlider';
import ColorPicker from './ColorPicker';
import tinycolor from 'tinycolor2';

const Element = ({
  led,
  leds,
  i,
  updateSwitch,
  updateModal,
  updateModalOnOk,
  updateSlider,
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
      <View style={styles.element}>
        <Text style={styles.text}>{led.label}</Text>
        <CustomSwitch
          onValueChange={() => {
            updateSwitch(leds, i);
          }}
          // onValueChange={updateSwitch(leds, i, led, led.key)}
          value={led.isSwitchOn}
        />
      </View>

      <View style={styles.spaceline}></View>

      <View style={styles.colorArea}>
        <Text style={styles.colorPickerLabel}>Kolor:</Text>
        <ColorPicker
          onPress={() => {
            updateModal(leds, i, true);
          }}
          visible={led.isModalVisible}
          color={led.color}
          onCancel={() => {
            updateModal(leds, i, false);
          }}
          onOk={(colorHex) => {
            updateModalOnOk(leds, i, false, tinycolor(colorHex).toHsl()),
              setRecentsThree([
                colorHex,
                ...recentsThree.filter((c) => c !== colorHex).slice(0, 4),
              ]);
          }}
          swatches={recentsThree}
        />
      </View>

      <View style={styles.lightnessArea}>
        <Text style={styles.lightnessAreaText}>
          Jasność: {led.sliderValue}%
        </Text>
        <LightnessSlider
          value={led.sliderValue}
          onValueChange={(value) => {
            updateSlider(leds, i, value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elementHolder: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
    height: 175,
  },

  element: {
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

  spaceline: {
    backgroundColor: '#337f83',
    height: 2,
    marginHorizontal: 30,
  },

  colorArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  colorPickerLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },

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

export default Element;

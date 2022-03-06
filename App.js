import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import Element from './shared/Element';

const App = () => {
  console.warn = () => {};

  const [leds, setLeds] = useState([
    {
      key: 1,
      label: 'LED1',
      isSwitchOn: false,
      isModalVisible: false,
      color: 'yellow',
      sliderValue: 10,
    },
    {
      key: 2,
      label: 'LED2',
      isSwitchOn: false,
      isModalVisible: false,
      color: 'orange',
      sliderValue: 30,
    },
    {
      key: 3,
      label: 'LED3',
      isSwitchOn: false,
      isModalVisible: false,
      color: 'red',
      sliderValue: 50,
    },
  ]);

  const updateSwitch = (leds, i) => {
    let newLeds = [...leds];
    newLeds[i] = {
      ...newLeds[i],
      isSwitchOn: !newLeds[i].isSwitchOn,
    };
    setLeds(newLeds);
  };

  const updateModal = (leds, i, isVisible) => {
    let newLeds = [...leds];
    newLeds[i] = {
      ...newLeds[i],
      isModalVisible: isVisible,
    };
    setLeds(newLeds);
  };

  const updateModalOnOk = (leds, i, isVisible, color) => {
    let newLeds = [...leds];
    newLeds[i] = {
      ...newLeds[i],
      isModalVisible: isVisible,
      color: color,
    };
    setLeds(newLeds);
  };

  const updateSlider = (leds, i, value) => {
    let newLeds = [...leds];
    newLeds[i] = {
      ...newLeds[i],
      sliderValue: value,
    };
    setLeds(newLeds);
  };

  // const updateSwitch = (leds, i, led, key) => {
  //   setLeds((prevLeds) => {
  //     return [
  //       ...prevLeds,
  //       {...prevLeds[i], isSwitchOn: !prevLeds[i].isSwitchOn},
  //     ];
  //     // return led.key === key ? {...led, isSwitchOn: !led.isSwitchOn} : led;
  //   });
  // };

  let list = () => {
    return leds.map((led, i) => {
      return (
        <Element
          key={led.key}
          led={led}
          leds={leds}
          i={i}
          updateSwitch={updateSwitch}
          updateModalOnOk={updateModalOnOk}
          updateModal={updateModal}
          updateSlider={updateSlider}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
      <View style={styles.content}>{list()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#337f83',
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },

  statusbar: {
    backgroundColor: '#004346',
  },
});
export default App;

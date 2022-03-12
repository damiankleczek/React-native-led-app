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

  const updateSwitch = (ledKey) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        // if (led.key === ledKey) {
        //   return {...led, isSwitchOn: !led.isSwitchOn};
        // }
        // return led;
        return led.key === ledKey ? {...led, isSwitchOn: !led.isSwitchOn} : led;
      });
    });
  };

  const updateModal = (ledKey, isVisible) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey ? {...led, isModalVisible: isVisible} : led;
      });
    });
  };

  const updateModalOnOk = (ledKey, isVisible, color) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey
          ? {...led, isModalVisible: isVisible, color: color}
          : led;
      });
    });
  };

  const updateSlider = (ledKey, value) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey ? {...led, sliderValue: value} : led;
      });
    });
  };

  let list = () => {
    return leds.map((led, i) => {
      return (
        <Element
          key={led.key}
          led={led}
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
    marginVertical: 4,
  },

  statusbar: {
    backgroundColor: '#004346',
  },
});
export default App;

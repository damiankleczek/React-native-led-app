import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Button,
  Text,
} from 'react-native';
import Element from './shared/Element';
import AddNewElement from './shared/AddNewElement';

const App = () => {
  console.warn = () => {};

  const [leds, setLeds] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const updateSwitch = (ledKey) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey ? {...led, isSwitchOn: !led.isSwitchOn} : led;
      });
    });
  };

  const updateColorPicker = (ledKey) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey
          ? {...led, isColorPickerVisible: !led.isColorPickerVisible}
          : led;
      });
    });
  };

  const updateColorPickerOnOk = (ledKey, color) => {
    setLeds((prevLeds) => {
      return prevLeds.map((led) => {
        return led.key === ledKey
          ? {
              ...led,
              isColorPickerVisible: !led.isColorPickerVisible,
              color: color,
            }
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

  const toggleNewElementForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const addNewElement = (newLed) => {
    setLeds((prevLeds) => {
      return [...prevLeds, newLed];
    });
    toggleNewElementForm();
  };

  const deleteElement = (ledKey) => {
    setLeds((prevLeds) => {
      return prevLeds.filter((led) => led.key !== ledKey);
    });
  };

  let list = () => {
    return leds.map((led, i) => {
      return (
        <Element
          key={i}
          led={led}
          updateSwitch={updateSwitch}
          updateColorPickerOnOk={updateColorPickerOnOk}
          updateColorPicker={updateColorPicker}
          updateSlider={updateSlider}
          deleteElement={deleteElement}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
      <ScrollView style={styles.content}>
        {leds.length === 0 ? (
          <View style={styles.initialContent}>
            <Text style={styles.initialText}>
              Brak elementów do wyświetlenia. Dodaj pierwszy element.
            </Text>
          </View>
        ) : (
          list()
        )}
      </ScrollView>

      <View style={styles.newElementButton}>
        <Button
          color={styles.newElementButton.color}
          title="Dodaj nowy"
          onPress={toggleNewElementForm}></Button>
      </View>

      <AddNewElement
        isOpen={isFormOpen}
        addNewElement={addNewElement}
        toggleHandler={toggleNewElementForm}
      />
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

  initialContent: {
    marginVertical: 10,
    marginTop: 4,
  },

  initialText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  newElementButton: {
    color: '#c2185b',
    margin: 5,
  },
});
export default App;

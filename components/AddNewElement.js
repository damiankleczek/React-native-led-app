import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';

const AddNewElement = ({toggleHandler, isOpen, addNewElement}) => {
  const [name, setName] = useState('');

  const onChangeName = (value) => {
    setName(value);
  };

  let newElement = {
    key: `${Date.now()}${name}`,
    label: name,
    isSwitchOn: false,
    isColorPickerVisible: false,
    color: 'red',
    sliderValue: 50,
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={isOpen}
      onRequestClose={toggleHandler}>
      <View style={styles.content}>
        <TouchableOpacity onPress={toggleHandler}>
          <View style={styles.closeContainer}>
            <Image
              source={require('../assets/icons/icons8-close-24.png')}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          onChangeText={onChangeName}
          placeholder="Wpisz nazwę"
          placeholderTextColor={styles.textInput.color}
        />

        <View style={styles.addElementButton}>
          <Button
            color={styles.addElementButton.color}
            title="Dodaj"
            onPress={() => {
              addNewElement(newElement), setName('');
            }}></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },

  closeContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 3,
  },

  closeText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif-medium',
    fontSize: 17,
  },

  textInput: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    fontSize: 18,
    color: '#000',
  },

  addElementButton: {
    color: '#c2185b',
    margin: 10,
  },
});

export default AddNewElement;

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SlidersColorPicker} from 'react-native-color';
import tinycolor from 'tinycolor2';

const ColorPicker = ({onPress, visible, color, onCancel, onOk, swatches}) => {
  return (
    <View style={styles.colorArea}>
      <Text style={styles.colorPickerLabel}>Kolor:</Text>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.colorPreview,
            {backgroundColor: tinycolor(color).toHslString()},
          ]}>
          <Text style={styles.colorPicker}></Text>
        </TouchableOpacity>

        <SlidersColorPicker
          visible={visible}
          color={color}
          returnMode={'hex'}
          onCancel={onCancel}
          onOk={onOk}
          swatches={swatches}
          swatchesLabel="RECENTS"
          okLabel="Done"
          cancelLabel="Cancel"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

  colorPreview: {
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.75,
  },

  colorPicker: {
    width: 20,
    height: 20,
  },
});

export default ColorPicker;

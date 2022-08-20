import {Pressable, StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

const CategoryGridTile = ({title, color}: any) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc'}}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    width: 100,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    backgroundColor: 'white',
    overflow: Platform.OS === 'ios' ? 'hidden' : 'hidden',
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

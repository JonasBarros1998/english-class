import React from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {Center} from 'native-base';
import {WIDTH_SCREEN as widthScreen} from './constants';

const styles = StyleSheet.create({
  ball: {
    height: 80,
    width: 80,
    borderColor: 'black',
    borderRadius: 40,
    borderWidth: 40,
  },
});

function Gesture() {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (parseInt(gesture.dx.toFixed(), 10) >= 0) {
        position.setValue({x: 0, y: 0});
        return;
      }
      position.setValue({x: gesture.dx, y: 0});
    },

    onPanResponderRelease: (event, gesture) => {
      if (parseInt(gesture.dx.toFixed(), 10) <= -50) {
        Animated.spring(position, {
          toValue: {
            x: 100 - widthScreen,
            y: gesture.dy,
          },
          tension: 5,
          useNativeDriver: true,
        }).start();
        return;
      }
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
        tension: 5,
        useNativeDriver: true,
      }).start();
    },
  });

  const handlers = panResponder.panHandlers;

  return (
    <Center>
      <Animated.View
        style={[styles.ball, position.getTranslateTransform()]}
        {...handlers}
      />
    </Center>
  );
}

export default Gesture;

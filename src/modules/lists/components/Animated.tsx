import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  View
} from 'react-native';
import {WIDTH_SCREEN, HALF_THE_SCREEN} from '@global/constants';
import {styles} from '../styles/cards';
import {useTheme} from 'react-native-paper';

type params = {
  deleteCard: () => void;
  children: React.ReactNode;
};

export default function AnimatedCards(props: params) {
  const position = new Animated.ValueXY();
  const theme = useTheme() as any;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (
      event: GestureResponderEvent,
      gestureState: PanResponderGestureState,
    ) => {
      return true;
    },
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (parseInt(gesture.dx.toFixed(), 10) >= 0) {
        position.setValue({x: 0, y: 0});
      } else {
        position.setValue({x: gesture.dx, y: 0});
      }
    },
    onPanResponderEnd: (event, gesture) => {
      const deleteCard = parseInt(gesture.dx.toFixed(), 10) <= -HALF_THE_SCREEN;
      if (deleteCard) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH_SCREEN,
            y: 0,
          },
          tension: 2,
          useNativeDriver: true,
          velocity: {
            x: 20,
            y: 20,
          },
        }).start();
        if (typeof props.deleteCard !== 'undefined') {
          setTimeout(() => props.deleteCard(), 300);
        }
        return;
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          tension: 2,
          useNativeDriver: true,
          velocity: {
            x: 20,
            y: 20,
          },
        }).start();
      }
    },
  });

  const handlers = panResponder.panHandlers;

  return (
    <Animated.View style={[position.getTranslateTransform()]} {...handlers}>
      <View style={{
        ...styles(theme).animated
      }}>
        {props.children}
      </View>
    </Animated.View>
  );
}


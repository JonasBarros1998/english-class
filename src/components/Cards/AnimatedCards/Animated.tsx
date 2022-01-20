import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';
import {View} from 'native-base';
import {WIDTH_SCREEN as widthScreen, HALF_THE_SCREEN} from '@global/constants';
import {createCard} from '@global/types/cards';

type params = {
  deleteCard: (card: createCard) => void;
  cardItem: createCard;
  children: React.ReactNode;
};

function AnimatedCard(props: params) {
  const position = new Animated.ValueXY();

  function removeCard(cardItem: createCard) {
    props.deleteCard(cardItem);
  }

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

      /*
      console.log('JONAS >>> ', parseInt(gesture.dx.toFixed(), 10) <= -2);
      if (parseInt(gesture.dx.toFixed(), 10) <= -1) {
        dispatch(
          editableInputs({
            input: {
              type: false,
            },
          }),
        );
      } else {
        dispatch(
          editableInputs({
            input: {
              type: true,
            },
          }),
        );
      }*/
    },
    onPanResponderEnd: (event, gesture) => {
      const deleteCard = parseInt(gesture.dx.toFixed(), 10) <= -HALF_THE_SCREEN;
      if (deleteCard) {
        Animated.spring(position, {
          toValue: {
            x: -widthScreen,
            y: 0,
          },
          tension: 2,
          useNativeDriver: true,
          velocity: {
            x: 20,
            y: 20,
          },
        }).start();
        setTimeout(() => removeCard(props.cardItem), 300);
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
      <View alignItems="center" marginTop={2}>
        {props.children}
      </View>
    </Animated.View>
  );
}

export default AnimatedCard;

import React from 'react';
import {Animated, PanResponder} from 'react-native';
import {WIDTH_SCREEN as widthScreen, HALF_THE_SCREEN} from '@global/constants';
import {View} from 'native-base';
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
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (parseInt(gesture.dx.toFixed(), 10) >= 0) {
        position.setValue({x: 0, y: 0});
        return;
      }
      position.setValue({x: gesture.dx, y: 0});
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
        }).start();
        setTimeout(() => removeCard(props.cardItem), 400);
        return;
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          tension: 10,
          useNativeDriver: true,
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

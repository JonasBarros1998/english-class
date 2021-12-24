import React from 'react';
import {Animated, PanResponder} from 'react-native';
import {WIDTH_SCREEN as widthScreen} from '@global/constants';
import {View} from 'native-base';
import {deleteItem} from '../useCase/cards';

function AnimatedCard(props: any) {
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
      const deleteCard = parseInt(gesture.dx.toFixed(), 10) <= -50;
      if (deleteCard) {
        Animated.spring(position, {
          toValue: {
            x: widthScreen - 1000,
            y: gesture.dy,
          },
          tension: 5,
          useNativeDriver: true,
        }).start();
        deleteItem(props.cardItem);
        props.updateStateComponent();
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
    <Animated.View style={[position.getTranslateTransform()]} {...handlers}>
      <View alignItems="center" marginTop={2}>
        {props.children}
      </View>
    </Animated.View>
  );
}

export default AnimatedCard;

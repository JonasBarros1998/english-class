import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {render} from '@testing-library/react-native';

import PrivateCards from '@components/Cards/privateCards';

const database = {
  quantity: 12,
  listTitle: 'my list',
  cards: [
    {
      id: 123,
      word: 'home',
      translation: 'casa',
      context: 'my home',
    },
  ],
};

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

it('should return palavras if total quantity bigger 1', function () {
  const {queryByTestId} = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <PrivateCards {...database} />
    </NativeBaseProvider>,
  );

  const queryById = queryByTestId('quantityWords');
  const totalWoord = queryById?.props.children.join('');
  expect(totalWoord).toEqual('12 palavras');
});

it('should returned ', function () {
  database.quantity = 1;

  const {queryByTestId} = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <PrivateCards {...database} />
    </NativeBaseProvider>,
  );
  const queryById = queryByTestId('quantityWords');
  const totalWord = queryById?.props.children.join('');
  expect(totalWord).toEqual('1 palavra');
});

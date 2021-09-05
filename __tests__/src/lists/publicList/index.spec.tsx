import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {render} from '@testing-library/react-native';

import Card from '../../../../src/lists/publicLists/Card';

const database = {
  name: 'my house',
  quantityWords: '9',
  idioma: 'inglês',
  user: {
    name: 'Stive',
    photo: 'http://my-photo-url',
  },
};

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

it('should return palavras if total quantity bigger 1', function () {
  const {queryByTestId} = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Card {...database} />
    </NativeBaseProvider>,
  );
  const queryById = queryByTestId('quantityWords');
  const totalWoord = queryById?.props.children.join('');
  expect(totalWoord).toEqual('9 palavras');
});

it('should returned ', function () {
  database.quantityWords = '1';

  const {queryByTestId} = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Card {...database} />
    </NativeBaseProvider>,
  );
  const queryById = queryByTestId('quantityWords');
  const totalWord = queryById?.props.children.join('');
  expect(totalWord).toEqual('1 palavra');
});

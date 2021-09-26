import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ListDetails from '@lists/listDetails';
import {NativeBaseProvider} from 'native-base';
import {ReactTestInstance} from 'react-test-renderer';

const list = {
  word: 'shoes',
  translation: 'tenis',
  phrase:
    'my shoes is red my shoes is red my shoes is red my shoes is red my shoes is red my shoes is red my shoes is red my shoes is red',
};

const phraseCard =
  'my shoes is red my shoes is red my shoes is red my shoes is red ...';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

it('render componente listDetails', () => {
  const {queryByText} = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <ListDetails {...list} />
    </NativeBaseProvider>,
  );

  const queryText = queryByText(phraseCard) as ReactTestInstance;
  fireEvent.press(queryText);
  expect(queryText.props.children).toEqual(list.phrase);
});

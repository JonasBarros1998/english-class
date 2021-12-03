import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {render} from '@testing-library/react-native';

import {CreateLists} from '@components/Save/index';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

test('should render one card with tree inputs', function () {
  const renderLists = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <CreateLists />
    </NativeBaseProvider>,
  );

  const queryById = renderLists.getByTestId(new RegExp('card-[0-9]*', 'g'));
  expect(queryById.props.children).toHaveLength(3);
});

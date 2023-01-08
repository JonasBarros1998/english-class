import React from 'react';
import Info from '@components/Dialogs/Info';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

jest.mock('react-native-paper', () => ({
  __esModule: true,
  IconButton: () => 'IconButton',
  Dialog: () => 'Dialog',
  Paragraph: () => 'Paragraph',
  Portal: () => 'Portal',
  Button: () => 'Button',
  useTheme: () => ({
    colors: {
      primary: 'black',
    },
  }),
}));

describe('Info Dialog', function () {
  test('snapshot component', function () {
    const tree = renderer.create(<Info visible={true} message="Lista atualizada!"/>).toJSON();
    expect(tree).toMatchInlineSnapshot(`"Portal"`);
  });
});

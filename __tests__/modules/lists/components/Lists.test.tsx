import React from 'react';
import { render } from '@testing-library/react-native';
import Lists from '@modules/lists/components/Lists';
import { findAllLists } from '@modules/lists/useCases/readLists';
import {findAll} from '../../../../src/services/firestore/actions/read';

jest.mock('../../../../src/services/firestore/actions/read');

jest.mock('../../../../src/modules/lists/useCases/readLists.ts');

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

jest.mock('react-native-paper', () => ({
  __esModule: true,
  IconButton: () => 'IconButton',
  useTheme: () => ({
    colors: {
      primary: "black"
    }
  })
}));


const findCards = findAll as any;
findCards.mockImplementation(() => {
  return new Promise((resolve, _) => {
    resolve({
      cardsOfList: [{
        id: '123',
        word: 'card',
        context: 'my card',
        translation: 'cartao'
      }],
      title: 'my first card',
    });
  });
})

const findLists = findAllLists as any;

findLists.mockImplementation(() => {
  return new Promise((resolve, _) => {
    resolve({
      cardsOfList: [{
        id: '123',
        word: 'card',
        context: 'my card',
        translation: 'cartao'
      }],
      title: 'my first card',
    });
  });
});



describe('List all cards', function() {

  test('When load component, should render all cards', function() {

    const component = render(<Lists />).toJSON() as any;
    if (component !== null) {
      expect(component.type).toMatch('View');
    }

  })
});
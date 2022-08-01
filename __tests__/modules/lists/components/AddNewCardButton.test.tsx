import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AddNewCardButton from '@src/modules/lists/components/AddNewCardButton';
import { createNewCard } from '../../../../src/modules/lists/useCases/addNewCardInList';

jest.mock('../../../../src/modules/lists/useCases/addNewCardInList');

jest.mock('react-native-paper', () => ({
  __esModule: true,
  IconButton: () => 'IconButton',
  useTheme: () => 'useTheme'
}));

const createNewCardMock = createNewCard as any;

createNewCardMock.mockImplementation(() => ({
  id: "1234",
  word: '',
  translation: '',
  context: ''
}));

describe('AddNewCardButton', function() {
  test('WhenPressButtonShouldCallFunctionCreateNewCard', function() {
    const {getByTestId} = render(
      <AddNewCardButton 
        updateState={() => {}}
      />
    );
    
    getByTestId('button').children.map((value) => {
      if (typeof value !== 'string') {
        fireEvent.press(value);
      }
    });

    expect(createNewCard).toHaveBeenCalledTimes(1);
  });
});

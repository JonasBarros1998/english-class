import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddNewCardButton from '@src/modules/lists/components/AddNewCardButton';
import { createNewCard } from '../../../../src/modules/lists/useCases/addNewCardInList';
import { Card } from '@global/interfaces/Card';

jest.mock('../../../../src/modules/lists/useCases/addNewCardInList');

jest.mock('react-native-paper', () => ({
  __esModule: true,
  IconButton: () => 'IconButton',
  useTheme: () => ({
    colors: {
      primary: "black"
    }
  })
}));

const createNewCardMock = createNewCard as any;

createNewCardMock.mockImplementation(() => ({
  id: "1234",
  word: '',
  translation: '',
  context: ''
}));

const updateState = jest.fn((card: Card) => {});

describe('AddNewCardButton', function() {

  beforeEach(() => {
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
  });

  test('WhenPressButtonShouldCallFunctionCreateNewCard', function() {
    expect(createNewCard).toHaveBeenCalledTimes(1);
  });

  test('WhenPressButtonShouldCallFunctionUpdateStateWithObjectForAddNewCard', function() {
    const {getByTestId} = render(
      <AddNewCardButton 
        updateState={updateState}
      />
    );

    getByTestId('button').children.map((value) => {
      if (typeof value !== 'string') {
        fireEvent.press(value);
      }
    });

    expect(updateState).toHaveBeenCalledWith({
      id: "1234",
      word: '',
      translation: '',
      context: ''
    });
  });

  test("WhenPressButtonShouldCallFunctionUpdateState", function() {
    const {getByTestId} = render(
      <AddNewCardButton 
        updateState={updateState}
      />
    );

    getByTestId('button').children.map((value) => {
      if (typeof value !== 'string') {
        fireEvent.press(value);
      }
    });

    expect(updateState).toHaveBeenCalledTimes(1);
  });

});

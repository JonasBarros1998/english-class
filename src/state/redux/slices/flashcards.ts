import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FlashCard, ResultFlashCard } from "@global/interfaces/FlashCard";

const flashcards = createSlice({
  name: 'flashcards',
  initialState: {
    flashcards: [] as FlashCard[],
    result: {correct: 0, error: 0} as ResultFlashCard
  },

  reducers: {
    addNewFlashCard: {
      reducer:(state, action: PayloadAction<FlashCard>) => {
        
        state.flashcards.push(action.payload);
      },
      prepare: (datas: FlashCard) => {
        return {payload: datas}
      }
    },

    updateFlashCard: {
      reducer: (state, action: PayloadAction<FlashCard[]>) => {
        return {
          ...state,
          flashcards: action.payload
        }
      },

      prepare: (datas: FlashCard[]) => {
        return {payload: datas};
      }
    },

    updateResult: {
      reducer: (state, action: PayloadAction<ResultFlashCard>) => {
        return {
          ...state,
          result: action.payload
        }
      },

      prepare: (datas: ResultFlashCard) => {
        return {payload: datas};
      }
    }

  }
});

export const {addNewFlashCard, updateFlashCard, updateResult} = flashcards.actions
export default flashcards.reducer;
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FlashCard } from "@global/interfaces/FlashCard";

const flashcards = createSlice({
  name: 'flashcards',
  initialState: {
    flashcards: [] as FlashCard[]
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
        //console.log("updateFlashCard >> ", datas)
        return {payload: datas};
      }
    }
  }
});

export const {addNewFlashCard, updateFlashCard} = flashcards.actions
export default flashcards.reducer;
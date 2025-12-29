import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment(state) {
      state.value +=1;
    } 
  },
  selectors: {
    selectCount(state) {
      return state.value
    }
  }
})

export const { selectCount } = counterSlice.selectors;
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
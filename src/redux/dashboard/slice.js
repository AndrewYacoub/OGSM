import { createSlice } from "@reduxjs/toolkit";
import { fake } from "../../fake";

export const Item1Slice = createSlice({
  name: "items",
  initialState: { value: fake },
  reducers: {
    addItem1: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const Item2Slice = createSlice({
  name: "SecondItems",
  initialState: { value: fake },
  reducers: {
    addItem2: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem2: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName2: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const Item3Slice = createSlice({
  name: "ThirdItems",
  initialState: { value: fake },
  reducers: {
    addItem3: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem3: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName3: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const Item4Slice = createSlice({
  name: "FourthItems",
  initialState: { value: fake },
  reducers: {
    addItem4: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem4: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName4: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const Item5Slice = createSlice({
  name: "FifthItems",
  initialState: { value: fake },
  reducers: {
    addItem5: (state, action) => {
      state.value.push(action.payload);
    },

    deleteItem5: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },

    updateName5: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const { addItem1, deleteItem, updateName } = Item1Slice.actions;
export const { addItem2, deleteItem2, updateName2} = Item2Slice.actions;
export const { addItem3, deleteItem3, updateName3} = Item3Slice.actions;
export const { addItem4, deleteItem4, updateName4} = Item4Slice.actions;
export const { addItem5, deleteItem5, updateName5} = Item5Slice.actions;

// export default Item1Slice.reducer;
export const item1reducer = Item1Slice.reducer
export const item2reducer = Item2Slice.reducer
export const item3reducer = Item3Slice.reducer
export const item4reducer = Item4Slice.reducer
export const item5reducer = Item5Slice.reducer
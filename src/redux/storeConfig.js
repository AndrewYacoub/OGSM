import { configureStore } from "@reduxjs/toolkit"
import { item1reducer, item2reducer, item3reducer, item4reducer, item5reducer } from "./dashboard/slice"

const store = configureStore ({
  reducer: {
    items: item1reducer,
    SecondItems: item2reducer,
    ThirdItems: item3reducer,
    FourthItems: item4reducer,
    FifthItems: item5reducer
  },

})

export default store;
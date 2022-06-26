import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    deger: "Herhangi bir işlem yapmadın!",
  },
  reducers: {
    Arttir: (state) => {
      state.value += 1;
      state.deger = "Son işlemin arttırma işlemiydi!";
    },
    Azalt: (state) => {
      if (state.value <= 0) {
        state.deger = "Sayı değeri en az 0 olmak zorundadır.";
      } else {
        state.value -= 1;
        state.deger = "Son işlemin azaltma işlemiydi!";
      }
    },
    InputDeger: (state, action) => {
      if (Number(action.payload <= 1)) {
        state.deger =
          "Bu inputu kullanarak arttıracağınız değer en az 2 olmalıdır.";
      } else {
        state.value += Number(action.payload);
        state.deger = "Son işlemin arttırma işlemiydi!";
      }
    },
  },
});

export const { Arttir, Azalt, InputDeger } = counterSlice.actions;
export default counterSlice.reducer;

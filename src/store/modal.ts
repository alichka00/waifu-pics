import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface I_InitialState {
  selectedWaifu: string | null;
}

const initialState: I_InitialState = {
  selectedWaifu: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.selectedWaifu = action.payload;
    },
    closeModal(state) {
      state.selectedWaifu = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

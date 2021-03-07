import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "buffers",
  initialState: {
    buffers: [
      {
        title: "Default",
        type: "default",
      },
      {
        title: "Mini buffer",
        type: "mini-buffer",
      },
    ],
  },
  reducers: {
    addBuffer: (state, { title, type, data }) => {
      const newBuffer = { title, type, data }

      state.buffers = [...state.buffers, newBuffer]
    },
  },
})

export const { addBuffer } = slice.actions

export default slice.reducer

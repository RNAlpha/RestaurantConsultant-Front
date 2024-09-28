import {
  createSlice,
  createAsyncThunk,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { AIChatData } from "./type";

//dummy fetching
const timer = async (time: number) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(true), time));

export const chatQuery = createAsyncThunk(
  "AIChatSlice/chatQuery",
  async (question: string, thunkAPI) => {
    const t = await timer(5000);
    if (t) return "response is made";
    return "failed response";
  }
);

type AIChatSliceState = {
  marker: number;
  data: AIChatData[];
};

export const AIChatSlice = createSlice<
  AIChatSliceState,
  {},
  "aiChatData",
  SliceSelectors<AIChatSliceState>
>({
  name: "aiChatData",
  initialState: {
    marker: 0,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(chatQuery.pending, (state, action) => {
      state.data = [
        ...state.data,
        {
          id: state.marker,
          requestId: action.meta.requestId,
          question: action.meta.arg,
          answer: "",
        },
      ];
      state.marker += 1;
    });
    builder.addCase(chatQuery.rejected, (state, action) => {
      const target = state.data.find(
        (p) => p.requestId === action.meta.requestId
      );
      if (!target) return;
      const sliceIndex = state.data.indexOf(target);
      const former = state.data.slice(0, sliceIndex);
      const latter = state.data.slice(sliceIndex + 1, state.data.length);

      target.answer = action.payload as string;

      state.data = [...former, target, ...latter];
    });
    builder.addCase(chatQuery.fulfilled, (state, action) => {
      const target = state.data.find(
        (p) => p.requestId === action.meta.requestId
      );
      if (!target) return;
      const sliceIndex = state.data.indexOf(target);
      const former = state.data.slice(0, sliceIndex);
      const latter = state.data.slice(sliceIndex + 1, state.data.length);
      target.answer = action.payload as string;

      state.data = [...former, target, ...latter];
    });
  },
});

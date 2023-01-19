import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { getStockDetails } from "../../../service/getStockDetailsService";
import { message } from "antd";
import { IAllStock } from "../../../interfaces/stockInterfaces";
import {ERROR_MESSAGE} from "../../../constants/index";

const initialState: IAllStock = {
  isProcessingRequest: false,
  data: [],
};

export const GetAllStockDetails = createSlice({
  name: "getStockDetails",
  initialState,
  reducers: {
    setStockDetails: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStockInfo.pending, (state) => {
        state.isProcessingRequest = true;
      })
      .addCase(getAllStockInfo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isProcessingRequest = false;
      })
      .addCase(getAllStockInfo.rejected, (state) => {
        state.isProcessingRequest = true;
      });
  },
});

export const getAllStockInfo = createAsyncThunk(
    '',
    async (thunkAPI) => {
      try {
        const response = await getStockDetails();
        return response.data;
      } catch (err: any) {
        message.error(ERROR_MESSAGE);
      }
    }
  );


export const { setStockDetails } = GetAllStockDetails.actions;

export const getAllStockDetails = (state: RootState) => state.stockDetails;

export const getAllStockDetailsReducer = GetAllStockDetails.reducer;

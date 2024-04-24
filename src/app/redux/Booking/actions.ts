import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export type TData = {
  "person": Record<string, string>
  "packages": Record<string, string>[]
}

export const postReservationData = createAsyncThunk(
  'booking/post',
  async (data: TData, {rejectWithValue}) => {
    try {
      return await axios.post('https://a26215-7025.x.d-f.pw/api/mail', data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

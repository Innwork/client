import {createAsyncThunk} from "@reduxjs/toolkit";
import {MailService} from "@src/entities/mail/mail.service";

export type TData = {
  "lngCode": "string"
  "person": Record<string, string>
  "packages": Record<string, string>[]
}

export const postReservationData = createAsyncThunk(
  'booking/post',
  async (data: TData, {rejectWithValue}) => {
    try {
      return await MailService.postReservationData(data).then(res => res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

import {TgInstance} from "@src/app/api";
import {TDataTG} from "@src/app/redux/Booking/actions";

export class TelegramService {
    static async postReservationDataTg (data: TDataTG) {
      return await TgInstance.post('/', data)
    }
}
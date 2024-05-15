import {instance} from "@src/app/api";
import {TData} from "@src/app/redux/Booking/actions";

export class MailService {
    static async postReservationData (data: TData) {
      return await instance.post('/reservation/', data)
    }
}
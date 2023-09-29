import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/app.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsDetail: RoomDetails[] = [
    {
      rooNo: 1,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 2,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 3,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 4,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
  ];
  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig) {
    console.log(this.config.apiEndPoint);
    console.log('Room service initialized...');
  }
  getRooms() {
    return this.roomsDetail;
  }
}
